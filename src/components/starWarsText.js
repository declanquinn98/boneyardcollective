import * as React from "react";
import "./../styles/index.css";
import "@fontsource/oranienbaum";

const StarWarsText = (props) => {

    const genres = ["Rock", "Punk", "Grunge", "Hip Hop", "Blues", "Jazz", "Soul", "Metal", "Funk", "Grime"];
    const genres2 = [
        "Art Punk",
        "Industrial Rock",
        "Britpunk",
        "Acid Jazz",
        "Crossover Thrash",
        "Witch House",
        "Folk Punk",
        "Gothic Rock",
        "Aggrotech",
        "Hard Rock"
    ];


    return (
        <div id="star-wars">
            {
                genres.map((genre, i) =>
                    <p key={i} className={"star-wars-text"} style={{ animationDelay: `${i * 1.5}s` }}>{genre}</ p>
                )
            }
        </div >
    )
}

export default StarWarsText