import React from 'react';
import { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css' ;
 
class  ItemDetail extends Component{
     constructor(props){
         super(props);
       
     }
    
    render() {
        const colorP={'font-weight': 'bold'}
        const borde = {
          'border': '3px solid green'
          };

            return (
    
             <div style={borde}>
            <div><span style={colorP} >Detalle Producto</span> </div>
           <img src={require(`../img/${this.props.nombre_img}`).default}></img>
             <div >  <span style={colorP} >Producto:</span>  {this.props.producto}  <span style={colorP}>Precio:</span> {this.props.precio}</div>
             <div >  <span style={colorP} >Detalle:</span>  {this.props.tipo} </div>
             <div >  <span style={colorP} >En Stock:</span>  {this.props.stock} </div>
             
            </div>
   

        );
    }
  }

    export default ItemDetail;

