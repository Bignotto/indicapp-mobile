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

interface AuthProviderProps {
  children: ReactNode;
}

interface IAuthContextData {
  session: AuthSession | null;
  signIn: (email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
  googleSignIn: () => Promise<void>;
  isLoading: boolean;
  error: string | null;
}

const AuthContext = createContext<IAuthContextData>({} as IAuthContextData);

function AuthProvider({ children }: AuthProviderProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [session, setSession] = useState<AuthSession | null>(null);

  async function signOut() {
    try {
      setIsLoading(true);
      await GoogleSignin.signOut();
      await supabase.auth.signOut();
      setSession(null);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }

  async function googleSignIn() {
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
          .get(`/users/${data.user.id}`)
          .catch((error) => {
            console.log(error.response.data);
            console.log(error.response.status);
          });

        console.log({ response });

        supabase.auth.getSession().then(({ data: { session } }) => {
          setSession(session);
        });
      } else {
        throw new Error("no ID token present!");
      }
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
    console.log("google");
  }

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);

  return (
    <AuthContext.Provider
      value={{
        session,
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
