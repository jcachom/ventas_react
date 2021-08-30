import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css' ;
import ItemCount from './ItemCount';
import { useHistory } from 'react-router-dom';
import { useEffect, useState } from 'react';
 

  const  ItemDetail = (props) =>{


    const history =useHistory();    
    const cart = `${process.env.PUBLIC_URL}/Carrito`
    const onVerCarrito =() =>
    {
      history.push(cart);
    } 

    const onAddCarrito =() =>
    {
      setVisible(false);
    } 

    const [visible, setVisible] = useState(true);


    
  
        const colorP={'font-weight': 'bold'}
        const colorAdic={'color': 'green'}

        const borde = {
          'border': '3px solid green'
          };

       
          let styleDefault = { display: "inline" };
          let styleCart = { display: "none" };
          if (!visible) styleDefault.display = "none";
          if (!visible) styleCart.display = "inline";

                 
            return (
    
             <div style={borde}>
             <div><span style={colorP} >Detalle Producto</span> </div>
             <img src={require(`../img/${props.nombre_img}`).default}></img>
             <div >  <span style={colorP} >Producto:</span>  {props.producto}  <span style={colorP}>Precio:</span> {props.precio}</div>
             <div >  <span style={colorP} >Detalle:</span>  {props.tipo} </div>
             <div >  <span style={colorP} >En Stock:</span>  {props.stock} </div>
             
             <ItemCount cant_inicial="1" stock= {props.stock}></ItemCount>

          
             <div style={styleCart} ><span style={colorAdic} >Producto adicionado</span> </div>

             <div  style={styleDefault}>  <button className="btn btn-primary" onClick={onAddCarrito}>Agregar carrito</button></div>

             <div  style={styleCart}>  <button className="btn btn-warning" onClick={onVerCarrito}>Ir al carrito</button></div>


            </div>
   

        )
    
  }

    export default ItemDetail;

