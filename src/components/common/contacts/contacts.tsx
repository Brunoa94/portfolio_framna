import { SocialMediaI } from "@/types/socialMedia";
import { Mail } from "lucide-react";
import React from "react";
import * as S from "./contacts.styles";
import Link from "next/link";
import Image from "next/image";

const mediaOptions: SocialMediaI[] = [
  {
    icon: (
      <Image
        width={40}
        height={40}
        alt="LinkedIn logo"
        src="/social/instagram.svg"
      />
    ),
    link: "https://www.instagram.com/brunoa94/",
  },
  {
    icon: (
      <Image
        width={40}
        height={40}
        alt="LinkedIn logo"
        src="/social/linkedin.svg"
      />
    ),
    link: "https://www.linkedin.com/in/brunoafonso94/",
  },
  {
    icon: (
      <Image
        width={40}
        height={40}
        alt="LinkedIn logo"
        src="/social/github.svg"
      />
    ),
    link: "https://github.com/Brunoa94",
  },
];

const Contacts = () => {
  return (
    <S.Container>
      <Link href="mailto:bruno.afonso94@hotmail.com">
        <Mail size={40} color="black" />
      </Link>
      {mediaOptions.map((media: SocialMediaI, index: number) => (
        <Link href={media.link} key={`media-option-${index}`}>
          {media.icon}
        </Link>
      ))}
    </S.Container>
  );
};

export default Contacts;
