import React from 'react';
 
function Cabecera(prop){
    return (
        <h1>{prop.Cabecera}</h1>
    );
}


function App(){
return (
  <div> 
     <p>VENTAS</p>
      <Cabecera Cabecera="Ventas Abrigos"></Cabecera>    
  </div>
);

}

export default App;
