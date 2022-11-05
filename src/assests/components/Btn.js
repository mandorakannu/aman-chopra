import React from "react";

function Btn(props) {
  return <span className={`button flex justify-center items-center w-fit font-extrabold work-sans bg-[color:var(--primary)] px-5 py-2  rounded-full uppercase hoverEffect cursor-pointer ${props.classAdd}`}>{props.text} &#10142;</span>;
}
Btn.defaultProps = { text: "Learn More"};
export default Btn;
