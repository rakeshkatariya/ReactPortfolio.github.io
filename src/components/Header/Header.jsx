import React, { useEffect, useRef, useState } from "react";
import css from "./Header.module.scss";
import { BiPhoneCall, BiMenuAltRight } from "react-icons/bi";
import { motion } from "framer-motion";
import { getMenuStyles, headerVariants } from "../../utils/motion";
import useOutsideAlerter from "../../hooks/useOutsideAlerter";
import useHeaderShadow from "../../hooks/useHeaderShadow";
import EmailIcon from "@mui/icons-material/Email";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Link } from "react-router-dom";
import CallIcon from "@mui/icons-material/Call";

const Header = () => {
  const instagramUsername = "aapa.005"; // Replace with your Instagram username
  const message = "Hello, I want to connect with you!";
  const menuRef = useRef(null);
  const [menuOpened, setMenuOpened] = useState(false);
  const headerShadow = useHeaderShadow();

  //to handle click outside of sidebar on mobile
  useOutsideAlerter({
    menuRef,
    setMenuOpened,
  });

  return (
    <motion.div
      variants={headerVariants}
      initial="hidden"
      whileInView="show"
      className={`bg-primary paddings ${css.wrapper}`}
      viewport={{ once: true, amount: 0.25 }}
      style={{ boxShadow: headerShadow }}
    >
      <div className={`innerWidth ${css.container} flexCenter`}>
        <div className={css.name}>Rakesh Ahir</div>
        <ul
          className={`flexCenter ${css.menu}`}
          ref={menuRef}
          style={getMenuStyles(menuOpened)}
        >
          <li>
            <a href="#experties">Services</a>
          </li>
          <li>
            <a href="#work">Experience</a>
          </li>
          <li>
            <a href="#portfolio">Portfolio</a>
          </li>
          <li>
            <a href="#people">Testimonials</a>
          </li>
          <a
            href={`https://www.instagram.com/${instagramUsername}/`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <InstagramIcon />
          </a>

          <a
            href={`https://api.whatsapp.com/send?phone=${919104899221}&text=${encodeURIComponent(
              message
            )}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <WhatsAppIcon />
          </a>

          <a href="mailto:rakeshbhaikatariya@gmail.com">
            <EmailIcon />
          </a>

          <a href={`tel:${919104899221}`}>
            <CallIcon />
          </a>
          
        </ul>

        {/* for medium and small screens */}
        <div
          className={css.menuIcon}
          onClick={() => setMenuOpened((prev) => !prev)}
        >
          <BiMenuAltRight size={30} />
        </div>
      </div>
    </motion.div>
  );
};

export default Header;
