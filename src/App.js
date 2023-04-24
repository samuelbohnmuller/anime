import { useEffect, useState } from 'react';
import './App.css';
import Botao from './Componentes/Botao/Botao';
import EspacoAnime from './Componentes/EspacoAnime/EspacoAnime';
import Input from "./Componentes/Input/Input"

function App() {

  const [animeApi, setAnimeApi] = useState("naruto") //Setar o nome do anime.
  const [botaoClicado, setBotaoClicado] = useState(false) //Chama a API quando clicar no botão.
  const [API, setAPI] = useState() //Recebe os dados da API.

  useEffect(() => {
    if(botaoClicado){
      fetch(`https://kitsu.io/api/edge/anime?filter[text]=${animeApi}`) //Requisição GET para API.
        .then(resposta => resposta.json())
        .then(resposta => {
        setAPI(resposta) //Seto a resposta no state.
    })
    }
  }, [botaoClicado, animeApi]) //Toda vez que for requisitada a API, atualizará o state.

  return (
    <div>
      <Input 
        animeApi={animeApi}
        setAnimeApi={setAnimeApi}
      />
      <Botao
        setBotaoClicado={setBotaoClicado}
      />
      <EspacoAnime 
        API={API}
      />
    </div>
  );
}

export default App;
