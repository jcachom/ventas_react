
import React from 'react';
import { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css' ;
import ItemDetailContainer from './ItemDetailContainer';

class  Item extends Component{


    onVerDetalle =() => {
               
        <div>
                  
            {
                console.log('Hola click' + this.props.sku )
            }
        </div>
         
     }
     render() {
         
           const colorP={'font-weight': 'bold'}
            return (
    
             <div >
                      
            <img src={require(`../img/${this.props.nombre_img}`).default}  alt="Carrito" className='img-fluid img-thumbnail' max-width='100%' height='auto'></img>
             <div >  <span style={colorP} >Producto: </span>{this.props.sku} - {this.props.producto}
            
             </div>
             <button  className="btn btn-danger">Ver más</button>
            

             
             </div>
             );
    }
 
}

    export default Item;
