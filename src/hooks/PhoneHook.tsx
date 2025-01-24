import { supabase } from "@services/supabase";
import { PhoneServiceError } from "@utils/errors/PhoneServiceError";
import { createContext, ReactNode, useContext } from "react";

interface IPhoneContextData {
  verifyPhoneNumber: (phoneNumber: string) => Promise<void>;
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

  return (
    <PhoneContext.Provider
      value={{
        verifyPhoneNumber,
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
