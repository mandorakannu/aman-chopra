import React from "react";
import GetGita from "../jsx/GetGita";
import Footer from "./Footer";
import Navbar from "./Navbar";
function GitaRemedies() {
  return (
    <>
    <Navbar bg="bg-slate-300 sticky top-0 py-2"/>
    <div className="flex flex-col justify-center text-3xl font-bold my-10">
      <h1 className="flex items-center justify-center">RESOLVE ALL OF YOUR LIFE PROBLEMS NOW</h1>
      <hr className=" flex hrClass h-0.5 bg-[color:var(--primary)]" /> 
      <h1 className="flex text-sm justify-center items-center font-medium work-sans my-5 text-[color:var(--brown)]">
      Choose the issue you are currently facing, and the Timelss wisdom of Srimad Bhagavad Gita will help you discover a resolution.
      </h1>
    </div>
    <GetGita/>
    <Footer/>
    </>
  )
}

export default GitaRemedies;
