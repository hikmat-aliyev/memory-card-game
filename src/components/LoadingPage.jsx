import '../styles/LoadingPage.css'

export default function LoadingPage({setGameStarted}) {

    setTimeout(() => {
        setGameStarted(true);
    }, 1500);

    return (
        <div className='loading-gif'>
            <h2>Loading...</h2>
        </div>
    )
}