import AboutHeader from "@/components/homepage/homepageHeader/homepageHeader";
import * as S from "./page.styles";
import Section from "@/components/homepage/sections/section";

export default function Home() {
  return (
    <S.Container>
      <AboutHeader />
      <S.Sections>
        <Section link="/projects" name="Projects" />
        <Section link="/about-me" name="About Me" />
      </S.Sections>
    </S.Container>
  );
}
