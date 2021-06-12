import React, {useEffect,useState} from 'react'
import ReactPlayer from 'react-player'

export const Commercial = () => {
    const [play, setPlay] = useState(true);
    
    useEffect(() => {
        setTimeout(() => {
            setPlay(false)
        }, 1000);
    }, [])
    return (
        <div>
            <ReactPlayer muted={play} playing={true}  url='https://www.youtube.com/watch?v=hxCKMakV9vU'/>
         </div>
    )
}
