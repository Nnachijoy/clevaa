

import React from 'react'
import nairaDollar from "../assets/nairaDollar.svg"

const Fifthsection = () => {
  return (
    <div>
      <div className="container">
  <div className="row d-flex align-items-center">
    <div className="col-sm ">
    <h1 className='fs-1 mt-5 fw-bolder text-dark'>Send money <span className="text-warning">locally</span> and<span className="text-warning"> across borders </span> </h1>
           <h1 className='fs-6 mt-2 text-dark '>
           Transfer money from your
            Cleva account to any bank account in Nigeria or in the US. Pay your vendors and suppliers with ease no matter where they’re located.
            </h1>
    </div>
    <div className="col-sm">
      <img src={nairaDollar} alt="" className="fs-6 img-nairaDollar" />
    </div>
   
  </div>
</div>
    </div>
  )
}

export default Fifthsection
