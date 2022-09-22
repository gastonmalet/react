import React from "react";
import { Link } from "react-router-dom";

const Item = ({item}) => {
    return (
        <div className="card border-0">
            <Link to={"/item/" + item.id} className="text-decoration-none">
                <img src={"imagenes/" + item.imagen} className="card-img-top" alt={item.nombre} />
                <div className="card-body">
                    <h5 className="card-title text-center"><b>{item.nombre}</b></h5>
                </div>
            </Link>
        </div>
    )
}

export default Item;