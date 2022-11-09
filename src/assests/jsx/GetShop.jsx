import React from 'react'
import Btn from "../components/Btn"

function GetShop() {
    const images ={
        data: [
            {
                "url": "https://ik.imagekit.io/egkxyv8la/Aman-Chopra_Website_/Shop/Create-your-own-T-Shirt-_-Zazzle_com-5-1-e1658056123893-300x300_CIZrqSrZi.jpeg?ik-sdk-version=javascript-1.4.3&updatedAt=1668001600654",
                "title": "Humare Sath Shri Raghunath T-shirt",
                "price": "₹479.00 - ₹499.00"
            },
            {
                "url": "https://ik.imagekit.io/egkxyv8la/Aman-Chopra_Website_/Shop/merch-300x300_FIRbLUJ8b.png?ik-sdk-version=javascript-1.4.3&updatedAt=1668001601559",
                "title": "No Tension No Drama T-Shirt",
                "price": "₹559.00 - ₹599.00"
            },
        ]
    }

  return ( images.data.map((element)=>{
    return <>
    <div className="inline-flex my-10" key={element.title}>
          <div className="flex flex-col items-center w-96 my-5">
            <img
              src={element.url}
              alt={element.title}
              className="w-72 h-52 shadeEffect"
              loading="lazy"
            />
            <div className="flex flex-col  items-center">
              <h1 className="flex items-center justify-center text-xl work-sans my-5">
                {element.title}
              </h1>
              <h1 className='mb-5 font-semibold'>{element.price}</h1>
              <Btn text="Buy Now!"/>
            </div>
          </div>
        </div>
    </>
  })
  )
}

export default GetShop
