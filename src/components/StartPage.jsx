
// eslint-disable-next-line react/prop-types
export default function StartPage({setTotalNumber, setLevel}) {

    function handleDifficulty (num) {
        setTotalNumber(num);
        setLevel(true);
    }

    return (
        <div>
            <button onClick={() => handleDifficulty(5)}>Easy</button>
            <button onClick={() => handleDifficulty(8)}>Medium</button>
            <button onClick={() => handleDifficulty(12)}>Hard</button>
        </div>
    )
}