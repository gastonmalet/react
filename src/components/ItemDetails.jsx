import React, { useContext, useState } from "react";
import ItemCount from "./ItemCount";
import {CartContext} from "./Context";

const ItemDetails = ({item}) => {
    const {addItem} = useContext(CartContext);
    const [counter, setCounter] = useState(0);
    const onAdd = (item, counter) => {
        setCounter(counter);
        addItem(item, counter);
    }

    return (
        <div className="row">
            <div className="col-md-4 offset-md-4 text-center">
                <img src={"../imagenes/" + item.imagen} className="img-fluid" alt={item.nombre} />
                <h1>{item.nombre}</h1>
                <p><b>${item.precio}</b></p>
                <p>{item.descripcion}</p>
                <ItemCount initial={1} stock={item.stock} onAdd={onAdd} counter={counter} setCounter={setCounter} item={item} />
            </div>
        </div>
    )
}

export default ItemDetails;