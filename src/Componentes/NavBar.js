import React,{Component} from 'react';
 import 'bootstrap/dist/css/bootstrap.min.css' ;
 

 

import './NavBar.css';


function NavBar(){
    return (
      
      <div className="container">

       <header className="divHeader" id="divHeader">
        ABRIGOS PARA EL MUNDO
      </header>
               
        <nav id="navHeader"   className="navbar navbar-expand-sm navbar-light bg-light">
         
        <button className="navbar-toggler"  type="button" data-toggle="collapse" data-target="#opciones" >
        <span className="navbar-toggler-icon"></span>
        </button>
             
        <div className="collapse navbar-collapse" id="opciones">
          <ul id="ulMenu" className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="index.html">Inicio</a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="carrito.html">
                <div className="container">
                  <div className="row">
                    <div className="col-sm-8"> Carrito </div>
                    <div id="divCantCarrito" className="col-sm-4 pCarrito"></div>
                  </div>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </nav>



 

      </div>
    );
    }
    export default NavBar;


 