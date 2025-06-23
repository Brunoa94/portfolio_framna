import React from "react";
import * as S from "./page.styles";
import { Paragraph, SectionTitle, Title } from "@/components/globals/fonts";
import { SkillI, skills } from "@/data/skills";
import Skill from "@/components/aboutMe/skill/skill";
import Rocklee from "@/components/aboutMe/rocklee/rocklee";

export default function AboutMe() {
  return (
    <S.Container>
      <Title>About Me: Bruno Afonso</Title>
      <S.Introduction>
        <S.TextContainer>
          <Paragraph $noLineClamp={true}>
            Since childhood, I have always been passionate about numbers and
            solving math problems. Without being aware of what programming was,
            in 2012 I started studying Computer Engineering and finished my
            Master’s Degree in 2019, immediately getting my first job as a
            Trainee Backend Engineer.
          </Paragraph>
          <Paragraph $noLineClamp={true}>
            This first job taught me patterns and practices that I still apply
            on a daily basis. Code quality is always the top priority, staying
            updated with the latest technologies in a market that is constantly
            growing is important, and being passionate about what we do is a
            huge plus.
          </Paragraph>
          <Paragraph $noLineClamp={true}>
            A few years later, I began learning Frontend development on my own
            through online courses, and just 6 months after, I got a job at one
            of the biggest alternative app stores companies, Aptoide. What a
            challenge it was in the beginning. Knowing that my daily work was
            impacting millions of people was challenging and definitely pushed
            my limits. Focusing on performance details significantly improved my
            skills as a Frontend developer, and now I feel that I can say I’m
            ready for anything.
          </Paragraph>
          <Paragraph $noLineClamp={true}>
            A few years later, I began learning Frontend development on my own
            through online courses, and just 6 months after, I got a job at one
            of the biggest alternative app stores companies, Aptoide. What a
            challenge it was in the beginning. Knowing that my daily work was
            impacting millions of people was challenging and definitely pushed
            my limits. Focusing on performance details significantly improved my
            skills as a Frontend developer, and now I feel that I can say I’m
            ready for anything.
          </Paragraph>
          <Paragraph $noLineClamp={true}>
            Keeping two hard journeys in parallel was a challenge, but looking
            back, I don’t regret anything. My discipline, commitment, and hard
            work are intrinsic soft skills, and I can’t be more thankful for the
            decisions that young Bruno made. What a journey it’s been!
          </Paragraph>
        </S.TextContainer>
        <Rocklee />
      </S.Introduction>
      <S.SkillsSection>
        <SectionTitle>Technical Skills</SectionTitle>
        <S.SkillsContainer>
          {skills.map((skill: SkillI, index: number) => (
            <Skill key={`skill-${index}`} name={skill.name} icon={skill.icon} />
          ))}
        </S.SkillsContainer>
      </S.SkillsSection>
    </S.Container>
  );
}
