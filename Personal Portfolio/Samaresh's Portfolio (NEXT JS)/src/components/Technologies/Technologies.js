import React from "react";
import { FaAws, FaReact, FaNodeJs } from "react-icons/fa";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from "./TechnologiesStyles";

const Technologies = () => (
  <Section id="tech">
    <SectionDivider />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      My main Tech-Stack is the MERN stack with DevOps and DS ALGO. Have
      knowledge of some other languages and technologies too like C, C++, Python
      and Flask.
    </SectionText>
    <List>
      <ListItem>
        <FaReact size="3rem" />
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experienced with <br /> React Js.
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <FaNodeJs size="3rem" />
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experienced with <br /> Node Js, Express, MongoDB and Flask.
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <FaAws size="3rem" />
        <ListContainer>
          <ListTitle>DevOPS</ListTitle>
          <ListParagraph>
            Experienced with <br /> AWS
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
