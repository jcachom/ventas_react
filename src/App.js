import React from 'react';
import NavBars from './Componentes/NavBar';
import ItemListContainer from './Componentes/ItemListContainer';
import ItemList from './Componentes/ItemList';
import ItemDetailContainer from './Componentes/ItemDetailContainer';
import ItemDetail from './Componentes/ItemDetail'

function App(){
    return (
   <div>
       <NavBars/>  
       <ItemDetailContainer sku={'007'} mostrar={'1'}></ItemDetailContainer>
       <ItemList></ItemList>

     
  
   </div>
    );
}

  // <ItemListContainer titulo="Listado de Productos" />

export default App ;