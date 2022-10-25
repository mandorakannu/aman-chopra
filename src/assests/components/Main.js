import React from "react";

function Main() {
  return (
    <>
      <div className="flex flex-col">
        <img
          src={require("../images/bg.jpg")}
          alt=""
          className="flex -z-50 w-screen fixed top-0 "
        />
        <h1 className="work-sans text-4xl mx-auto mt-20 text-white font-[900]">
          The Manual Of Life
        </h1>
        <hr className="w-20  mx-auto  border-[color:var(--primary)] my-5" />
        <h1 className="work-sans text-7xl mx-auto mt-10 text-white font-[900]">
          BHAGAVAD GITA
        </h1>
        <button className="px-10 py-3 bg-[color:var(--primary)] text-black font-bold rounded-full mx-auto my-20">
          <a href="/">GET YOUR PROBLEM RESOLVED</a>
        </button>
      </div>
      <div className="flex flex-col mt-52 bg-[color:var(--white)] h-screen z-40">
        
      </div>
    </>
  );
}

export default Main;
