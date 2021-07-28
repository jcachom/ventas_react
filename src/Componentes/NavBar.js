import React from 'react';
 import 'bootstrap/dist/css/bootstrap.min.css' ;
 import { Nav ,  Navbar } from 'react-bootstrap';
 import logo from './tienda.jpg';


import './NavBar.css';



function NavBars(){
  return (
    
    <div >

      <div className="ptitulo">
         ABRIGOS PARA EL MUNDO
      </div>
       
      <Navbar bg="MenuColor" variant="dark" sticky="top" expand="sm" collapseOnSelect>
        
    
        <Navbar.Brand href="index.html">
        <img src={logo} alt="Logo"  className="imgRedonda"></img>{' '}
           Inicio        
        </Navbar.Brand>    
        <Navbar.Toggle aria-controls="responsive-navbar-nav"></Navbar.Toggle>

         <Navbar.Collapse>

         <Nav>                            
          <Nav.Link href="carrito.html">Carrito</Nav.Link>
          <Nav.Link href="contacto.html">Contacto</Nav.Link>
          </Nav>

         </Navbar.Collapse>


      </Navbar>
      <div className="content">
           ...Parte de Cuerpo....
      </div>
             
   
    </div>
  );
  }




    export default NavBars;


 

 