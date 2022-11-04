import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

function About() {
  return (
    <>
      <Navbar />
      <div className="h-max my-32">
        <img
          src="https://ik.imagekit.io/egkxyv8la/Aman-Chopra_Website_/assests/download_1_eaHq7f1AH.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1661662352024"
          alt=""
          className="fixed top-0 w-screen h-[90vh] -z-50"
        />
        <h1 className="flex justify-center items-center mt-20 text-white text-6xl work-sans font-bold">
          Selflessness
        </h1>
        <h1 className="flex justify-center items-center my-10 text-white text-4xl work-sans font-semibold">
          is everything.
        </h1>
      </div>
      <div className="flex flex-row bg-white py-44 justify-around">
        <div className="">
          <h1 className="font-semibold text-3xl my-5 mx-10">Mission</h1>
          <hr className="mx-10 w-28 border-[color:var(--primary)] mb-10" />
          <p className="text-[color:var(--brown)] w-[35rem] border my-16 text-lg work-sans leading-7">
            By incorporating values from the Bhagavad Gita into the contemporary
            educational system, Aman Chopra, hope to make a difference.
          </p>
          <p className="text-[color:var(--brown)] w-[35rem] border my-16 text-lg work-sans leading-7">
            He only wants to use his meagre efforts to serve mankind. His life's
            goal is to change education by integrating spiritual, interpersonal,
            financial, and extracurricular learning into the mainstream.
          </p>
        </div>
        <div className="">
          <img src="https://ik.imagekit.io/egkxyv8la/Aman-Chopra_Website_/assests/20211031_120856287_iOS-scaled.jpg_NjuHij-LO.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1661662911224&tr=w-1080%2Ch-1080%2Cfo-auto" alt="" className="w-96 shadeEffect"/>
        </div>
      </div> 
       <Footer />
    </>
  );
}

export default About;
