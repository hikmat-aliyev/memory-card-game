import {useState, useEffect} from "react";
import '../styles/RickAndMorty.css';
import CardBackground from '../assets/rickAndMortyCard.jpg';
import VanillaTilt from 'vanilla-tilt';
import FlipSound from '../assets/flipcard.mp3'
import { useRef } from "react";

// eslint-disable-next-line react/prop-types
export default function RickAndMorty({totalNumber, allCharsArray, setGameStatus, setWin}) {

    const [totalCharsNum, setTotalNumber] = useState(totalNumber);
    const [totalArray, setAllCharsArray] = useState(allCharsArray);
    const [selectedCharsNum, setSelectedCharsNum] = useState(0);
    const flipSound = useRef(null);

    const playFlipSound = () => {
        if (flipSound.current) {
            flipSound.current.currentTime = 0;
            flipSound.current.play();
            setTimeout(() => {
                flipSound.current.currentTime = 0;
                flipSound.current.play();
            }, 1000);
        }
    }

    function changeChars(item) {
        const cardContainers = document.querySelectorAll('.character-container');
        if(item.status !== 'Selected') {
            setSelectedCharsNum(selectedCharsNum + 1);
            item.status = 'Selected';
            //shuffle only if we haven't won already
            if(selectedCharsNum !== totalCharsNum){
                cardContainers .forEach(container => {
                    container.classList.add('is-flipped');
                    setTimeout(() => {
                        container.classList.add('flipped-back');
                        container.classList.remove('is-flipped');
                        container.classList.remove('flipped-back');
                    }, 1000);
                    setTimeout(() => {
                        shuffleArray(); 
                    }, 500);
                  });   
                }
        }else if(item.status === 'Selected'){
           setGameStatus(true);
           setWin(false);
        }
    }

    if(selectedCharsNum === totalCharsNum){
        setGameStatus(true);
        setWin(true);
    }

    function shuffleArray() {
        const newArray = [...totalArray];
        for (let i = newArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1)); 
            [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
        }
        setAllCharsArray(newArray);
    }

    useEffect(() =>{
        VanillaTilt.init(document.querySelectorAll(".card-face-front"), {
            max: 15,
            speed: 300,
            glare: true,
            'max-glare': 0.50
        });
    })

    return (
        <div className="rick-and-morty-container">
            {totalArray && (
                <div className="characters-container">
                    {totalArray.map((item, index) => (
                        <div className="character-container" key={index}>
                            <div className="card-face card-face-front" onClick={playFlipSound}>
                                <img className="card-images" src={item.image} alt={item.name} onClick={() => changeChars(item)}/>
                                <h3>{item.name}</h3> 
                            </div>
                            <div className="card-face card-face-back">   
                                <img src= {CardBackground} alt="" />
                            </div>
                        </div>
                    ))}
                </div>
             )}
             <audio controls ref={flipSound} src={FlipSound} />
        </div>   
    )
}