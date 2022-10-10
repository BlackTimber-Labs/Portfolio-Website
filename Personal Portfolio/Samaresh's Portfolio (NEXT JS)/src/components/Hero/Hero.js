import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome To <br /> My personal Portfolio
      </SectionTitle>
      <SectionText>
        <img
          src="/images/profile.jpg"
          alt=""
          width="300px"
          style={{ borderRadius: "14px" }}
        />{" "}
        <br />
        Hi there, Samaresh here, welcome to my portfolio. Glad you landed here.
        I aim to innovate web and software for the world. Below you can see some
        of my projects and more about me. Thanks.
      </SectionText>
      <Button
        onClick={() =>
          (window.location = "http://linkedin.com/in/samaresh-das-ab9621212")
        }
      >
        Learn More
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
