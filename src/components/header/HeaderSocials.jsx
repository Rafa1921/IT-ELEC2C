import React from "react";
import { BsFacebook, BsInstagram, BsYoutube } from "react-icons/bs";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
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
  );
};

export default HeaderSocials;
