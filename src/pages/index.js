import * as React from "react";
import { useState, useEffect } from "react";
import { useSpring, animated, config } from 'react-spring';

import Colors from "../styles/colors";
import Sleeve from "../components/sleeve.js";
import StarWarsText from "../components/starWarsText.js";

import "../styles/index.css";

const IndexPage = () => {

    const [dimSwitch, setDimSwitch] = useState(0);
    const [scrollPercent, setScrollPercent] = useState(0);
    const [sleeveScalePos, setSleeveScalePos] = useState([1, 0]);

    const sleeveSpring = useSpring({ sleeveScalePos, config: config.default });
    const dimmerSpring = useSpring({ dimSwitch, config: config.default });

    useEffect(() => {
        window.addEventListener('scroll', onScroll);
        return () => {
            window.removeEventListener('scroll', onScroll);
        }
    });

    const onScroll = () => {
        const percent = window.pageYOffset / window.innerHeight;

        setScrollPercent(percent);
        setDimSwitch(percent * 0.67);
        setSleeveScalePos([1 + (percent * 0.5), percent]);
    }

    return (
        <div
            aria-hidden="true"
            style={{
                width: "100vw",
                height: "200vh",
                overflowX: "hidden",
                position: 'absolute',
                backgroundColor: "rgb(255,71,61)"
            }}
        >

            <div
                style={{
                    height: "100vh",
                    display: 'flex',
                    pointerEvents: "none",
                    flexDirection: 'column',
                    justifyContent: 'center'
                }}
            >
                <h1
                    style={{
                        zIndex: 3,
                        fontWeight: 200,
                        fontSize: "20vw",
                        marginLeft: "10vw",
                        pointerEvents: "auto",
                        color: Colors.offWhite,
                        fontFamily: "Stereofidelic",
                    }}
                >
                    Bone Yard
                    <br />
                    Collective
                </h1>
            </div>

            <Sleeve
                spring={sleeveSpring}
                scrollPercent={scrollPercent}
            />

            {/* Background dim*/}
            <animated.div
                style={{
                    top: 0,
                    zIndex: 1,
                    width: "100vw",
                    height: "100vh",
                    position: "fixed",
                    pointerEvents: "none",
                    background: `rgba(0,0,0)`,
                    opacity: dimmerSpring.dimSwitch
                }}
            />

            <StarWarsText
                spring={sleeveSpring}
            />

        </div>
    )
}

export default IndexPage
