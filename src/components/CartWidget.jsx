import React, { useContext } from "react";
import { Link } from "react-router-dom";
import {CartContext} from "./Context";
import { useState } from "react";
import { useEffect } from "react";

const CartWidget = () => {
    const {cart} = useContext(CartContext);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        let total_items = cart.reduce((total, item) => total+=item.cantidad, 0);
        setTotal(total_items);
    }, [cart]);

    return (
        <Link to={"/cart"}>
            <button type="button" className="btn position-relative">
                <span className="material-icons position-absolute">shopping_cart{total}</span>
            </button>
        </Link>
    )
}

export default CartWidget;