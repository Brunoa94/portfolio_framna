import React from "react";
import * as S from "./navbar.styles";
import Link from "next/link";

interface NavbarOption {
  name: string;
  id: string;
}

interface Props {
  isMobile?: boolean;
  isLogged?: boolean;
}

const Navbar = ({ isMobile, isLogged }: Props) => {
  let options: NavbarOption[] = [
    {
      name: "About Me",
      id: "/about-me",
    },
    {
      name: "Projects",
      id: "/projects",
    },
  ];

  if (isMobile && isLogged) {
    options = [...options, { name: "Admin Dashboard", id: "/admin-dashboard" }];
  }

  return (
    <S.Navbar>
      {options.map((option: NavbarOption) => (
        <Link href={option.id} key={`option-${option.id}`}>
          {option.name}
        </Link>
      ))}
    </S.Navbar>
  );
};

export default Navbar;
