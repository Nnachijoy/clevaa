

import React from 'react'
import yellowman from "../assets/yellowman.svg"

const Sixthsection = () => {
  return (
    <div className='Sixth'>
      <div className="container">
  <div className="row d-flex align-items-center">
    <div className="col-sm ">
    <img src={yellowman} alt="" className="fs-6 img-yellowman" />
    </div>
    <div className="col-sm">
    <h1 className='fs-1 mt-5 fw-bolder text-dark'>Create <span className="text-warning">virtual</span> and <span className="text-warning">physical</span>  cards for your business</h1>
    <h1 className='fs-6 mt-2 text-dark '>
    Don’t mix business with personal spend. Create virtual and 
    physical cards in USD or NGN, fund the card with the amount 
    you want, assign the card to your employees, and track spend.
    </h1>
    </div>
   
  </div>
</div>
    </div>
  )
}

export default Sixthsection
