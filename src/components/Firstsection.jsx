import React from 'react'
import fdic from "../assets/fdic.svg";
import ndic from "../assets/ndic.svg";


const Firstsection = () => {
  return (
    <div className='justify-content-center text-center'>
    <div className="d-flex justify-content-center mt-4">
         <img src={fdic} alt="" className='me-3'/>
         <img src={ndic} alt="" />
    </div>
    <h1 className='mt-3 fs-6'> Cleva USD funds are FDIC-insured while Naira funds are NDIC-insured</h1> 
  </div>
  )
}

export default Firstsection

