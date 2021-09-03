import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ItemCount from "./ItemCount";
 

const ItemDetail = (props) => {
  const colorP = { "font-weight": "bold" };
  const borde = {
    border: "3px solid green",
  };

  return (
    <div style={borde}>
      <div>
        <span style={colorP}>Detalle Producto</span>{" "}
      </div>
      <img src={require(`../img/${props.nombre_img}`).default}></img>
      <div>
        {" "}
        <span style={colorP}>Producto:</span>Sku:{props.sku}{" "}
        <span style={colorP}>Precio:</span> {props.precio}
      </div>
      <div>
        {" "}
        <span style={colorP}>Detalle:</span> {props.tipo}{" "}
      </div>
      <div>
        {" "}
        <span style={colorP}>En Stock:</span> {props.stock}{" "}
      </div>

      <ItemCount
         id ={props.id}
        sku={props.sku}
        cant_inicial="1"
        stock={props.stock}
        producto={props.tipo}
        precio={props.precio}
      ></ItemCount>
    </div>
  );
};

export default ItemDetail;
