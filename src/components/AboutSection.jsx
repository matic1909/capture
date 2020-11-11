import React from "react";
import home1 from "../img/home1.png";
import { Section, Description, Hide, Image } from "../styles/styles";
import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <Section>
      <Description>
        <motion.div className="title">
          <Hide>
            <motion.h2>We work to make</motion.h2>
          </Hide>
          <Hide>
            <motion.h2>
              your <span>dreams</span> come
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2>true.</motion.h2>
          </Hide>
        </motion.div>
        <p>
          Contact us for any photography or videography ideas that you have. We
          have professionals with amazing skills.
        </p>
        <button>Contact Us</button>
      </Description>
      <Image>
        <img src={home1} alt="man with a camera" />
      </Image>
    </Section>
  );
};

export default AboutSection;
