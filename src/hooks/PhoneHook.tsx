import { supabase } from "@services/supabase";
import { PhoneServiceError } from "@utils/errors/PhoneServiceError";
import { createContext, ReactNode, useContext } from "react";

interface IPhoneContextData {
  verifyPhoneNumber: (phoneNumber: string) => Promise<void>;
  verifyToken: (phoneNumber: string, token: string) => Promise<void>;
}

interface PhoneProviderProps {
  children: ReactNode;
}

const PhoneContext = createContext<IPhoneContextData>({} as IPhoneContextData);

function PhoneProvider({ children }: PhoneProviderProps) {
  async function verifyPhoneNumber(phoneNumber: string) {
    const { data, error } = await supabase.auth.signInWithOtp({
      phone: `+55${phoneNumber}`,
    });

    if (error) throw new PhoneServiceError();

    return;
  }

  async function verifyToken(phoneNumber: string, token: string) {
    const { data, error } = await supabase.auth.verifyOtp({
      phone: `+55${phoneNumber}`,
      token,
      type: "sms",
    });

    if (error) {
      console.log(JSON.stringify(error, null, 2));
      throw new PhoneServiceError();
    }

    return;
  }

  return (
    <PhoneContext.Provider
      value={{
        verifyPhoneNumber,
        verifyToken,
      }}
    >
      {children}
    </PhoneContext.Provider>
  );
}

function usePhone() {
  return useContext(PhoneContext);
}

export { PhoneProvider, usePhone };
