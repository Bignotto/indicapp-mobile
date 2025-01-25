import {
  GoogleSignin,
  isSuccessResponse,
  statusCodes,
} from "@react-native-google-signin/google-signin";
import api from "@services/api";
import { supabase } from "@services/supabase";
import { AuthSession } from "@supabase/supabase-js";
import { EmailInUseError } from "@utils/errors/EmailInUse";
import { InvalidCredentialsError } from "@utils/errors/InvalidCredentials";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

export type UserProfile = {
  id?: string;
  email?: string;
  name?: string;
  avatar_url?: string;
  city?: string;
  phone?: string;
};

interface AuthProviderProps {
  children: ReactNode;
}

interface IAuthContextData {
  session: AuthSession | null;
  user: UserProfile | null;
  signIn: (email: string, password: string) => Promise<void>;
  signUp: (name: string, email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
  googleSignIn: () => Promise<void>;
  updateUserName: (name: string) => Promise<void>;
  updateUserPhone: (phone: string) => Promise<void>;
  isLoading: boolean;
  error: string | null;
}
const AuthContext = createContext<IAuthContextData>({} as IAuthContextData);

function AuthProvider({ children }: AuthProviderProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [user, setUser] = useState<UserProfile | null>(null);

  const [session, setSession] = useState<AuthSession | null>(null);

  async function signOut() {
    try {
      setIsLoading(true);
      await GoogleSignin.signOut();
      await supabase.auth.signOut();
      setSession(null);
      setUser(null);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }

  async function googleSignIn() {
    setIsLoading(true);
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();

      if (isSuccessResponse(userInfo)) {
        const { data, error } = await supabase.auth.signInWithIdToken({
          provider: "google",
          token: userInfo.data.idToken ?? "",
        });

        if (error) {
          throw error;
        }

        const response = await api
          .get(`/users/email/${userInfo.data.user.email}`)
          .catch(async (error) => {
            if (error.response.status === 404) {
              console.log("User not found, creating...");
              const userResponse = await api.post(`/users`, {
                name: userInfo.data.user.name,
                email: userInfo.data.user.email,
                image: data.user.user_metadata.avatar_url,
                accountProvider: "GOOGLE",
                accountId: data.user.user_metadata.sub,
                phoneConfirmed: false,
                emailConfirmed: true,
              });
              setUser({
                id: userResponse.data.user.id,
                email: userResponse.data.user.email,
                name: userResponse.data.user.name,
                avatar_url: userResponse.data.user.image,
              });
            }
            setIsLoading(false);
            throw error;
          }); //catch

        console.log("User found, updating...");
        setUser({
          id: response.data.user.id,
          email: response.data.user.email,
          name: response.data.user.name,
          avatar_url: response.data.user.image,
        });

        supabase.auth.getSession().then(({ data: { session } }) => {
          setSession(session);
        });
      } else {
        throw new Error("no ID token present!");
      }
      //TODO: Tapa nos erros
    } catch (error: any) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (e.g. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
      } else {
        // some other error happened
      }
    }
    setIsLoading(false);
  }

  async function signIn(email: string, password: string) {
    setIsLoading(true);
    const { data, error } = await supabase.auth.signInWithPassword({
      email: email.trim().toLowerCase(),
      password,
    });

    if (error) {
      if (error.status === 400 && error.code === "invalid_credentials")
        throw new InvalidCredentialsError();

      throw error;
    }

    if (data) {
      console.log("User has logged in...");
      const response = await api
        .get(`/users/email/${email.trim().toLowerCase()}`)
        .catch(async (error) => {
          if (error.response.status === 404) {
            console.log("Logged user not found? Creating...");
            const userResponse = await api.post(`/users`, {
              name: "",
              email: data.user.email,
              image: data.user.user_metadata.avatar_url,
              accountProvider: "EMAIL",
              accountId: data.user.user_metadata.sub,
              phoneConfirmed: false,
              emailConfirmed: true,
            });
            setUser({
              id: userResponse.data.user.id,
              email: userResponse.data.user.email,
              name: userResponse.data.user.name,
              avatar_url: userResponse.data.user.image,
            });
          }
          supabase.auth.getSession().then(({ data: { session } }) => {
            setSession(session);
          });
          setIsLoading(false);
          throw error;
        });

      setUser({
        id: response.data.user.id,
        email: response.data.user.email,
        name: response.data.user.name,
        avatar_url: response.data.user.image,
      });

      supabase.auth.getSession().then(({ data: { session } }) => {
        setSession(session);
      });
      setIsLoading(false);
    }
  }

  async function signUp(name: string, email: string, password: string) {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });
    if (error) {
      if (error.status === 422 && error.code === "user_already_exists")
        throw new EmailInUseError();

      throw error;
    }
    if (data && data.user) {
      console.log("User creating...");
      const userResponse = await api
        .post(`/users`, {
          name: name.trim(),
          email: email.toLowerCase().trim(),
          image: undefined,
          accountProvider: "EMAIL",
        })
        .catch((error) => {
          console.log(error);
          throw error;
        });

      setUser({
        id: userResponse.data.user.id,
        email: userResponse.data.user.email,
        name: userResponse.data.user.name,
        avatar_url: userResponse.data.user.image,
      });
      supabase.auth.getSession().then(({ data: { session } }) => {
        setSession(session);
        setIsLoading(false);
      });
    }
  }

  async function updateUserName(name: string) {
    const response = await api
      .put(`/users/${user?.id}`, {
        name: name.trim(),
      })
      .catch((error) => {
        console.log({ error, message: "error updating user name" });
        throw error;
      });

    if (response.status !== 200) throw new Error("Error updating user name");

    setUser({
      ...user,
      name: response.data.user.name,
    });
  }

  async function updateUserPhone(phone: string) {
    const response = await api
      .put(`/users/${user?.id}`, {
        phone: phone.trim(),
        phoneConfirmed: true,
      })
      .catch((error) => {
        console.log({ error, message: "error updating user phone" });
        throw error;
      });

    if (response.status !== 200) throw new Error("Error updating user phone");

    setUser({
      ...user,
      phone: response.data.user.phone,
    });
  }

  useEffect(() => {
    setIsLoading(true);
    console.log("useEffect auth hook");

    supabase.auth.getSession().then(async ({ data: { session } }) => {
      if (session?.user) {
        const response = await api
          .get(`/users/email/${session.user.email}`)
          .catch(async (error) => {
            console.log({
              message: "session with invalid user",
              error,
            });

            await supabase.auth.signOut();
            setSession(null);
            setUser(null);

            throw error;
          });

        if (response?.data.user) {
          setUser({
            id: response.data.user.id,
            email: response.data.user.email,
            name: response.data.user.name,
            avatar_url: response.data.user.image,
          });
        }
      }
      setIsLoading(false);
    });

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);

  return (
    <AuthContext.Provider
      value={{
        session,
        user,
        signIn,
        signUp,
        signOut,
        isLoading,
        error,
        googleSignIn,
        updateUserName,
        updateUserPhone,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  return useContext(AuthContext);
}

export { AuthProvider, useAuth };
