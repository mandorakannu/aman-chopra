import React from "react";
import NavList from "./NavList";
import displayHamburger from "../js/dropDownMenu";

function Navbar() {
  return (
    <>
      <div className="flex flex-row  bg-transparent work-sans z-50 mx-auto my-10 ">
        <NavList/>
      </div>

      <div id='navbarIndex'
        className="flex flex-row fixed top-0 bg-white w-screen pc-hide z-50"
      >
        <a href="https://www.instagram.com/amanchopra__">
          <img
            src="https://ik.imagekit.io/egkxyv8la/Aman-Chopra_Website_/dp_5OjVSjV04.png?ik-sdk-version=javascript-1.4.3&updatedAt=1659765888130"
            alt=""
            className="w-16 border-4 mx-5 my-5 justify-center  rounded-full border-x-[color:var(--secondary)] border-y-transparent "
          />
        </a>
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
            <a href="/About">
              <span>About</span>
            </a>
          </li>
            <hr className="w-screen"/>
          <li>
            <a href="/Blog">
              <span>Blog</span>
            </a>
          </li>
            <hr className="w-screen"/>
          <li>
            <a href="/">
              <span>Consultancy</span>
            </a>
          </li>
            <hr className="w-screen"/>
          <li>
            <a href="/">
              <span>Home</span>
            </a>
          </li>
          <hr className="w-screen"/>
          <li>
            <a href="/Contact">
              <span>Contact</span>
            </a>
          </li>
          <hr className="w-screen"/>
          <li>
            <a href="/GitaRemedies">
              <span>Gita Remedies</span>
            </a>
          </li>
          <hr className="w-screen"/>
          <li>
            <a href="/Shop">
              <span>Shop</span>
            </a>
          </li>
          <hr className="w-screen"/>
          <li>
            <a href="/VedicScriptures">
              <span>Vedic Scriptures</span>
            </a>
          </li>
          {/* <hr className="w-screen"/> */}
        </ul>
      </section>
    </>
  );
}
export default Navbar;
