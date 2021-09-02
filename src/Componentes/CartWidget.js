import React from 'react';
import Carrito from './carrito_naranja.png';


function CartWidget(){
  return (
    
    <div >
    

    <label for="Name">Carrito</label>
    <img src={Carrito} alt="Carrito"  className="cartRedonda"></img>{' '}
        
     

    </div>
   

  );
  }
    export default CartWidget;

    //<input style={{width: '30px'}} type="number" value="0"   disabled   className="formatCarrito"/> 
  /*
    <div >
    

    <label for="Name">Carrito</label>
    <img src={Carrito} alt="Carrito"  className="cartRedonda"></img>{' '}
        
    <input style={{width: '30px'}} type="number" value="0"   disabled   className="formatCarrito"/> 

    </div>
  */