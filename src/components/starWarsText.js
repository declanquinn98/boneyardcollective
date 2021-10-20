import * as React from "react";
import { useState, useEffect } from "react";
import "./starWarsText.css";
import "@fontsource/oranienbaum";

const StarWarsText = (props) => {

    const genres = ["Rock", "Punk", "Grunge", "Hip Hop", "Blues", "Jazz", "Soul", "Metal", "Funk", "Grime"];

    if (props.spring.sleeveScalePos.animation.to) {

        return (
            <div
                style={{
                   // top: "calc(100vh - " + (props.spring.sleeveScalePos.animation.to[1] * 25) + "vh)",
                    top: "100vh",
                    left: "-20vw",
                    width: "100vw",
                    height: "100vh",
                    display: 'flex',
                    position: "fixed",
                    flexDirection: "column",
                    WebkitPerspective: "100vh"
                }}
            >
                {
                    genres.map((genre, i) =>
                        <p
                            key={i}
                            className={"textLine"}
                            style={{ animationDelay: `${i}s` }}
                        >
                            {genre}
                        </ p>
                    )
                }
            </div>
        )
    }
    else {

        return (
            <div
                style={{
                    top: "100vh",
                    left: "-20vw",
                    width: "100vw",
                    height: "100vh",
                    display: 'flex',
                    position: "fixed",
                    flexDirection: "column",
                    WebkitPerspective: "100vh"
                }}
            >
                {
                    genres.map((genre, i) =>
                        <p
                            key={i}
                            className={"textLine"}
                            style={{ animationDelay: `${i}s` }}
                        >
                            {genre}
                        </ p>
                    )
                }
            </div>
        )
    }
}

export default StarWarsText
