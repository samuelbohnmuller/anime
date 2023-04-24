import React from "react";
import "./Input.css"

export default function Input ({setAnimeApi}) {
    return(
        <div>
            <h2 className="movimentaTexto">Pesquise seu anime:</h2>
            <div>
                <input className="input" onChange={elemento => setAnimeApi(elemento.target.value)}/> {/*Toda vez que tiver mudança no input, o valor que foi digitado seta no stete. */}
            </div>
        </div>
    );
}