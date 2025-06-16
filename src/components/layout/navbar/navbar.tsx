import React from "react";
import * as S from "./navbar.styles";
import Link from "next/link";

interface NavbarOption {
  name: string;
  id: string;
}

const Navbar = () => {
  const options: NavbarOption[] = [
    {
      name: "About Me",
      id: "/about-me",
    },
    {
      name: "Projects",
      id: "/projects",
    },
  ];
  return (
    <S.Navbar>
      <S.List>
        {options.map((option: NavbarOption) => (
          <S.Option>
            <Link href={option.id}>{option.name}</Link>
          </S.Option>
        ))}
      </S.List>
    </S.Navbar>
  );
};

export default Navbar;
