import React from "react";
import showDate from "../js/copyRightDate";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <>
      <hr className="bg-[color:var(--primary)] h-2" />
      <div className="flex flex-col items-center py-10 bg-[color:var(--black)] text-white work-sans">
        <ul className="targetHref">
          <Link to="/">
            <h1>Home</h1>
          </Link>
          <Link to="/About">
            <h1>About</h1>
          </Link>
          <Link to="/Blog">
            <h1>Blog</h1>
          </Link>
          <Link to="/Contact">
            <h1>Contact</h1>
          </Link>
          <Link to="GitaRemedies">
            <h1>Gita Remedies</h1>
          </Link>
          <Link to="/Shop">
            <h1>Shop</h1>
          </Link>
          <Link to="VedicScriptures">
            <h1>Vedic Granth PDFs</h1>
          </Link>
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
