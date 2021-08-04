import * as React from "react";
import { useState, useEffect } from "react";
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
                WebkitPerspective:"100vh"
            }}
        >
            {
                arr.map((genre, i) =>
                    <StarWarsLine key={i} genre={genre} position={i} />
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
                style={{ animationDelay: `${offset}s`}}
            >
                {this.props.genre}
            </ p>
        );
    }
}

export default StarWarsText
