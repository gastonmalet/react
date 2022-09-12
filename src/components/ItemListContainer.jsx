import React, { useEffect, useState } from "react";
import ItemList from "./ItemList";
import boligrafo from "./imagenes/boligrafo.jpg"
import resma from "./imagenes/resmaa.jpg"

const ItemListContainer = () => {


    const [items, setItems] = useState ([]);
    useEffect(() => {

        const productos = [
            {
                id: 1,
                nombre: 'Boligrafos',
                precio: 640,
                imagen: {boligrafo},
            },
            {
                id: 2,
                nombre: 'Resma Ledesma A4',
                precio: 677,
                imagen: {resma},
            },
            {
                id: 3,
                nombre: 'Cuaderno Avon',
                precio: 312,
                imagen: 'imagenes/cuadern.jpg'
            },
    
        ];

        const getProductos = new Promise((resolve) => {
            setTimeout(() => {
                resolve(productos);
            }, 2000);
        });

        getProductos.then((respuesta) => {
            setItems(respuesta);
        });
    }, []);

    return (
        <div className="container">
            <ItemList items={items} />
        </div>
    )
}



export default ItemListContainer;