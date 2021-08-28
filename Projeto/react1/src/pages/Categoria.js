import React from "react";
import { useParams } from "react-router-dom";

function Categoria() {

    let {cat} = useParams();
    
    return (
        <div>
            <h4>Página Categoria {cat.charAt(0).toUpperCase()+ cat.slice(1)}</h4>
            Categoria : {cat}
        </div>
    );
}

export default Categoria;