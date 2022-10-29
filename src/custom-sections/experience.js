import { Section, Animation } from 'gatsby-theme-portfolio-minimal';
import React from "react";
import styled from "styled-components"

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-right: 10px;
`

const Heading = styled.h3`
`

const Date = styled.h3`
    color: #4D4E49;
    font-size: 1em;   
`

const Link = styled.a`
    color: #566763;
`

export default function ExperienceSection({heading, sectionId}) {
    return (
        <Animation type="fadeIn">
            <Section heading={heading} anchor={sectionId}>
                <Container>
                    <Heading>Software Engineer @ <a href="https://www.twilio.com"><u>Twilio</u></a></Heading> 
                    <Date>August 2022 - Now</Date>
                </Container>
                <p></p>
                <Container>
                    <Heading>Software Engineer Intern @ <a href="https://www.twilio.com"><u>Twilio</u></a></Heading> 
                    <Date>June - August 2021</Date>
                </Container>
                <p>
                    Built accessibility into Twilio Flex, after proposing a body of work to ensure a great experience for screen reader and keyboard-only users by following best practices. This involved adding new functionality and refactoring the entire codebase to ensure that Flex became fully keyboard-navigable, worked well with a screen reader and handled errors and notifications in an accessible way.
                    I also refactored the Flex Diagnostics Plugin and updated its UI to meet Twilio Paste standards. This work involved close collaboration with UX design and product teams and led to the creation of accessibility guidelines for Flex. The tech stack used included  React, Redux, TypeScript, Jest, Cypress.
                </p>
                <Container>
                    <Heading>Software Engineer Intern @ <a href="https://www.publicissapient.com/"><u>Publicis Sapient</u></a></Heading> 
                    <Date>June - August 2020</Date>
                </Container>
                <p>Developed a progressive web app that directs customers along the most efficient route through a Tesco store, based on the contents of their shopping list. The tech stack used included MongoDB, Node.js, Express and React and the project was deployed using Jenkins and Kubernetes.</p>
            </Section>
        </Animation>
    );
}
