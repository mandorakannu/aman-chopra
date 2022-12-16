import React from "react";
import GetShop from "../jsx/GetShop.jsx";

function Shop() {
  return (
    <>
      <div className="flex flex-col">
        <h1 className="flex justify-center items-center text-3xl font-bold my-10">
          SHOP
        </h1>
        <span className="mx-20 text-[color:var(--brown)] work-sans">
          Showing All 2 Results
        </span>
      </div>
      <GetShop />
    </>
  );
}

export default Shop;
