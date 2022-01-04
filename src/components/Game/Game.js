import { useState, useEffect } from "react"
import "./Game.css"

const origin = [
  {
    text: "Super Mario Bros",
    sub: "Franquia de Video Game"
  },
  {
    text: "Roberto Carlos",
    sub: "Cantor"
  },
  {
    text: "Percy Jackson",
    sub: "Franquia de Livros infanto-juvenil"
  },
  {
    text: "Pão de Açucar",
    sub: "Ponto Turistico (RJ)"
  },
  {
    text: "Cerveja",
    sub: "Bebida Alcólica"
  },
  {
    text: "Candy Crush",
    sub: "Jogo Mobile dos docinhos"
  },
  {
    text: "Grêmio",
    sub: "Time de Futebol"
  },
  {
    text: "Call of Duty",
    sub: "Franquia de jogo de tiro"
  },
  {
    text: "Churrasco",
    sub: "Auto explicativo"
  },
  {
    text: "Mountain Bike",
    sub: "Modalidade de ciclismo"
  },
  {
    text: "AirFrier",
    sub: "Eletrodoméstico"
  },
  {
    text: "Black Sabbath",
    sub: "Banda Musical"
  },
  {
    text: "Carnaval",
    sub: "Evento/Feriado/Festa Nacional"
  },
  {
    text: "Sonho de Valsa",
    sub: "Bombom (chocolate)"
  },
  {
    text: "Saci-Pererê",
    sub: "Personagem do Folclore Brasileiro"
  },
  {
    text: "Todo mundo odeia o Chris",
    sub: "Série de TV"
  },
  {
    text: "Chaves",
    sub: "Série de TV"
  },
  {
    text: "Ursinho Pooh",
    sub: "Personagem da franquia Ursinho Pooh da Disney"
  },
  {
    text: "Chiquititas",
    sub: "Série de Televisão"
  },
  {
    text: "Bananas de Pijamas",
    sub: "Série de Televisão Infantil"
  },
  {
    text: "Bolinha de Gude",
    sub: "Brincadeira de criança (do século 17)"
  },
  {
    text: "Teletubbies",
    sub: "Série de Televisão Infantil"
  },
  {
    text: "Goku",
    sub: "me recuso a explicar quem é Goku"
  },
  {
    text: "São Paulo",
    sub: "Estado situado no Brasil"
  },
  {
    text: "Freud",
    sub: "Médico neurologista e psiquiatra criador da psicanálise"
  },
  {
    text: "Paralelepípedo",
    sub: "Normalmente uma pedra de um formato específico que fica na rua. Precede o pavimento que se vê na rua."
  },
  {
    text: "TV Globinho",
    sub: "Programa de TV (RIP)"
  },
  {
    text: "Copa do Mundo",
    sub: "Evento Mundial de Futebol que ocorre a cada 4 anos"
  },
  {
    text: "Rick & Morty",
    sub: "Série de TV"
  },
  {
    text: "Cristiano Ronaldo (CR7)",
    sub: "Jogador de futebol Português"
  },
  {
    text: "Monte Fuji",
    sub: "Montanha situada no Japão"
  },
  {
    text: "Dexter",
    sub: "Série de TV (eu interpretei isso tanto a série infantil quanto a série do serial killer)"
  },
  {
    text: "Darth Vader",
    sub: "Personagem da série Star Wars, pai de Luke Skywalker e avô do Kylo Ren"
  },
  {
    text: "Olaf",
    sub: "Personagem da Franquia Frozen, da Disney"
  },
]

const Game = () => {
  const [originalList, setOriginalList] = useState(origin)
  const [actualList, setActualList] = useState([])
  const [contador, setContador] = useState(0);

  useEffect(() => {
    setActualList(shuffleArray(originalList));
  }, [])

  useEffect(() => {
    if(contador + 1 > actualList.length) {
      setContador(0);
    }
  }, [actualList])

  const wrong = () => {
    if(contador < actualList.length - 1)
      setContador(contador + 1)
    else
      setContador(0);
  }

  const right = () => {
    let teste = [...actualList];

    teste.splice(contador, 1);

    setActualList(teste);
  }

  const refresh = () => {
    setContador(0);
    setActualList(shuffleArray(originalList));
  }

  const shuffleArray = (array) => {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
  }

  return (
    <div className="game-container">
      <div className="game-content">
        < p className="counter">{`${contador + 1} de ${actualList?.length}`}</p>
        < p className="text">{actualList[contador]?.text}</p>
        < p className="subtext">{actualList[contador]?.sub}</p>
        <div className="button-container">
          <button className="button red" onClick={() => wrong()}>
            Errou/Passar
          </button>
          <button className="button green" onClick={() => right()}>
            Acertou!
          </button>
        </div>
        <button className="button orange" onClick={() => refresh()}>
          Proxima Fase
        </button>
      </div>
    </div>
  )
}

export default Game
