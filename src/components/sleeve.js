import * as React from "react";
import { useState, useEffect } from "react";
import { animated } from 'react-spring';
import { StaticImage } from "gatsby-plugin-image";

import "../styles/index.css";

const Sleeve = (props) => {
    const { sleeveSize, scrollPercent, halfSleeveSize, spring, xPosition } = props;

    // Font sizes must be relative to sleeve size
    const headingMargin = 0.05;
    const headingSize = 0.15;
    const subHeadingSize = 0.075;
    const paragraphSize = 0.03;
    const socialButtonSize = 0.067;

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

                    <h2
                        id="sleeve-title"
                        style={{
                            fontSize: `calc(${sleeveSize} * ${headingSize})`,
                            marginTop: `calc(${sleeveSize} * ${headingMargin})`,
                            marginBottom: `calc(${sleeveSize} * ${headingMargin})`
                        }}
                    >
                        The Bone Yard Collective
                    </h2>

                    <h3
                        style={{
                            marginTop: 'unset',
                            marginBottom: `calc(${sleeveSize} * ${headingMargin})`,
                            fontSize: `calc(${sleeveSize} * ${subHeadingSize})`
                        }}
                    >
                        Kitsch is king
                    </h3>

                    <p
                        style={{
                            fontSize: `calc(${sleeveSize} * ${paragraphSize})`,
                            marginTop: `unset`,
                            marginBottom: `calc(${sleeveSize} * ${headingMargin})`
                        }}
                    >
                        Here you will find treasures from the past that were built to last. <br />
                        Colourful collectables and retro rarities. Vinyl records, bar memorabilia, homewares, furniture and funky threads.
                    </p>

                    <p
                        style={{
                            textAlign: 'center',
                            margin: 'unset',
                            fontSize: `calc(${sleeveSize} * ${paragraphSize})`
                        }}
                    >
                        Monday & Tuesday <br />
                        CLOSED
                        <br />
                        <br />
                        Wednesday, Thursday, Saturday & Sunday <br />
                        9:00 AM - 3:00 PM
                        <br />
                        <br />
                        Friday <br />
                        9:00 AM - 7:00 PM
                    </p>

                    <div
                        style={{
                            width: '90%',
                            display: 'flex',
                            alignItems:'center',
                            justifyContent: "space-between",
                            marginTop: `calc(${sleeveSize} * ${headingMargin} * 1.5)`,
                        }}
                    >
                        <p style={{ margin: 'unset', fontSize: `calc(${sleeveSize} * ${paragraphSize} * 1.25)` }}>18 Anzac ave Redcliffe</p>

                        <div
                            style={{
                                width: '20%',
                                display: 'flex',
                                justifyContent: "space-between"
                            }}
                        >
                            <div style={{ background: "blue", width: `calc(${sleeveSize} *${socialButtonSize}`, height: `calc(${sleeveSize} *${socialButtonSize}` }}></div>
                            <div style={{ background: "red", width: `calc(${sleeveSize} *${socialButtonSize}`, height: `calc(${sleeveSize} *${socialButtonSize}` }}></div>

                        </div>
                    </div>


                </div>

            </div>
        </animated.div >
    )
}

export default Sleeve;