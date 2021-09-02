import React from "react";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useHistory } from "react-router-dom";

import { useContext } from "react";
import CartContext from "../context/CartContext";

const foto_1 = "producto_6.png";

const ItemCount = (props) => {
  const history = useHistory();
  const cart = `${process.env.PUBLIC_URL}/Carrito`;

  const { addToCart, cartItems, removeItem } = useContext(CartContext);

  const [visible, setVisible] = useState(true);

  const [cant_pedido, setcant_pedido] = useState(
    parseInt(props.cant_inicial, 10)
  );

  const onAdicPedido = () => {
    if (cant_pedido + 1 <= parseInt(props.stock)) {
      setcant_pedido(cant_pedido + 1);
    }
  };

  const onDisPedido = () => {
    if (cant_pedido - 1 > 0) {
      setcant_pedido(cant_pedido - 1);
    }
  };

  const addCarrito = () => {
    const aux = cartItems.find((x) => x.sku === props.sku);

    if (!aux) {
      addToCart({
        sku: props.sku,
        cant_pedido: cant_pedido,
        producto: props.producto,
        precio: props.precio,
      });
    } else {
      removeItem(props.sku);

      addToCart({
        sku: props.sku,
        cant_pedido: aux.cant_pedido + cant_pedido,
        producto: props.producto,
        precio: props.precio,
      });
    }

    setVisible(false);
  };

  const onVerCarrito = () => {
    history.push(cart);
  };

  const colorAdic = { color: "green" };
  let styleDefault = { display: "inline", width: "60px" };
  let styleVista = { display: "inline", width: "60px" };
  let styleCart = { display: "none" };
  if (!visible) styleDefault.display = "none";
  if (!visible) styleCart.display = "inline";

  const colorP = { "font-weight": "bold" };

  return (
    <div>
      <div className="form-inline">
        <button onClick={onDisPedido} className="btn btn-danger">
          -
        </button>
        <input
          type="number"
          key="cant_ped"
          className="form-control-sm"
          value={cant_pedido}
        />
        <button onClick={onAdicPedido} className="btn btn-danger">
          +
        </button>
      </div>

      <div style={styleCart}>
        <span style={colorAdic}>Producto adicionado</span>{" "}
      </div>

      <div>
        <div style={styleDefault}>
          <button className="btn btn-primary" onClick={addCarrito}>
            {" "}
            Agregar carrito
          </button>
        </div>
        <div style={styleVista}>
          <button className="btn btn-warning" onClick={onVerCarrito}>
            Ir al carrito
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemCount;
