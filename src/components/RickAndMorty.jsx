import {useState, useEffect} from "react";
import '../styles/RickAndMorty.css'

export default function RickAndMorty() {
    const [rickAndMorty, setRickAndMorty] = useState(null);
    let charactersArray = [];
    const [selectedCharacters, setSelectedCharacters] = useState(0);
    const [selectedCharsArray, setSelectedCharsArray] = useState([]);
    const [unselectedCharsArray, setUnselectedCharsArray] = useState([]);

    useEffect(() => {
        fetch('https://rickandmortyapi.com/api/character')
            .then(response => response.json())
            .then(json =>  setRickAndMorty(json.results));
    }, [])

    const numberOfCharacters = 5;

    if(rickAndMorty) {
       charactersArray = rickAndMorty.slice(0, numberOfCharacters);
    }

    let unselectedCharacters = numberOfCharacters - selectedCharacters;

    function assignCharactersToArrays (updatedArray) {
        const selected = updatedArray.filter(item => item.status === 'Selected');
        const unselected = updatedArray.filter(item => item.status !== 'Selected');
        setSelectedCharsArray(selected);
        setUnselectedCharsArray(unselected);
    }

    console.log(selectedCharsArray);
    console.log(unselectedCharsArray);

    function changeStatusOfCharacter(index) {
        const updatedArray = [...charactersArray];
        updatedArray[index].status = 'Selected';
        setSelectedCharacters(selectedCharacters + 1);  
        assignCharactersToArrays(updatedArray);
        console.log(updatedArray);
    }


    return (
        <div>
            {rickAndMorty && (
                <div className="characters-container">
                    {charactersArray.map((item, index) => (
                        <div className="character-container" key={index} onClick={() => changeStatusOfCharacter(index)}>
                             <img src={item.image} alt={item.name} />
                             <h3>{item.name}</h3>
                        </div>
                        
                    ))}
                </div>
         )}
        </div>    
    )
}