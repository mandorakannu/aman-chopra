import React from "react";

function NavList(props) {
  return (
    <>
      <div className="sm-hide flex mx-auto z-50">
        <a href="https://www.instagram.com/amanchopra__">
          <img
            src="https://ik.imagekit.io/egkxyv8la/Aman-Chopra_Website_/dp_5OjVSjV04.png?ik-sdk-version=javascript-1.4.3&updatedAt=1659765888130"
            alt="logo"
            srcSet=""
            className="flex flex-row w-16 border-4 rounded-full border-x-[color:var(--primary)] border-y-transparent hoverEffect hover:border-y-[color:var(--primary)]"
          />
        </a>
        <section className="flex liList">
          <ul className='flex flex-row items-center'>
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
              <a href="https://pages.razorpay.com/pl_K6Ljxyd8G6yakX/view" target={"_blank"} rel="noreferrer">
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
            <button className="px-4 py-2 bg-[color:var(--primary)] text-white rounded-full hoverEffect hover:bg-[color:var(--midYellow)]">
              <a href="/">Refresh</a>
            </button>
          </ul>
        </section>
      </div>
    </>
  );
}
export default NavList;
