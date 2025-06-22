import { SocialMediaI } from "@/types/socialMedia";
import { Github, Instagram, Linkedin, Mail } from "lucide-react";
import React from "react";
import * as S from "./contacts.styles";
import Link from "next/link";

const Contacts = () => {
  const mediaOptions: SocialMediaI[] = [
    {
      icon: <Instagram size={40} color="#500075" />,
      link: "https://www.instagram.com/brunoa94/",
    },
    {
      icon: <Linkedin size={40} color="#500075" />,
      link: "https://www.linkedin.com/in/brunoafonso94/",
    },
    {
      icon: <Github size={40} color="#500075" />,
      link: "https://github.com/Brunoa94",
    },
  ];

  return (
    <S.Container>
      <Link href="mailto:bruno.afonso94@hotmail.com">
        <Mail size={40} color="#500075" />
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
