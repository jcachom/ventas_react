import React from 'react';
import NavBars from './Componentes/NavBar';
import ItemListContainer from './Componentes/ItemListContainer';

function App(){
    return (
   <div>
       <NavBars/>
       <ItemListContainer titulo="Listado de Productos" />
   </div>
    );
}

export default App ;