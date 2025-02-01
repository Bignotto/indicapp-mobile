import { supabase } from "@services/supabase";
import { decode } from "base64-arraybuffer";
import * as FileSystem from "expo-file-system";
import React, { createContext, ReactNode, useContext } from "react";

interface UploadContextData {
  uploadAvatarImage: (
    files: IUploadFile | IUploadFile[]
  ) => Promise<string[] | undefined>;
}

interface UploadProviderProps {
  children: ReactNode;
}

type IUploadFile = {
  name: string;
  path: string;
};

const UploadContext = createContext<UploadContextData>({} as UploadContextData);

function UploadProvider({ children }: UploadProviderProps) {
  async function uploadAvatarImage(
    files: IUploadFile | IUploadFile[]
  ): Promise<string[] | undefined> {
    const filesArray = Array.isArray(files) ? [...files] : [files];
    const returnArray = [];

    for (const file of filesArray) {
      const base64 = await FileSystem.readAsStringAsync(file.path, {
        encoding: "base64",
      });

      const { data, error } = await supabase.storage
        .from("avatars")
        .upload(`${file.name}.jpeg`, decode(base64), {
          contentType: "image/jpeg",
          upsert: true,
        });

      if (error) {
        console.log(JSON.stringify(error, null, 2));
        throw new Error("ERROR while uploading image.");
      }

      returnArray.push(data.path);
    }

    return returnArray.length > 0 ? returnArray : undefined;
  }

  return (
    <UploadContext.Provider value={{ uploadAvatarImage }}>
      {children}
    </UploadContext.Provider>
  );
}

function useUpload(): UploadContextData {
  const context = useContext(UploadContext);

  if (!context) {
    throw new Error("useUpload must be used within an UploadProvider");
  }

  return context;
}

export { UploadProvider, useUpload };
