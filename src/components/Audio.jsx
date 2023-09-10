import { useRef, useState } from "react";
import Soundtrack from "../assets/soundtrack.mp3"
import '../styles/Audio.css' 
import VolumeOffSVG from '../assets/volume-off.svg'
import VolumeOnSVG from '../assets/volume-on.svg'
import ClickSound from '../assets/click-sound.mp3'


export default function Audio () {
    const audioRef = useRef(null);
    const clickSound = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const playClickSound = () => {
        if (clickSound.current) {
            clickSound.current.currentTime = 0.5;
            clickSound.current.play();
        }
    }

    const toggleAudio = () => {
        if (!isPlaying) {
            audioRef.current.play();
            setIsPlaying(true);
        } else {
            audioRef.current.pause();
            setIsPlaying(false)
        }
    };

    return (
        <div>
            <audio controls ref={audioRef} src={Soundtrack} />
            <audio controls ref={clickSound} src={ClickSound} />
           
            <button className="audio-button" onClick={() => { toggleAudio(); playClickSound(); }}>
                <img src={isPlaying ? VolumeOnSVG : VolumeOffSVG} alt="" />
            </button>
        </div>
    );
}
