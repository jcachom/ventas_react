import React, { useContext } from "react";
import Componente2 from "./Componente2";
import { ThemeContext } from "../context/ThemeContext";

const Componente1 = () => {
  return (
    <div>
      Componente1
      <Componente2></Componente2>
    </div>
  );
};

export default Componente1;
