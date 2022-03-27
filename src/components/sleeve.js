import * as React from "react";
import { useState, useEffect } from "react";
import { animated } from 'react-spring';
import { StaticImage } from "gatsby-plugin-image";

import "../styles/index.css";

const Sleeve = (props) => {
    const { sleeveSize, scrollPercent, halfSleeveSize, spring, xPosition} = props;

    


    return (
        <animated.div
            id="sleeve"
            style={{
                width: sleeveSize,
                height: sleeveSize,
                scale: spring.sleeveScalePos.to((scale) => scale),
                right: spring.sleeveScalePos.to((_scale, xFactor) => `calc(${xPosition} - (${xFactor} * (${xPosition} + ${halfSleeveSize} - 49.5vw)))`),
            }}
        >
            <div id="sleeve-inner" style={{ transform: `rotateY(${scrollPercent * 180}deg)` }}>

                <div id="sleeve-front">
                    <StaticImage alt="More Info" id="sleeve-front-image" src="../images/sleeve2.jpg" />
                </div>

                <div id="sleeve-back">
                    <h2 id="sleeve-title">The Bone Yard Collective</h2>
                    <p style={{ fontSize: "2vw" }} > Subtext or slogan or something.</p>
                    <p style={{ fontSize: "1.5vw" }}  > Hours </p>
                    <p style={{ fontSize: "2vw" }} > Records and whatever</p>
                </div>

            </div>
        </animated.div>
    )
}

export default Sleeve;
