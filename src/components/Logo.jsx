import Logo from '../assets/logo.png'
import '../styles/Logo.css'

// eslint-disable-next-line react/prop-types
export default function SetLogo({setLevel, setGameStarted}) {

    function logoFunction() {
        setLevel(false);
        setGameStarted(false);
    }

    return(
        <div>
             <img className='logo' src={Logo} alt="rick-and-morty-logo" onClick={logoFunction}/>
        </div>
    )
}