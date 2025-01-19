import React from "react";
import { AvatarImage } from "./styles";

type AvatarImageProps = {
  imagePath?: string;
  size: number;
};

export default function AppAvatar({
  imagePath = "https://iwfgwdpywrhvaxxwrdyp.supabase.co/storage/v1/object/public/profiles/fallback-profile-image_1.jpg",
  size,
}: AvatarImageProps) {
  console.log({ pathLength: imagePath.length, imagePath });
  return (
    <AvatarImage
      source={{
        uri: imagePath,
      }}
      style={{
        width: size,
        height: size,
        borderRadius: size / 2,
      }}
    />
  );
}
