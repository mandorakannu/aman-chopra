import React from "react";
import NavList from "./NavList";
import displayHamburger from "../js/dropDownMenu";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import { Link } from "react-router-dom";
function Navbar(props) {
  return (
    <>
      <div
        className={`flex flex-row  work-sans z-50 mx-auto my-10 ${props.bg} `}
      >
        <NavList />
      </div>

      <div
        id="navbarIndex"
        className="flex flex-row fixed top-0 bg-white w-screen pc-hide z-50"
      >
        <Link to="https://www.instagram.com/amanchopra__">
          <img
            src="https://ik.imagekit.io/egkxyv8la/Aman-Chopra_Website_/dp_5OjVSjV04.png?ik-sdk-version=javascript-1.4.3&updatedAt=1659765888130"
            alt=""
            className="w-16 border-4 mx-5 my-5 justify-center  rounded-full border-x-[color:var(--secondary)] border-y-transparent "
          />
        </Link>
        <div className="flex justify-end ml-auto my-5 mr-5">
          <div
            className="flex flex-col p-5 h-16 rounded space-y-2 bg-[color:var(--secondary)] pc-hide"
            onClick={displayHamburger}
          >
            <span className="block w-8 h-0.5 bg-gray-100"></span>
            <span className="block w-8 h-0.5 bg-gray-100"></span>
            <span className="block w-8 h-0.5 bg-gray-100"></span>
          </div>
        </div>
      </div>
      <section className="flex pc-hide bg-white items-center justify-center open-sans text-black sm-liList w-screen z-50">
        <ul className={`flex flex-col items-center z-50`} id="menu">
          <li>
            <Link to="/About">
              <span>About</span>
            </Link>
          </li>
          <hr className="w-screen" />
          <li>
            <Link to="/Blog">
              <span>Blog</span>
            </Link>
          </li>
          <hr className="w-screen" />
          <li>
            <a href="https://pages.razorpay.com/pl_K6Ljxyd8G6yakX/view" target="_blank"  rel="noreferrer" >
              <span>Consultancy</span>
            </a>
          </li>
          <hr className="w-screen" />
          <li>
            <Link to="/">
              <span>Home</span>
            </Link>
          </li>
          <hr className="w-screen" />
          <li>
            <Link to="/Contact">
              <span>Contact</span>
            </Link>
          </li>
          <hr className="w-screen" />
          <li>
            <Link to="/GitaRemedies">
              <span>Gita Remedies</span>
            </Link>
          </li>
          <hr className="w-screen" />
          <li>
            <Link to="/Shop">
              <span>Shop</span>
            </Link>
          </li>
          <hr className="w-screen" />
          <li>
            <Link to="/VedicScriptures">
              <span>Vedic Scriptures</span>
            </Link>
          </li>
        </ul>
      </section>
      <Outlet />
      <Footer />
    </>
  );
}
export default Navbar;
