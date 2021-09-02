import React, { useState } from "react";
import Componente1 from "./Componentes/Componente1";
import Router from "./Componentes/Router";
import CartState from "./context/CartState";

const App = () => {
  /*
    const [isDarkMode, setisDarkMode] = useState('yes')
   const [cart, setCart] = useState([])
*/

  return (
    <div>
      <CartState>
        <Router></Router>
      </CartState>
    </div>
  );
};

export default App;
