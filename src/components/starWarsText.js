import * as React from "react";
import "./../styles/index.css";
import "@fontsource/oranienbaum";

const StarWarsText = (props) => {

    const genres = ["Rock", "Punk", "Grunge", "Hip Hop", "Blues", "Jazz", "Soul", "Metal", "Funk", "Grime"];


    return (
        <div id="star-wars"
            style={{
                // top: "calc(100vh - " + (props.spring.sleeveScalePos.animation.to[1] * 25) + "vh)",

            }}
        >
            {
                genres.map((genre, i) =>
                    <p key={i} className={"star-wars-text"} style={{ animationDelay: `${i}s` }}>{genre}</ p>
                )
            }
        </div>
    )
}

export default StarWarsText