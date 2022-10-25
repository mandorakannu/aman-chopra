import React from "react";

function Navbar() {
  return (
    <div className="flex flex-row justify-center items-center bg-transparent work-sans my-2 z-50">
      <img
        src="https://ik.imagekit.io/egkxyv8la/Aman-Chopra_Website_/dp_5OjVSjV04.png?ik-sdk-version=javascript-1.4.3&updatedAt=1659765888130"
        alt="logo"
        srcSet=""
        className="flex w-16 border-4 rounded-full border-x-[color:var(--primary)] border-y-transparent"
      />
      <section className="flex flex-row navbarList">
        <ul className="flex flex-row items-center">
          <li>
            <span>About</span>
          </li>
          <li>
            <span>Blog</span>
          </li>
          <li>
            <span>Consultancy</span>
          </li>
          <li>
            <span>Home</span>
          </li>
          <li>
            <span>Contact</span>
          </li>
          <li>
            <span>Gita Remedies</span>
          </li>
          <li>
            <span>Shop</span>
          </li>
          <li>
            <span>Vedic Scriptures</span>
          </li>
        </ul>
        <button className="px-4 py-2 bg-[color:var(--primary)] text-white rounded-full ">
          Refresh
        </button>
      </section>
    </div>
  );
}

export default Navbar;
