import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css' ;
import { BrowserRouter, Switch, Route ,Link, NavLink } from 'react-router-dom';
 
import ItemDetailContainer from "./ItemDetailContainer";
import ItemList from "./ItemList";
import './NavBar.css';
 
import logo from './tienda.jpg';
import CartWidget from './CartWidget';
import Contacto from './Contacto'
import Carrito from './Carrito'
import {Button} from "@material-ui/core"

const Router = () => {
 
    return (
        <div>

<BrowserRouter>

    <div className="bg-MenuColor">
    <Button component={Link} to={process.env.PUBLIC_URL + "/"}  variant="contained"   color="primary" >
        <img src={logo} alt="Logo"  className="imgRedonda"></img>{' '}
            Inicio</Button>
        <Button component={Link} to={process.env.PUBLIC_URL + "/Carrito"} variant="contained" color="primary" >
        <CartWidget/> </Button> 
        <Button component={Link} to={process.env.PUBLIC_URL + "/Contacto"} variant="contained" color="primary" >Contacto</Button>                 
         <Button   component={Link} to={process.env.PUBLIC_URL + "/ItemDetailContainer/008"} variant="contained" color="primary" >Detalle</Button> 
       

    </div>
      

             <Switch>             
              <Route exact path={process.env.PUBLIC_URL + "/"} component={ItemList} /> 
              <Route exact path={process.env.PUBLIC_URL + "/Carrito"} component={Carrito} /> 
              <Route exact path={process.env.PUBLIC_URL + "/Contacto"} component={Contacto} /> 
              <Route exact path={process.env.PUBLIC_URL + "/ItemDetailContainer/:sku"} component={ItemDetailContainer} />

             </Switch>

            </BrowserRouter>


  

            
        </div>
    )

}

 export default Router ;

