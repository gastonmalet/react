import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import Products from "./Products";
import ItemList from "./ItemList";

const ItemListContainer = ( { saludo }) => {
    const {id} = useParams();
    const [items, setItems] = useState([]);

    useEffect(() => {
        const getProductos = new Promise((resolve) => {
            setTimeout(() => {
                let productos = (id) ? Products.filter(producto => producto.categoria === id) : Products;
                resolve((productos.length > 0) ? productos : Products);
            }, 500);
        });

        getProductos.then((respuesta) => {
            setItems(respuesta);
        });
    }, [id]);

    return (
        <div className="container-fluid">
            <Header />
            <div className="container">
            <h3 style={{ textAlign: 'center' }}> {saludo}</h3>
                <ItemList items={items} />
            </div>
            <Footer />    
        </div>
    )
}

export default ItemListContainer;