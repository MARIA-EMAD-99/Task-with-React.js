import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faShoppingCart, faUser, faSearch } from '@fortawesome/free-solid-svg-icons';
import style from './navigaion.module.css'; // Ensure the correct file name

import { CartContext } from '../../context/cartcontext';

function Navigation() {
  const { cartCount } = useContext(CartContext);

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" navbarScroll>
          <Nav.Link as={Link} to="/home">Home</Nav.Link>
          <Nav.Link as={Link} to="/price">Products</Nav.Link>
            <Nav.Link as={Link} to="/beauty">Beauty</Nav.Link>
            <Nav.Link as={Link} to="/fragrances">Fragrances</Nav.Link>
            <Nav.Link as={Link} to="/furniture" >Furniture</Nav.Link>
            <Nav.Link as={Link} to="/groceries" >Groceries</Nav.Link>
             
             
          </Nav>
          <div className={`${style.navbaricons} me-5`}>
            <button type="submit" className={`btn btn-link p-0 me-2 text-dark ${style.navbaricon}`}>
              <FontAwesomeIcon icon={faSearch} />
            </button>
            <Link to="/search" className="text-decoration-none ms-1 text-dark m-2">Search</Link>
           
            <Link to="/cart" className={style.navbaricon}>
              <FontAwesomeIcon icon={faShoppingCart} />
              <span className={style.navbariconbadge}>{cartCount}</span>
            </Link>
            
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
