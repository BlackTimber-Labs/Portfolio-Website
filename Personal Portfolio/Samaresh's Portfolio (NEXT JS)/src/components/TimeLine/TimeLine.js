import React, { useState, useRef, useEffect } from "react";
import Button from "../../styles/GlobalComponents/Button";

import {
  CarouselButton,
  CarouselButtonDot,
  CarouselButtons,
  CarouselContainer,
  CarouselItem,
  CarouselItemImg,
  CarouselItemText,
  CarouselItemTitle,
  CarouselMobileScrollNode,
} from "./TimeLineStyles";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
// import { TimeLineData } from "../../constants/constants";

// const TOTAL_CAROUSEL_COUNT = TimeLineData.length;

const Timeline = () => {
  // const [activeItem, setActiveItem] = useState(0);
  // const carouselRef = useRef();

  // const scroll = (node, left) => {
  //   return node.scrollTo({ left, behavior: 'smooth' });
  // }

  // const handleClick = (e, i) => {
  //   e.preventDefault();

  //   if (carouselRef.current) {
  //     const scrollLeft = Math.floor(carouselRef.current.scrollWidth * 0.7 * (i / TimeLineData.length));

  //     scroll(carouselRef.current, scrollLeft);
  //   }
  // }

  // const handleScroll = () => {
  //   if (carouselRef.current) {
  //     const index = Math.round((carouselRef.current.scrollLeft / (carouselRef.current.scrollWidth * 0.7)) * TimeLineData.length);

  //     setActiveItem(index);
  //   }
  // }

  // // snap back to beginning of scroll when window is resized
  // // avoids a bug where content is covered up if coming from smaller screen
  // useEffect(() => {
  //   const handleResize = () => {
  //     scroll(carouselRef.current, 0);
  //   }

  //   window.addEventListener('resize', handleResize);
  // }, []);

  return (
    <Section id="about">
      <SectionTitle>About Myself</SectionTitle>
      <SectionText>
        I am a full-stack developer experienced working in both front-end and
        back-end as well as DevOps and DS ALGO. MERN stack is my main.
        Passionate in web development. Like to build projects{" "}
        {"{I am a project nerd :) }"}
      </SectionText>
      <Button
        onClick={() =>
          window.open(
            "https://drive.google.com/file/d/1rMMXdU33BOOnfbvqqYzDA3T--cKbuKMi/view?usp=sharing",
            "_blank"
          )
        }
      >
        Get My Resume
      </Button>
    </Section>
  );
};

export default Timeline;
