import React from "react";
import {
  AboutSection,
  ArticlesSection,
  ContactSection,
  HeroSection,
  InterestsSection,
  Page,
  ProjectsSection,
  Seo,
  Section,
  Animation
} from "gatsby-theme-portfolio-minimal";

export default function IndexPage() {
  return (
    <>
      <Seo title="Nayana Dasgupta" />
      <Page useSplashScreenAnimation={false}>
        <HeroSection sectionId="hero" />
        {/* <ArticlesSection sectionId="articles" heading="Latest Articles" sources={['Medium']} /> */}
        <AboutSection sectionId="about" heading="About Me" />
        <InterestsSection sectionId="details" heading="Details" />
        <ProjectsSection sectionId="projects" heading="Projects" />
        {/* <ContactSection sectionId="github" heading="Contact Me" /> */}
        <Section heading="This is a brand new section.">
              <p>You can add your custom JSX here.</p>
        </Section>
      </Page>
    </>
  );
}
