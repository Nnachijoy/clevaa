
import Navbar from 'react-bootstrap/Navbar';
import navimage from "../assets/navimage.svg"
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

function TextLinkExample() {
  return (
    <Navbar className='bg-dark'>
      <Container>
        <Navbar.Brand href="#home">
            <img src={navimage} alt="" /><span className='text-white'>CLEVA</span>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
          <Button variant="warning">Join Cleva</Button>{' '}
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default TextLinkExample;