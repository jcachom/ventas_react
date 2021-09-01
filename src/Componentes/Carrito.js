import React from 'react';
import { useContext,useState,useEffect } from 'react';
import CartContext from '../context/CartContext';
import 'bootstrap/dist/css/bootstrap.min.css' ;


const Carrito = () => {

  const {cartItems,removeItem}=useContext(CartContext);

          const altura={height: '100px'}
          const divTable ={ border: '1px solid red',
                         width : '60%'}
          const colorP={'font-weight': 'bold'}

          const removeCarrito =(e, sku) => {
          
          removeItem(sku) ;  
          
                          
         }
  
          const [vSumTotal, setVSumTotal] = useState(0);
 
 
 useEffect(() => {
    const handlesumar = () => {   
      
      if (cartItems.length>0) {
        const sum = cartItems.map(datum => datum.cant_pedido*datum.precio).reduce((a, b) => a + b)
        setVSumTotal(sum);
      }
        else {
          setVSumTotal(0);
        }

      
     
    };
    handlesumar();
  });

          return (

            <div style={altura}  >Productos seleccionados:  
            { cartItems.map((data, key) => {
           return (       
            <div >
                <div class="container" style={divTable}>
                      <div class="row">
                            <div class="col-sm">
                                  <span style={colorP} >SKU: </span>{data.sku}                                                         
                             </div>                             
                          </div>

                          <div class="row">
                                  <div class="col-sm">
                                  <span style={colorP} >Producto:</span>{data.producto}   
                          </div>

                          <div class="col-sm">
                                  <span style={colorP} >Cant. Pedido :</span>{data.cant_pedido}
                                  {'     '} <span style={colorP} >Precio :</span>{data.precio}
                                  {'     '}
                                  <p>
                                  <span style={colorP} >SubTotal :</span>{data.precio*data.cant_pedido}
                                  </p>                                  
                            </div>                            
                             <div class="col-sm">
                                  <button   className="btn btn-danger" onClick={(ev)=>removeCarrito(ev,data.sku)} >Remover Item</button>  
                                  
                              </div>
                          </div>
                          

                  </div>
                  <p></p>
                 
                    
         </div>    
             
           );
 
          
 
         })}

          <div class="container" style={divTable}>
          <span style={colorP} >Total a pagar :</span> {vSumTotal}
           
          </div>
                
        </div>
 

       ) 

}

 export default Carrito ;

 

 /*

   {'     '}
                                <span style={colorP} >Precio :</span>
                               {data.precio}


  Total : {Total}

        {console.log({Total : {Total}})}

 */
