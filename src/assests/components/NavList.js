import React from "react";
import { Link } from "react-router-dom";
function NavList(props) {
  return (
    <>
      <div className="sm-hide flex mx-auto z-50">
        <Link to="/">
          <img
            src="https://ik.imagekit.io/egkxyv8la/Aman-Chopra_Website_/dp_5OjVSjV04.png?ik-sdk-version=javascript-1.4.3&updatedAt=1659765888130"
            alt="logo"
            srcSet=""
            className="flex flex-row w-16 border-4 rounded-full border-x-[color:var(--primary)] border-y-transparent hoverEffect hover:border-y-[color:var(--primary)]"
          />
        </Link>
        <section className="flex liList">
          <ul className="flex flex-row items-center">
            <li>
              <Link to="/About">
                <span>About</span>
              </Link>
            </li>
            <li>
              <Link to="/Blog">
                <span>Blog</span>
              </Link>
            </li>
            <li>
              <Link
                to="https://pages.razorpay.com/pl_K6Ljxyd8G6yakX/view"
                target={"_blank"}
                rel="noreferrer"
              >
                <span>Consultancy</span>
              </Link>
            </li>
            <li>
              <Link to="/">
                <span>Home</span>
              </Link>
            </li>
            <li>
              <Link to="/Contact">
                <span>Contact</span>
              </Link>
            </li>
            <li>
              <Link to="/GitaRemedies">
                <span>Gita Remedies</span>
              </Link>
            </li>
            <li>
              <Link to="/Shop">
                <span>Shop</span>
              </Link>
            </li>
            <li>
              <Link to="/VedicScriptures">
                <span>Vedic Scriptures</span>
              </Link>
            </li>
            <button className="px-4 py-2 bg-[color:var(--primary)] text-white rounded-full hoverEffect hover:bg-[color:var(--midYellow)]">
              <Link to="/">Refresh</Link>
            </button>
          </ul>
        </section>
      </div>
    </>
  );
}
export default NavList;
