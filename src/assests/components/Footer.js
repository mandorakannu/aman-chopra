import React from "react";
import showDate from "../js/copyRightDate";

function Footer() {
  return (
    <>
      <hr className="bg-[color:var(--primary)] h-2"/>
      <div className="flex flex-col items-center py-10 bg-[color:var(--black)] text-white work-sans">
        <ul className="targetHref">
          <a href="/">
            <h1>Home</h1>
          </a>
          <a href="/About">
            <h1>About</h1>
          </a>
          <a href="/Blog">
            <h1>Blog</h1>
          </a>
          <a href="/Contact">
            <h1>Contact</h1>
          </a>
          <a href="GitaRemedies">
            <h1>Gita Remedies</h1>
          </a>
          <a href="/Shop">
            <h1>Shop</h1>
          </a>
          <a href="VedicScriptures">
            <h1>Vedic Granth PDFs</h1>
          </a>
          <span>
            Clement Town, 248002, Dehradun, India | WhatsApp: +91 88149-03534 |
            Email: amanchopramotivation@gmail.com
          </span>
          <span id="copyright">Copyright &#169; {showDate} Aman Chopra</span>
        </ul>
      </div>
    </>
  );
}

export default Footer;
