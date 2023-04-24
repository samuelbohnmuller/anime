import React from "react";
import "./Botao.css"

export default function Botao({setBotaoClicado})  {

    function buscaAnime(){
        setBotaoClicado(true)
      }

    return (
        <div>
            <button onClick={buscaAnime} className="botao">Procurar</button>
        </div>
    )
}