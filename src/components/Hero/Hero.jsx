import React from "react";
import { fadeIn, slideIn, staggerContainer } from "../../utils/motion";
import css from "./Hero.module.scss";
import { motion } from "framer-motion";
import Button from "react-bootstrap/Button";
const Hero = () => {
  const resumeFileName = "resume.pdf";
  return (
    <section className={`paddings ${css.wrapper}`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`innerWidth ${css.container}`}
      >
        <div className={css.upperElements}>
          <motion.span
            className="primaryText"
            variants={fadeIn("right", "tween", 0.2, 1)}
          >
            Hey There,
            <br />
            I'm Rakesh Ahir.
          </motion.span>
          <motion.span
            className="secondaryText"
            variants={fadeIn("left", "tween", 0.4, 1)}
          >
            I design beautiful simple
            <br />
            things, And I love what i do{" "}
          </motion.span>
        </div>

        <motion.div
          variants={fadeIn("up", "tween", 0.3, 1)}
          className={css.person}
        >
          <motion.img
            variants={slideIn("up", "tween", 0.5, 1.3)}
            src="./showCase1..png"
            alt=""
          />
        </motion.div>

        {/* <a className={css.email} href="mailto:rakeshbhaikatariya@gmail.com">
          rakeshbhaikatariya@gmail.com
        </a> */}
        <section className={`paddings ${css.wrapper}`}>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
            className={`innerWidth ${css.container}`}
          >
            {/* ... your existing code ... */}

            {/* Add the download link for the resume */}
            {/* <a
          className={css.resumeLink}
          // href={`/${resumeFileName}`} // Assuming the resume is in the public folder
          href="./Rakeshahir_Resume.pdf"
          download={resumeFileName}
        >
          Download Resume
        </a> */}
            <div className="mb-2">
              <Button
                variant="primary"
                size="lg"
                active
                className={css.resumeLink}
                href="./Rakeshahir_Resume.pdf"
                download={resumeFileName}
              >
                Download Resume
              </Button>{" "}
            </div>
          </motion.div>
        </section>

        <div className={css.lowerElements}>
          <motion.div
            variants={fadeIn("right", "tween", 0.3, 1)}
            className={css.experience}
          >
            <div className="primaryText">1</div>
            <div className="secondaryText">
              <div>Years</div>
              <div>Experience</div>
            </div>
          </motion.div>

          <motion.div
            variants={fadeIn("left", "tween", 0.5, 1)}
            className={css.certificate}
          >
            <img src="./certificate.jpg" alt="" />
            <span>CERTIFIED PROFATIONAL</span>
            <span>WEB DEVLOPER</span>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
