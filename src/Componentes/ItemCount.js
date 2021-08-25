
import React from 'react';
import { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css' ;
 
 
const foto_1 = 'producto_6.png';

class  ItemCount extends Component{
     constructor(props){
         super(props);
         this.state ={
             cant_pedido : parseInt(  this.props.cant_inicial,10) ,                 
         };
     }

     onAdicPedido =() => {
       
        if (this.state.cant_pedido + 1 <= parseInt( this.props.stock) ){

            this.setState( (prevState) => ({           
                cant_pedido: prevState.cant_pedido + 1            
          }));
        }    
     }

     onDisPedido =() => {

        if (this.state.cant_pedido - 1 > 0 ){
            this.setState( (prevState ) => ({  
                cant_pedido: prevState.cant_pedido - 1  
                                                    
              }));

            }      
     }

    render() {
        const colorP={'font-weight': 'bold'}
            return (
    
             <div >
    
 

             <div className="form-inline">
             <button onClick={this.onDisPedido} className="btn btn-danger" >-</button>            
             <input   type="number"  key="cant_ped" className="form-control-sm" value={this.state.cant_pedido} />  
             <button onClick={this.onAdicPedido} className="btn btn-danger">+</button>
             </div>
            
            
           
            </div>
   

        );
    }
  }


    export default ItemCount;

