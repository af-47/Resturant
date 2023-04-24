import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <>
       <Navbar bg="warning" variant="dark">
        <Container>
          <Navbar.Brand href="/" className='text-black'>
          <img 
          alt=" "
          src="https://i.postimg.cc/gcvTcHMS/food-love-restaurant-logo-for-sale.jpg"
          width="30"
          height="30"
          className="d-inline-block align-top"
          />{' '}
          FOODYYYY FOODHOUSE
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  )
}

export default Header
