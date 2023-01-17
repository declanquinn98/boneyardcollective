import * as React from "react";
import { useState, useEffect } from "react";
import "./../styles/index.css";
import "@fontsource/oranienbaum";

const StarWarsText = (props) => {
    const { device } = props;
    const genres = ["Rock", "Punk", "Grunge", "Hip Hop", "Blues", "Jazz", "Soul", "Metal", "Funk", "Grime"];
    // const genres2 = [
    //     "Art Punk",
    //     "Industrial Rock",
    //     "Britpunk",
    //     "Acid Jazz",
    //     "Crossover Thrash",
    //     "Witch House",
    //     "Folk Punk",
    //     "Gothic Rock",
    //     "Aggrotech",
    //     "Hard Rock"
    // ];

    const [fontSize, setFontSize] = useState('25vh');
    const [containerStyle, setContainerStyle] = useState({
        perspective: '100vw',
        WebkitPerspective: '100vw',
    });

    useEffect(() => {
        if (device === 'desktop') {
            setFontSize('25vh');
        } else if (device === 'phone') {
            setFontSize('35vw');
            setContainerStyle({
                perspective: '100vw',
                WebkitPerspective: '100vw',
            });
        } else if (device === 'tablet') {
            setFontSize('25vw');
        }
    }, [device]);


    return (
        <div id="star-wars" style={containerStyle}>
            {
                genres.map((genre, i) =>
                    <p key={i} className={"star-wars-text"} style={{ fontSize: fontSize, animationDelay: `${i * 1.5}s` }}>{genre}</ p>
                )
            }
        </div >
    )
}

export default StarWarsText