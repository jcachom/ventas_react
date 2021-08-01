import React from 'react';
import NavBars from './Componentes/NavBar';
import ItemListContainer from './Componentes/ItemListContainer';

function App(){
    return (
   <div>
       <NavBars/>
       <ItemListContainer titulo="item ListContainer" />
   </div>
    );
}

export default App ;