import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css' ;
import ItemCount from './ItemCount';
import { useHistory } from 'react-router-dom';
 

  const  ItemDetail = (props) =>{


    const history =useHistory();    
    const cart = `${process.env.PUBLIC_URL}/Carrito`
    const onVerCarrito =() => history.push(cart);


    
  
        const colorP={'font-weight': 'bold'}
        const borde = {
          'border': '3px solid green'
          };

            return (
    
             <div style={borde}>
            <div><span style={colorP} >Detalle Producto</span> </div>
           <img src={require(`../img/${props.nombre_img}`).default}></img>
             <div >  <span style={colorP} >Producto:</span>  {props.producto}  <span style={colorP}>Precio:</span> {props.precio}</div>
             <div >  <span style={colorP} >Detalle:</span>  {props.tipo} </div>
             <div >  <span style={colorP} >En Stock:</span>  {props.stock} </div>
             
             <ItemCount cant_inicial="1" stock= {props.stock}></ItemCount>

             <div>  <button className="btn btn-primary" onClick={onVerCarrito}>Terminar mi compra</button></div>

            </div>
   

        )
    
  }

    export default ItemDetail;

