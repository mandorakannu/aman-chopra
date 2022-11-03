import React from "react";

function Btn(props) {
  return <span className={`flex justify-center items-center w-fit font-extrabold work-sans bg-[color:var(--primary)] px-3 py-2  rounded-full uppercase ${props.classAdd}`}>{props.text} &#10142;</span>;
}
Btn.defaultProps = { text: "Learn More" };
export default Btn;
