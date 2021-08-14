import React from 'react';
import NavBars from './Componentes/NavBar';
import ItemListContainer from './Componentes/ItemListContainer';
import ItemList from './Componentes/ItemList';

function App(){
    return (
   <div>
       <NavBars/>     
       <ItemList></ItemList>
   </div>
    );
}

  // <ItemListContainer titulo="Listado de Productos" />

export default App ;