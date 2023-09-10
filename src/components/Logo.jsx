import Logo from '../assets/logo.png'
import '../styles/Logo.css'

export default function SetLogo({setLevel, setGameStarted}) {

    function logoFunction() {
        setLevel(false);
        setGameStarted(false);
    }

    return(
        <img className='logo' src={Logo} alt="rick-and-morty-logo" onClick={logoFunction} />
    )
}