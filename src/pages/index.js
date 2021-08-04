import * as React from "react";
import Colors from "../styles/colors";

import StarWarsText from "../components/starWarsText";

import "../styles/index.css";

const IndexPage = () => {


    return (
        <div
            className={"mainContainer"}
        >
            <h1
                style={{
                    marginLeft: "5vw",
                    color: Colors.offBlack,
                    fontFamily: "Stereofidelic",
                    fontSize: "12.5vw",
                    fontWeight: 200
                }}
            >
                The Boneyard
                <br />
                Collective
            </h1>
            <StarWarsText />
        </div>
    )
}

export default IndexPage
