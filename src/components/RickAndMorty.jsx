
import {useState, useEffect} from "react";
import '../styles/RickAndMorty.css'

export default function RickAndMorty() {
    const totalCharsNum = 5;
   
    const [allCharsArray, setAllCharsArray] = useState(null);
    const [selectedCharsNum, setSelectedCharsNum] = useState(0);
    const [shownUnselectedArray, setShownUnselectedArray] = useState(null);
    const [shownSelectedArray, setShownSelectedArray] = useState(null);
    const [selected, setSelected] = useState(false);

    useEffect(() => {
        fetch('https://rickandmortyapi.com/api/character')
            .then(response => response.json())
            .then(json => {
                const resultArray = [...json.results];
                filterAllCharsArray(resultArray);
                filterShownUnselectedArray(resultArray);
            });
    }, [])
    
    function filterAllCharsArray(array) {
        array.splice(5, 1);
        array.splice(8, 4);
        array.splice(10, 2);
        array.splice(11, 1);
        array.splice(totalCharsNum)
        array.map((item, index) => {
            item.status = 'Unselected'
            item.id = index;
        });
        setAllCharsArray(array);
    }

    function filterShownUnselectedArray() {
        
    }

    function changeStatusOfChars(item) {
        if(item.status !== 'Selected') {
            setSelectedCharsNum(selectedCharsNum + 1);
            item.status = 'Selected';
        }else if(item.status === 'Selected'){
            console.log('game over')
        }
        shuffleArray();
    }

    if(selectedCharsNum === totalCharsNum) console.log('u win')

    function shuffleArray() {
        const newArray = [...allCharsArray]; // Create a copy of the array
        for (let i = newArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1)); // Generate a random index
            console.log(i, j);
            [newArray[i], newArray[j]] = [newArray[j], newArray[i]]; // Swap elements
        }
        setAllCharsArray(newArray);
    }

    return (

        <div>
            {allCharsArray && (
                <div className="characters-container">
                    {allCharsArray.map((item, index) => (
                        <div className="character-container" key={index}>
                             <img src={item.image} alt={item.name} onClick={() => changeStatusOfChars(item)}/>
                             <h3>{item.name}</h3> 
                        </div>
                    ))}
                </div>
             )}

        </div>  
        
    )
}