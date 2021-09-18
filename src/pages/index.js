import * as React from "react";
import { useState, useEffect, useRef } from "react";
import { useSpring, animated, config } from 'react-spring';

import Colors from "../styles/colors";
import Sleeve from "../components/sleeve.js";
import StarWarsText from "../components/starWarsText.js";

import "../styles/index.css";


const CalculatePerspective = (x, y, rect) => [
    -(y - rect.top - rect.height / 2) / 50,
    (x - rect.left - rect.width / 2) / 50,
    1
];

const IndexPage = () => {

    const ref = useRef(null);

    const [sleeveHovered, setSleeveHovered] = useState(false);
    const [sleeveFlipped, setSleeveFlipped] = useState(false);
    //Xskew, Yskew, Scale, Opacity
    const [titleXYS, setTitleXYS] = useState([0, 0, 1, 1]);
    // Xskew, Yskew, Scale, Xposition
    const [sleeveXYS, setSleeveXYS] = useState([0, 0, 1, 0]);
    const [dimSwitch, setDimSwitch] = useState(0);
    const titleSpring = useSpring({ titleXYS, config: config.default });
    const sleeveSpring = useSpring({ sleeveXYS, config: config.default });
    const dimmerSpring = useSpring({ dimSwitch, config: config.default });

    const MouseEnteredSleeve = () => {
        setSleeveHovered(true);

        if (!sleeveFlipped) {
            setSleeveXYS([sleeveXYS[0], sleeveXYS[1], 1.1, 0])
        }
    }

    const MouseMovedSleeve = () => {

    }

    const MouseLeftSleeve = () => {
        setSleeveHovered(false);

        if (!sleeveFlipped) {
            setSleeveXYS([sleeveXYS[0], sleeveXYS[1], 1, 0])
        }
    }

    const OnSleeveClick = () => {
        if (sleeveFlipped) {
            setDimSwitch(0);
            setSleeveXYS([sleeveXYS[0], sleeveXYS[1], 1, 0]);
            setTitleXYS([titleXYS[0], titleXYS[1], titleXYS[2], 1]);
        }
        else {
            setDimSwitch(0.67);
            setSleeveXYS([sleeveXYS[0], sleeveXYS[1], 1.5, 1]);
            setTitleXYS([titleXYS[0], titleXYS[1], titleXYS[2], 0]);
        }
        setSleeveFlipped(!sleeveFlipped)
    }

    return (
        <div
            ref={ref}
            onMouseMove={e => {
                const rect = ref.current.getBoundingClientRect();
                const perspective = CalculatePerspective(e.clientX, e.clientY, rect);
                setTitleXYS([perspective[0], perspective[1], perspective[2], titleXYS[3]]);
                setSleeveXYS([perspective[0], perspective[1], sleeveXYS[2], sleeveXYS[3]])
            }}
            onClick={e => {
                if (sleeveFlipped) {
                    setDimSwitch(0);
                    setSleeveFlipped(false);
                    setSleeveXYS([sleeveXYS[0], sleeveXYS[1], 1, 0]);
                    setTitleXYS([titleXYS[0], titleXYS[1], titleXYS[2], 1]);
                }
            }}
            style={{
                width: "100vw",
                height: "100vh",
                display: "flex",
                position: "absolute",
                flexDirection: "column",
                justifyContent: "center",
                backgroundColor: "rgb(255,71,61)",
            }}
        >

            <animated.h1
                style={{
                    zIndex: 3,
                    marginLeft: "10vw",
                    color: Colors.offWhite,
                    fontFamily: "Stereofidelic",
                    fontSize: "16vw",
                    pointerEvents: "none",
                    fontWeight: 200,
                    opacity: titleSpring.titleXYS.to((x, y, s, o) => o),
                    transform: titleSpring.titleXYS.to((x, y, s) => `perspective(150vw) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`)
                }}
            >
                Bone Yard
                <br />
                Collective
            </animated.h1>

            <Sleeve
                spring={sleeveSpring}
                clicked={sleeveFlipped}
                MouseEnter={MouseEnteredSleeve}
                MouseMove={MouseMovedSleeve}
                MouseLeave={MouseLeftSleeve}
                MouseClick={OnSleeveClick}
            />

            <animated.div
                style={{
                    zIndex: 1,
                    width: "100vw",
                    height: "100vh",
                    position: "absolute",
                    pointerEvents: "none",
                    background: `rgba(0,0,0)`,
                    opacity: dimmerSpring.dimSwitch
                }}
            />

            <StarWarsText />

        </div>
    )
}

export default IndexPage
