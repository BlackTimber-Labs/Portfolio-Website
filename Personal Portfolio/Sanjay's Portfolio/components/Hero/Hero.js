import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hi, I'm Sanjay <br />
        Here's, My Personal Porfolio
      </SectionTitle>
      <SectionText>
        I'm a Frontend developer + UI/UX Designer. And I'm not an Average
        Developer or Designer.
      </SectionText>
      <Button
        onClick={() =>
          (window.location = `https://www.notion.so/Nothing-in-the-MIND-a3f966886680425ab5cd53573ab2f295`)
        }
      >
        Learn More
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
