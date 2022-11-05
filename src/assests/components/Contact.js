import React from 'react'
import Navbar from "./Navbar";
import Btn from "./Btn";

function Contact() {
  return (
   <>
   <Navbar/>
   <div className='flex h-[60vh]'>
    <img src="https://ik.imagekit.io/egkxyv8la/Aman-Chopra_Website_/assests/download_Xr6-Ud94N_MZrBcImM5.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1661785449444" alt="" className='fixed top-0 -z-50 h-5/6 w-screen'/>
   </div>
   <div className='flex flex-row bg-white justify-evenly  py-20'>
    <div className='flex flex-col justify-center work-sans'>
      <h1 className='font-bold text-4xl'>Got ideas? Suggestions? Or feedback? Hit me up!</h1>
      <div className='flex flex-col justify-center'>
        <span>Name</span>
        <input type="text" />
        <span>Email</span>
        <input type="email" name="" id="" />
        <span>Details</span>
        <input type="text" />
        <Btn text="Submit"/>
      </div>
      </div>
      <div className='flex flex-col'>
       <div className='flex flex-row'>
       <h1>Contact Info</h1>
        <h2>Address</h2>
        <span>Clement Town, 248002, Dehradun, India </span>
        <h2>Email Us</h2>
        <span> amanchopramotivation@gmail.com</span>
        <h2>Whatsapp</h2>
        <span>+91 88149-03534</span>
       </div>
      </div>
    
   </div>
   </>
  )
}

export default Contact