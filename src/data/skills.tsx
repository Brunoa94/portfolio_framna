import Image from "next/image";

export interface SkillI {
  icon: React.ReactElement;
  name: string;
}

export const skills: SkillI[] = [
  {
    icon: (
      <Image
        width={50}
        height={50}
        src={"/technologies/nextjs.svg"}
        alt="NextJS icon"
      />
    ),
    name: "NextJS",
  },
  {
    icon: (
      <Image
        width={50}
        height={50}
        src={"/technologies/html5.svg"}
        alt="HTML5 icon"
      />
    ),
    name: "HTML5",
  },
  {
    icon: (
      <Image
        width={50}
        height={50}
        src={"/technologies/css.svg"}
        alt="CSS icon"
      />
    ),
    name: "CSS",
  },
  {
    icon: (
      <Image
        width={50}
        height={50}
        src={"/technologies/styledcomponents.svg"}
        alt="Styled Components icon"
      />
    ),
    name: "Styled Components",
  },
  {
    icon: (
      <Image
        width={50}
        height={50}
        src={"/technologies/tailwindcss.svg"}
        alt="TailwindCSS icon"
      />
    ),
    name: "TailwindCSS",
  },
  {
    icon: (
      <Image
        width={50}
        height={50}
        src={"/technologies/typescript.svg"}
        alt="Typescript icon"
      />
    ),
    name: "Typescript",
  },
  {
    icon: (
      <Image
        width={50}
        height={50}
        src={"/technologies/graphql.svg"}
        alt="Typescript icon"
      />
    ),
    name: "GraphQL",
  },
  {
    icon: (
      <Image
        width={50}
        height={50}
        src={"/technologies/rubyonrails.svg"}
        alt="Typescript icon"
      />
    ),
    name: "Ruby on Rails",
  },
  {
    icon: (
      <Image
        width={50}
        height={50}
        src={"/technologies/python.svg"}
        alt="Typescript icon"
      />
    ),
    name: "Python",
  },
  {
    icon: (
      <Image
        width={50}
        height={50}
        src={"/technologies/jest.svg"}
        alt="Typescript icon"
      />
    ),
    name: "Jest",
  },
  {
    icon: (
      <Image
        width={50}
        height={50}
        src={"/technologies/vitest.svg"}
        alt="Typescript icon"
      />
    ),
    name: "Vitest",
  },
  {
    icon: (
      <Image
        width={50}
        height={50}
        src={"/technologies/git.svg"}
        alt="Typescript icon"
      />
    ),
    name: "Git",
  },
];
