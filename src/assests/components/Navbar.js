import React from "react";

function Navbar() {
  return (
    <div className="flex flex-row justify-center items-center bg-transparent work-sans my-2 z-50">
      <a href="https://www.instagram.com/amanchopra__">
        <img
          src="https://ik.imagekit.io/egkxyv8la/Aman-Chopra_Website_/dp_5OjVSjV04.png?ik-sdk-version=javascript-1.4.3&updatedAt=1659765888130"
          alt="logo"
          srcSet=""
          className="flex w-16 border-4 rounded-full border-x-[color:var(--primary)] border-y-transparent"
        />
      </a>
      <section className="flex flex-row navbarList">
        <ul className="flex flex-row items-center">
          <li>
            <a href="/About">
              <span>About</span>
            </a>
          </li>
          <li>
            <a href="/Blog">
              <span>Blog</span>
            </a>
          </li>
          <li>
            <a href="/">
              <span>Consultancy</span>
            </a>
          </li>
          <li>
            <a href="/">
              <span>Home</span>
            </a>
          </li>
          <li>
            <a href="/Contact">
              <span>Contact</span>
            </a>
          </li>
          <li>
            <a href="/GitaRemedies">
              <span>Gita Remedies</span>
            </a>
          </li>
          <li>
            <a href="/Shop">
              <span>Shop</span>
            </a>
          </li>
          <li>
            <a href="/VedicScriptures">
              <span>Vedic Scriptures</span>
            </a>
          </li>
        </ul>
        <button className="px-4 py-2 bg-[color:var(--primary)] text-white rounded-full ">
          <a href="/">Refresh</a>
        </button>
      </section>
    </div>
  );
}

export default Navbar;
