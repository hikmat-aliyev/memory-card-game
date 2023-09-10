
import {useState, useEffect, useCallback} from "react";
import '../styles/RickAndMorty.css'
import CardBackground from '../assets/rickAndMortyCard.jpg'
import VanillaTilt from 'vanilla-tilt'

// eslint-disable-next-line react/prop-types
export default function RickAndMorty({totalNumber, allCharsArray}) {

    const [totalCharsNum, setTotalNumber] = useState(totalNumber);
    const [totalArray, setAllCharsArray] = useState(allCharsArray);
    const [selectedCharsNum, setSelectedCharsNum] = useState(0);

    function changeChars(item) {
        const cardContainers = document.querySelectorAll('.character-container');
        if(item.status !== 'Selected') {
            setSelectedCharsNum(selectedCharsNum + 1);
            item.status = 'Selected';
        }else if(item.status === 'Selected'){
            console.log('game over')
        }
        setTimeout(() => {
            shuffleArray(); 
        }, 500);
        
        cardContainers .forEach(container => {
            container.classList.add('is-flipped');
            setTimeout(() => {
                container.classList.add('flipped-back');
                container.classList.remove('is-flipped');
                container.classList.remove('flipped-back');
            }, 1000);
          });
    }

    if(selectedCharsNum === totalCharsNum) console.log('u win')

    function shuffleArray() {
        const newArray = [...totalArray]; // Create a copy of the array
        for (let i = newArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1)); // Generate a random index
            console.log(i, j);
            [newArray[i], newArray[j]] = [newArray[j], newArray[i]]; // Swap elements
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
                            <div className="card-face card-face-front">
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
        </div>   
    )
}