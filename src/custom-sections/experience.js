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

export default function ExperienceSection({heading, sectionId}) {
    return (
        <Animation type="fadeIn">
            <Section heading={heading} anchor={sectionId}>
                <Container>
                    <Heading>Software Engineer @ Twilio</Heading> 
                    <Date>August 2022 - Now</Date>
                </Container>
                <p></p>
                <Container>
                    <Heading>Software Engineer Intern @ Twilio</Heading> 
                    <Date>June - August 2021</Date>
                </Container>
                <p></p>
                <Container>
                    <Heading>Software Engineer Intern @ Publicis Sapient</Heading> 
                    <Date>June - August 2020</Date>
                </Container>
                <p></p>
            </Section>
        </Animation>
    );
}
