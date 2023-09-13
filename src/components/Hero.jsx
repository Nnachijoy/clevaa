import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';


const Hero = () => {
  return (
    <div className='bg-dark'>
    <Container className='p-5' >
      <Row>
        <Col>
        <div >
            <h1 className='fs-1 text-white mt-5 fw-bolder'>Multi-currency banking<br/> for<span className='text-warning'> African</span> businesses </h1>
            <h1 className='fs-6 text-white mt-3'>Accept payments in USD and other currencies, convert currencies with one click, transfer locally or across borders, and spend with a card</h1>
            <h1 className='fs-6 text-white mt-3'>For:<span className='text-warning px-2'>Startups | Traders | SMEs | Freelancers</span> </h1>
            <Button variant="warning" className='mt-3'>Join Cleva</Button>{' '}
        </div>
        </Col>
        <Col>now you see me</Col>
      </Row>
     
    </Container>
    </div>
  )
}

export default Hero;