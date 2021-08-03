import * as React from "react";
import { useState, useEffect } from "react";
import "../styles/styles.css";
import Colors from "../styles/colors";
import "./starWarsText.css";
import "@fontsource/oranienbaum";

const StarWarsText = () => {

    const [arr, setArr] = useState([]);

    const genres =
        `Pagan metal
Paisley Underground
Peace punk
Pinoy rock
Pirate metal
Pop punk
Pop rock
Pornogrind
Post-britpop
Post-grunge`


    useEffect(() => {
        setArr(genres.split("\n"))
    }, []);

    return (
        <div
            style={{
                top: "100vh",
                width: "100vw",
                height: "100vh",
                display: 'flex',
                position: "absolute",
                flexDirection: "column",
            }}
        >
            {
                arr.map((genre, i) =>
                    <StarWarsLine genre={genre} position={i} />
                )
            }

        </div>
    )
}

class StarWarsLine extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let offset = this.props.position;
        return (
            <p
                className={"textLine"}
                style={{
                    marginTop:"3vh",
                    marginLeft: "-5vw",
                    position: "absolute",
                    animation: "scrollup linear 10s infinite",
                    MozAnimation: "scrollup linear 10s infinite",
                    WebkitAnimation: "scrollup linear 10s infinite",
                    animationDelay: `${offset}s`,
                    fontFamily: "Oranienbaum",
                    fontWeight: "bold",
                    textAlign: "right",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    fontSize: "5vw",
                }}
            >
                {this.props.genre}
            </ p>
        );
    }
}

export default StarWarsText
