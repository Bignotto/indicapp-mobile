import React from "react";
import { AvatarImage } from "./styles";

type AvatarImageProps = {
  imagePath?: string;
  size: number;
};

export default function AppAvatar({ imagePath, size }: AvatarImageProps) {
  const image =
    !imagePath || imagePath === "null"
      ? "https://iwfgwdpywrhvaxxwrdyp.supabase.co/storage/v1/object/public/profiles/fallback-profile-image_1.jpg"
      : imagePath;
  return (
    <AvatarImage
      source={{
        uri: image,
      }}
      style={{
        width: size,
        height: size,
        borderRadius: size / 2,
      }}
    />
  );
}
