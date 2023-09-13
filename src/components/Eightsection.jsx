

import React from 'react'
import house from "../assets/house.svg"
import Button from 'react-bootstrap/Button';


const Eightsection = () => {
  return (
    <section>
      <div className=" bg-warning">
        <div className='text-center '> 
      <img src={house} alt="" className="fs-6 img-house" />
        <h1 className='fs-5 mt-2'>Cleva banking is smart banking!</h1>
        </div>
  <div className="row d-flex align-items-center bg-dark">
    <div className="col-sm p-5 ">
    <h1 className='fs-6 mt-5 fw-bolder text-white'>Sign Up</h1>
    <Button variant="warning" className='mt-3'>Take control of your own finances</Button>{' '}
    <h1 className='fs-6 text-white'>Fill out this form and we will contact you <br/> shortly.<br/>
         We’ll only use your information to contact<br/> you about
          Cleva and nothing else.
    </h1>
    </div>
    <div className="col-sm">
    
     </div>
  
  </div>
 </div>
    </section>
  )
}

export default Eightsection


