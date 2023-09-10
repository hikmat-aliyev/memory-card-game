import { useState, useEffect } from 'react'
import './App.css'
import RickAndMorty from './components/RickAndMorty'
import StartPage from './components/StartPage'
import LoadingPage from './components/LoadingPage'
import SetLogo from './components/Logo'
import Audio from './components/Audio'
import GameStatus from './components/GameStatus'

function App() {

  const [totalNumber, setTotalNumber] = useState(null);
  const [levelSelected, setLevel] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);
  const [allCharsArray, setAllCharsArray] = useState(null);
  const [gameStatus, setGameStatus] = useState(false);
  const [win, setWin] = useState(false);

  function filterAllCharsArray(array) {
    array.splice(5, 1);
    array.splice(8, 4);
    array.splice(10, 2);
    array.splice(11, 1);
    array.splice(totalNumber);
    array.map((item, index) => {
        item.status = 'Unselected'
        item.id = index;
    });
    if(array[11]) array[11].name = 'Ants Johnson'
    setAllCharsArray(array);
}
  
  useEffect(() => {
    if(totalNumber !== null) {
      fetch('https://rickandmortyapi.com/api/character')
        .then(response => response.json())
        .then(json => json.results)
        .then(totalArray => filterAllCharsArray(totalArray));
    }
    }, [totalNumber, gameStatus, gameStarted])



  return (
    <> 
      {gameStatus && <GameStatus setGameStarted={setGameStarted} setGameStatus={setGameStatus} win={win}/>}
      {gameStarted && < SetLogo setLevel={setLevel} setGameStarted={setGameStarted}/>} 
      {!levelSelected && < StartPage  setTotalNumber={setTotalNumber} setLevel={setLevel}/>}
      {(!gameStarted && levelSelected) ? <LoadingPage setGameStarted={setGameStarted}/> : null}
      {gameStarted && <RickAndMorty totalNumber={totalNumber} allCharsArray={allCharsArray} 
      setGameStatus={setGameStatus} setWin={setWin} />}
      <Audio />
    </>
  )
}

export default App
