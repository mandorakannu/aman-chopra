import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Btn from "./Btn";

function Contact() {
  return (
    <>
      <Navbar />
      <div className="flex h-[60vh]">
        <img
          src="https://ik.imagekit.io/egkxyv8la/Aman-Chopra_Website_/assests/download_Xr6-Ud94N_MZrBcImM5.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1661785449444"
          alt=""
          className="fixed top-0 -z-50 h-5/6 w-screen"
        />
      </div>
      <div className="flex flex-row bg-[color:var(--likeWhite)] justify-around items-center">
        <div className="flex flex-col work-sans w-96 my-20">
          <h1 className="font-bold text-4xl w-96 my-5">
            Got ideas? Suggestions? Or feedback? Hit me up!
          </h1>
          <div className="flex flex-col justify-center">
            <div className="my-2 text-xl open-sans">
            <span className="mr-5">Name</span>
            <input type="text" placeholder="Enter Your Name" className="p-3 bg-slate-200 rounded-md"/>
            </div>
            <div className="my-2 text-xl open-sans">
            <span className="mr-4">Email*</span>
            <input type="email" name="" id="" placeholder="Enter Your Email" required className="p-3 bg-slate-200 rounded-md"/>
            </div>
            <div className="my-2 text-xl open-sans">
            <span className="mr-3">Details</span>
            <input type="text" placeholder="Enter Your Details" className="p-3 bg-slate-200 rounded-md"/>
            </div>
            <Btn text="Submit" classAdd="my-10" />
          </div>
        </div>
        <div className="flex flex-col w-80  items-center open-sans">
          <div className="flex flex-col">
            <h1 className="font-bold text-4xl w-96 my-5">Contact Info</h1>
            <h2 className="font-bold text-xl my-1">Address</h2>
            <span className="font-medium text-[color:var(--brown)] text-xl my-1">Clement Town, 248002, Dehradun, India </span>
            <h2 className="font-bold text-xl my-1">Email Us</h2>
            <span className="font-medium text-xl my-1 text-[color:var(--brown)]"> amanchopramotivation@gmail.com</span>
            <h2 className="font-bold text-xl my-1">Whatsapp</h2>
            <span className="font-medium text-xl my-1 text-[color:var(--brown)]">+91 88149-03534</span>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default Contact;
