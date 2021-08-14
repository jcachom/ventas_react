
import React from 'react';
import { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css' ;


class  Item extends Component{
     render() {
         
           const colorP={'font-weight': 'bold'}
            return (
    
             <div >
      
            <img src={require(`../img/${this.props.nombre_img}`).default}  alt="Carrito" className='img-fluid img-thumbnail' max-width='100%' height='auto'></img>
             <div >  <span style={colorP} >Producto: </span>{this.props.sku} - {this.props.producto}</div>
                        
             </div>
             );
    }
 
}

    export default Item;
