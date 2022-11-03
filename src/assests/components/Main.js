import React from "react";
import Btn from "./Btn";

function Main() {
  return (
    <>
      <div className="flex flex-col">
        <img
          src={require("../images/bg.jpg")}
          alt=""
          className="flex -z-50 w-screen fixed top-0 sm-bgImg"
        />
        <div className="flex flex-col sm-main">
          <h1 className="work-sans text-4xl mx-auto mt-20 text-white font-[900] sm-main-h1-1">
            The Manual Of Life
          </h1>
          <hr className="hrClass" />
          <h1 className="work-sans text-7xl mx-auto mt-10 text-white font-[900] sm-main-h1-2">
            BHAGAVAD GITA
          </h1>
          <button className="px-10 py-3 bg-[color:var(--primary)] text-black font-bold rounded-full mx-auto my-20 hover:bg-[color:var(--midYellow)]">
            <a href="/">GET YOUR PROBLEM RESOLVED</a>
          </button>
        </div>
      </div>
      <div className="flex flex-col mt-52 bg-zinc-100 h-max z-40 justify-center open-sans sm-main-content">
        <span className="flex justify-center mt-10 mb-3 text-xl">
          "The true definition of success in life is to turn one's heart & soul
          onto the
        </span>
        <span className="flex justify-center text-xl">
          service of humanity and God."
        </span>
        <span className="flex justify-center my-5 work-sans">-Aman Chopra</span>
        <div className="flex flex-col justify-center mt-20 text-4xl font-[900] work-sans uppercase">
          <h1 className="mx-auto">Ongoing Events</h1>
          <hr className="hrClass" />
        </div>
        {/* Panel Images */}
        <div className="flex flex-row justify-evenly">
          <div className="flex flex-col justify-center">
            <img
              src="https://ik.imagekit.io/egkxyv8la/Aman-Chopra_Website_/assests/panel_JcT6VZhFl.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1661232244582"
              alt=""
              className="flex shadeEffect w-96 h-80"
            />
            <h1 className="work-sans mx-auto my-5 font-extrabold text-xl">Bhagavad Gita on Instagram</h1>
            <span className="w-96 mx-auto text-[color:var(--brown)] open-sans">From the last two years I have been creating Bhagavad Gita Shlok by Shlok videos on Instagram.</span>
           <a href="https://instagram.com/amanchopra__" className="mx-auto my-5">
            <Btn classAdd="btn"/>
           </a>
          </div>
          <div className="flex flex-col justify-center">
            <img
              src="https://ik.imagekit.io/egkxyv8la/Aman-Chopra_Website_/assests/panel1_J8EX-ZuRQ.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1661260557260"
              alt=""
              className="flex shadeEffect w-96 h-80"
            />
             <h1 className="work-sans mx-auto my-5 font-extrabold text-xl">Bhagavad Gita on YouTube</h1>
            <span className="w-96 mx-auto text-[color:var(--brown)] open-sans">You will get a thorough explanation of the Bhagavad Gita Chapter by Chapter in our YouTube series.</span>
            <a href="https://www.youtube.com/watch?v=nQZM1WSAuvw&list=PLL6ueE9xzJAzZExEdt0XlVHRHd-UVzxne" className="mx-auto my-5">
              <Btn classAdd="btn"/>
            </a>
          </div>
        </div>
        <div className="iFrame flex flex-col justify-center my-20 h-screen z-40 ">
        <iframe src="https://www.youtube.com/embed/nQZM1WSAuvw" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen className="mx-auto w-3/4 h-4/5 rounded-md"></iframe>

        <iframe ng-non-bindable="" hspace="0" marginHeight="0" marginWidth="0" scrolling="no" tabIndex="0" vspace="0" id="I0_1667491727386" name="I0_1667491727386" src="https://www.youtube.com/subscribe_embed?usegapi=1&amp;channelid=UCZC5GNeMjOS5Hc8vNbbQRyg&amp;layout=full&amp;count=default&amp;origin=https%3A%2F%2Famanchopra.net&amp;gsrc=3p&amp;ic=1&amp;jsh=m%3B%2F_%2Fscs%2Fabc-static%2F_%2Fjs%2Fk%3Dgapi.lb.en.P0B2vZm_jJk.O%2Fd%3D1%2Frs%3DAHpOoo_nmCaDbrwZCe_WiNZEgKVKQ-FnSA%2Fm%3D__features__#_methods=onPlusOne%2C_ready%2C_close%2C_open%2C_resizeMe%2C_renderstart%2Concircled%2Cdrefresh%2Cerefresh%2Conload&amp;id=I0_1667491727386&amp;_gfid=I0_1667491727386&amp;parent=https%3A%2F%2Famanchopra.net&amp;pfname=&amp;rpctoken=13408446" data-gapiattached="true" frameBorder="0" title="subscribe Button" className="mx-auto justify-center my-5" />
        </div>
      </div>
      <div className="flex flex-col bg-black text-white uppercase relative">
        <h1 className="bg-transparent absolute text-3xl open-sans font-extrabold  text-white top-1/2 right-1/2">Get Access to Vedic granth PdfS</h1>
       <a href="/VedicScriptures">
        <Btn classAdd="btn absolute top-1/2 right-[35%] text-black font-black open-sans"/>
        </a> 
      <img
          src="https://ik.imagekit.io/egkxyv8la/Aman-Chopra_Website_/assests/vedas_LUXlYPEoH_2I75Q5xGPo.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1667494617427"
          alt=""
          className="flex w-screen h-[30rem]"
        />

      </div>
    </>
  );
}

export default Main;
