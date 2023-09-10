import { useRef, useState } from "react";
import Soundtrack from "../assets/soundtrack.mp3"
import '../styles/Audio.css' 

export default function Audio () {
    const audioRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);

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
            <button className="audio-button" onClick={toggleAudio}>
                {isPlaying ? 'Play' : 'Pause'}
            </button>
        </div>
    );
}
