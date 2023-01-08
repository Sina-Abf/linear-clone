import Image from "next/image";
import Button, { IconWrapper } from "../components/button";
import Container from "../components/container";
import { Hero, HeroSubtitle, HeroTitle } from "../components/hero";
import ChevronIcon from "../components/icons/chevron";

export default function Home() {
  return (
    <Container className="pt-[6.4rem]">
      <Hero>
        <Button href="/" variant="secondary" size="small">
          Linear 2022 Release – Built for scale <IconWrapper>→</IconWrapper>
        </Button>
        <HeroTitle>
          Linear is a better way <br className="hidden md:block" /> to build
          products
        </HeroTitle>
        <HeroSubtitle>
          Meet the new standard for modern software development.
          <br className="hidden md:block" /> Streamline issues, sprints, and
          product roadmaps.
        </HeroSubtitle>
        <Button href="/" variant="primary" size="large">
          Get Started
          <IconWrapper>
            <ChevronIcon />
          </IconWrapper>
        </Button>
        <Image
          className="mt-[12.8rem]"
          width="924"
          height="924"
          src="/img/hero.webp"
          alt="Hero image"
        />
      </Hero>
    </Container>
  );
}
