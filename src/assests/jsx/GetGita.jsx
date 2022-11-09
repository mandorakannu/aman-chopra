import React from "react";
import Btn from "../components/Btn";

const getData = {
  data: [
    {
      Image:
        "https://ik.imagekit.io/egkxyv8la/Aman-Chopra_Website_/Gita_Remedies_Images/crazy-irate-angry-3126441.jpg_TpRDBO_Dl.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1667816787564",
      title: "Anger",
    },
    {
      Image:
        "https://ik.imagekit.io/egkxyv8la/Aman-Chopra_Website_/Gita_Remedies_Images/doubt-decision-devil-4803407.jpg_kOE2WmEyU.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1667816787855",
      title: "Confusion",
    },
    {
      Image:
        "https://ik.imagekit.io/egkxyv8la/Aman-Chopra_Website_/Gita_Remedies_Images/jelous.jpeg_p8CTzkY6w_.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1667816783325",
      title: "Deal with Envy",
    },
    {
      Image:
        "https://ik.imagekit.io/egkxyv8la/Aman-Chopra_Website_/Gita_Remedies_Images/death-of-loved-one.jpeg_DJ8KhLXmI.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1667816782818",
      title: "Death of a Loved One",
    },
    {
      Image:
        "https://ik.imagekit.io/egkxyv8la/Aman-Chopra_Website_/Gita_Remedies_Images/depression-man-anger-2912404.jpg_z59vNlOqDS.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1667816783206",
      title: "Depression",
    },
    {
      Image:
        "https://ik.imagekit.io/egkxyv8la/Aman-Chopra_Website_/Gita_Remedies_Images/Check-if-your-problem-at-work-is-discrimination-1536x1278.jpeg_U4DskOuLf5.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1667816784015",
      title: "Discriminated",
    },
    {
      Image:
        "https://ik.imagekit.io/egkxyv8la/Aman-Chopra_Website_/Gita_Remedies_Images/Depressed-Head-Desk.jpeg_9qtaKCcFu1.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1667816783311",
      title: "Demotivated",
    },
    {
      Image:
        "https://ik.imagekit.io/egkxyv8la/Aman-Chopra_Website_/Gita_Remedies_Images/sinful.jpeg_1JLMu4OCuN.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1667816783284",
      title: "Feeling Sinful",
    },
    {
      Image:
        "https://ik.imagekit.io/egkxyv8la/Aman-Chopra_Website_/Gita_Remedies_Images/greed.jpeg_0gU1CYX8S.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1667816783211",
      title: "Greed",
    },
    {
      Image:
        "https://ik.imagekit.io/egkxyv8la/Aman-Chopra_Website_/Gita_Remedies_Images/laziness-1536x1026_VyFPp9vwX6.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1667816783185",
      title: "Laziness",
    },
    {
      Image:
        "https://ik.imagekit.io/egkxyv8la/Aman-Chopra_Website_/Gita_Remedies_Images/loneliness.jpeg_9f7iyA9gt4.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1667816783307",
      title: "Loneliness",
    },
    {
      Image:
        "https://ik.imagekit.io/egkxyv8la/Aman-Chopra_Website_/Gita_Remedies_Images/hopeless_by_skeletal_insanity01_kvr_MWToa.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1667816788928",
      title: "Hopelessness",
    },
    {
      Image:
        "https://ik.imagekit.io/egkxyv8la/Aman-Chopra_Website_/Gita_Remedies_Images/The-Art-of-Forgiveness_2gu7C3vVc.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1667816786064",
      title: "PRACTICING FORGIVENESS",
    },
    {
      Image:
        "https://ik.imagekit.io/egkxyv8la/Aman-Chopra_Website_/Gita_Remedies_Images/r0_0_4181_2499_w1200_h678_fmax_aQMb75oE9.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1667816785965",
      title: "PRIDE",
    },
    {
      Image:
        "https://ik.imagekit.io/egkxyv8la/Aman-Chopra_Website_/Gita_Remedies_Images/peaceful-life.jpeg_-IzUNPyEt.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1667816786356",
      title: "SEEKING PEACE",
    },
    {
      Image:
        "https://ik.imagekit.io/egkxyv8la/Aman-Chopra_Website_/Gita_Remedies_Images/pri68tuffahhnomddkv7_ZZLAppkyRI.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1667816786276",
      title: "TEMPTATION",
    },
    {
      Image:
        "https://ik.imagekit.io/egkxyv8la/Aman-Chopra_Website_/Gita_Remedies_Images/fear.jpeg_Spa6Lfw0e.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1667816783043",
      title: "FEAR",
    },
    {
      Image:
        "https://ik.imagekit.io/egkxyv8la/Aman-Chopra_Website_/Gita_Remedies_Images/uncontrolled-mind.jpeg_tizheWclgk.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1667816786723",
      title: "UNCONTROLLED MIND",
    },
    {
      Image:
        "https://ik.imagekit.io/egkxyv8la/Aman-Chopra_Website_/Gita_Remedies_Images/lust.jpeg_Msbg38rtq.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1667816787197",
      title: "Lust",
    },
    {
      Image:
        "https://ik.imagekit.io/egkxyv8la/Aman-Chopra_Website_/Gita_Remedies_Images/getty_145582759_2000132420009280396_107863_XM409d_G4I.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1667816786414",
      title: "FORGETFULNESS",
    },
  ],
};

function GetGita() {
  return getData.data.map((element) => {
    return (
      <>
        <div className="inline-flex my-10" key={element.title}>
          <div className="flex flex-col items-center justify-center w-96">
            <img
              src={element.Image}
              alt={element.title}
              className="w-72 shadeEffect"
              loading="lazy"
            />
            <div className="flex flex-col justify-center items-center">
              <h1 className="flex items-center justify-center text-xl work-sans my-5">
                {element.title}
              </h1>
              <Btn />
            </div>
          </div>
        </div>
      </>
    );
  });
}

export default GetGita;
