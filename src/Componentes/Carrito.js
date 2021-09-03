import React from "react";
import { useContext, useState, useEffect } from "react";
import CartContext from "../context/CartContext";
import "bootstrap/dist/css/bootstrap.min.css";
import { useHistory } from "react-router-dom";

import { getFirestore } from "../firebase";
import PreLoader from "./preLoader";

const Carrito = () => {
  const { cartItems, removeItem, removeAll } = useContext(CartContext);

  const altura = { height: "100px" };
  const divTable = { border: "1px solid red", width: "60%" };
  const divCompra = {
    border: "1px solid red",
    width: "60%",
    backgroundColor: "orange",
  };

  const colorP = { "font-weight": "bold" };

  const history = useHistory();
  const ruta_ItemList = `${process.env.PUBLIC_URL}/`;

  const onVerItemList = () => {
    history.push(ruta_ItemList);
  };

  const removeCarrito = (e, sku) => {
    removeItem(sku);
  };

  const removeAllCarrito = () => {
    removeAll();
  };

  const [vSumTotal, setVSumTotal] = useState(0);

  const [isProcesoCompra, setisProcesoCompra] = useState("inicio");

  useEffect(() => {
    const handlesumar = () => {
      if (cartItems.length > 0) {
        const sum = cartItems
          .map((datum) => datum.cant_pedido * datum.precio)
          .reduce((a, b) => a + b);
        setVSumTotal(sum);
      } else {
        setVSumTotal(0);
      }
    };
    handlesumar();
  });

  const handleFinishPurchase = () => {
    setisProcesoCompra("en_proceso");

    const listItemCompra = cartItems.map((item) => ({
      id: item.id,
      sku: item.sku,
      cant_pedido: item.cant_pedido,
      stock: item.stock,
    }));

    const newItems = cartItems.map((item) => ({
      id: item.id,
      sku: item.sku,
      title: item.producto,
      price: item.precio,
      cantidad: item.cant_pedido,
    }));

    let newDate = new Date();
    let date = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();

    let hora = newDate.getHours();
    let minutos = newDate.getMinutes();

    let fechaf =
      date.toString().padStart(2, "0") +
      "/" +
      month.toString().padStart(2, "0") +
      "/" +
      year;
    let horaf =
      hora.toString().padStart(2, "0") +
      ":" +
      minutos.toString().padStart(2, "0") +
      ":00";

    const newOrder = {
      fecha: fechaf,
      hora: horaf,
      buyer: {
        name: "Jose Cacho",
        phone: "+51942781426",
        email: "rodckame@hotmail.com",
      },
      items: newItems,
      total: vSumTotal,
    };

    console.log(newOrder);

    const db = getFirestore();
    const orders = db.collection("orders");
    const batch = db.batch();

    orders
      .add(newOrder)
      .then((response) => {
        

        console.log(listItemCompra);

        let newStock = 0;

        listItemCompra.forEach((datun) => {
          console.log(datun);
          
          const docRef = db.collection("items").doc(datun.id);
         
          newStock = datun.stock - datun.cant_pedido;
          batch.update(docRef, { stock: newStock });
        });
        batch.commit();

        removeAllCarrito();
        setisProcesoCompra("fin");
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      {isProcesoCompra === "fin" && (
        <div class="container">
          <p></p>
          <div style={divCompra}>
            La compra fue satisfactoria. Gracias por su preferencia...!
          </div>

          <div>
            <button className="btn btn-primary" onClick={onVerItemList}>
              Más productos
            </button>
          </div>
        </div>
      )}

      {isProcesoCompra === "en_proceso" && (
        <PreLoader mensaje="Espere un momento.Estamos procesando su compra."></PreLoader>
      )}

      {isProcesoCompra === "inicio" && cartItems.length === 0 && (
        <div class="container" style={divTable}>
          <span style={colorP}>Items no adicionados</span>{" "}
        </div>
      )}

      {isProcesoCompra === "inicio" && cartItems.length > 0 && (
        <div style={altura}>
          Productos seleccionados:
          {cartItems.map((data, key) => {
            return (
              <div>
                <div class="container" style={divTable}>
                  <div class="row">
                    <div class="col-sm">
                      <span style={colorP}>SKU: </span>
                      {data.sku}
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-sm">
                      <span style={colorP}>Producto:</span>
                      {data.producto}
                    </div>

                    <div class="col-sm">
                      <span style={colorP}>Cant. Pedido :</span>
                      {data.cant_pedido}
                      {"     "} <span style={colorP}>Precio :</span>
                      {data.precio}
                      {"     "}
                      <p>
                        <span style={colorP}>SubTotal :</span>
                        {data.precio * data.cant_pedido}
                      </p>
                    </div>
                    <div class="col-sm">
                      <button
                        className="btn btn-danger"
                        onClick={(ev) => removeCarrito(ev, data.sku)}
                      >
                        Remover Item
                      </button>
                    </div>
                  </div>
                </div>
                <p></p>
              </div>
            );
          })}
          <div class="container" style={divTable}>
            <span style={colorP}>Total a pagar :</span> {vSumTotal}
            <div>
              <button className="btn btn-primary" onClick={onVerItemList}>
                Más productos
              </button>
              {"     "}
              <button
                className="btn btn-success"
                onClick={handleFinishPurchase}
              >
                Finalizar Compra
              </button>

              <p></p>
            </div>
            <div></div>
          </div>
        </div>
      )}
    </>
  );
};

export default Carrito;
