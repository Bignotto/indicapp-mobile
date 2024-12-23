import {
  GoogleSignin,
  isSuccessResponse,
  statusCodes,
} from "@react-native-google-signin/google-signin";
import api from "@services/api";
import { supabase } from "@services/supabase";
import { AuthSession } from "@supabase/supabase-js";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

export type UserProfile = {
  id: string;
  email: string;
  name: string;
  avatar_url: string;
};

interface AuthProviderProps {
  children: ReactNode;
}

interface IAuthContextData {
  session: AuthSession | null;
  user: UserProfile | null;
  signIn: (email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
  googleSignIn: () => Promise<void>;
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
          // .get(`/users/email/bignotto2@gmail.com`)
          .get(`/users/email/${userInfo.data.user.email}`)
          .catch((error) => {
            console.log(error.response.data);
            console.log(error.response.status);
            setIsLoading(false);
            throw error;
          });

        console.log({ user: response.data.user });

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
    } catch (error: any) {
      //TODO: Tapa nos erros
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
    console.log("google");
  }

  useEffect(() => {
    setIsLoading(true);

    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
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
        signIn: () => Promise.resolve(),
        signOut,
        isLoading,
        error,
        googleSignIn,
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
