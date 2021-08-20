
import React from 'react';
import { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css' ;
import ItemDetailContainer from './ItemDetailContainer';
import { useHistory } from 'react-router-dom';

const  Item = (props) =>{

    const colorP={'font-weight': 'bold'}
    const history =useHistory();
    
    const idsku = `${process.env.PUBLIC_URL}/ItemDetailContainer/${props.sku}`

    const onVerDetalle =() => history.push(idsku);

     return (
         
              
             <div >
                      
            <img src={require(`../img/${props.nombre_img}`).default}  alt="Carrito" className='img-fluid img-thumbnail' max-width='100%' height='auto'></img>
             <div >  <span style={colorP} >Producto: </span>{props.sku} - {props.producto}
            
             </div>
             <button  className="btn btn-danger" onClick={onVerDetalle}>Ver más</button>
            

             
             </div>
            
     )
 
}

    export default Item;
