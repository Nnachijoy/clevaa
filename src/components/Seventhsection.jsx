

import React from 'react'
import yellowwoman from "../assets/yellowwoman.svg"

const Seventhsection = () => {
  return (
    <section>
      <div className="container">
  <div className="row d-flex align-items-center">
    <div className="col-sm ">
    <h1 className='fs-1 mt-5 fw-bolder text-dark'>Track all of your <span className="text-warning">finances</span> in one dashboard</h1>
    <h1 className='fs-6 mt-2 text-dark '>
    Easily view how much money your business has received and spent. No more spreadsheets, use Cleva!
    </h1>
    </div>
    <div className="col-sm">
    <img src={yellowwoman} alt="" className="fs-6 img-yellowwoman" />
    </div>
   
  </div>
</div>
    </section>
  )
}

export default Seventhsection
