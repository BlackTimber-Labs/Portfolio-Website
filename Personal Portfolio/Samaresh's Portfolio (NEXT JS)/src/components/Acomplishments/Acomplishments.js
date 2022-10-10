import React from "react";
import { FaAws, FaReact, FaNodeJs, FaUniversity } from "react-icons/fa";

import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  Box,
  Boxes,
  BoxNum,
  BoxText,
  InternshipHead,
} from "./AcomplishmentsStyles";

const data = [
  { header: "BWS Internship", text: "Intersnhip at BWS" },
  { header: 5000, text: "Github Stars" },
  { header: <FaUniversity size="50px" />, text: "Harvard CS50" },
  { header: <FaAws size="50px" />, text: "AWS" },
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>Personal Achievments</SectionTitle>
    <Boxes>
      <a
        href="https://drive.google.com/file/d/1QcyY7bMZKV-eDvKQpxhlUc47h3b8OKS_/view?usp=sharing"
        target="_blank"
      >
        <Box>
          <BoxNum size="20px">
            <InternshipHead>BWS</InternshipHead>
          </BoxNum>
          <BoxText>Internship at Business Web Solutions</BoxText>
        </Box>
      </a>
      <a
        href="https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/J.P.%20Morgan/R5iK7HMxJGBgaSbvk_J.P.%20Morgan_t6Z3uejgfM748Sdbb_1659162093681_completion_certificate.pdf"
        target="_blank"
      >
        <Box>
          <BoxNum size="20px">
            <InternshipHead>JP Morgan</InternshipHead>
          </BoxNum>
          <BoxText>Internship at JP MORGAN Chase</BoxText>
        </Box>
      </a>
      <a
        href="https://certificates.cs50.io/e577a7ff-ba57-4791-b1cd-959fdc228aee"
        target="_blank"
      >
        <Box>
          <BoxNum size="20px">
            <InternshipHead>Harvard CS50</InternshipHead>
          </BoxNum>
          <BoxText>Computer Science from Harvard</BoxText>
        </Box>
      </a>
      <a
        href="https://coursera.org/share/7fade6cc4e301ae5be7dd793e771ea49"
        target="_blank"
      >
        <Box>
          <BoxNum size="20px">
            <InternshipHead>DevOps on AWS</InternshipHead>
          </BoxNum>
        </Box>
      </a>
    </Boxes>
  </Section>
);

export default Acomplishments;
