import React from "react";
import { BsFacebook, BsInstagram, BsYoutube } from "react-icons/bs";
import "./footer.css";

const Footer = () => {
  let getYear = () => {
    let currentYear = new Date().getFullYear();
    return currentYear;
  };

  return (
    <footer>
      <a href="#home" className="footer__logo">
        Rafapeeps
      </a>
      <ul className="permalinks">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Skills</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#testimonials">Testimonials</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="footer__socials">
        <a
          href="https://www.facebook.com/rafael.fernandez.79274089"
          target="_blank"
          rel="noreferrer"
        >
          <BsFacebook />
        </a>
        <a
          href="https://www.instagram.com/rafapeeps/?hl=en"
          target="_blank"
          rel="noreferrer"
        >
          <BsInstagram />
        </a>
        <a
          href="https://www.youtube.com/channel/UC4tHeLSdZ-mybq1ht6hE-dQ"
          target="_blank"
          rel="noreferrer"
        >
          <BsYoutube />
        </a>
      </div>
      <div className="footer__copyright">
        <small>&copy; ET {getYear()}. All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
