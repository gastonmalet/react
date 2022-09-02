import React from 'react';
import cart from "./imagenes/carro.png"

const CartWidget = () => {
  return (
    <div className="cart-widget">
      <img src={cart} width="30" alt="Carrito"/> <span className="qty-display">0</span>
    </div>
  );
};

export default CartWidget;
