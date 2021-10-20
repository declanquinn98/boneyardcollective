import * as React from "react";
import Colors from "../styles/colors";
import { animated } from 'react-spring';
import { StaticImage } from "gatsby-plugin-image";

import "../styles/index.css";

const Sleeve = (props) => {

    return (
        <animated.div
            style={{
                zIndex: 2,
                width: "30vw",
                height: "30vw",
                position: "fixed",
                top: "calc(50vh - 15vw)",
                perspective: "100vw",
                willChange: "transform",
                transition: "box-shadow 0.5s",
                scale: props.spring.sleeveScalePos.to((s) => s),
                transform: "translateZ(0)",

                /*
                wtf lol 
                30/15vw based on actual width - subject to change
                */
                right: props.spring.sleeveScalePos.to((s, xFactor) => `
                calc(
                        (
                            33vw - 15vw
                        ) 
                        -
                        (
                            ${xFactor} * 
                            (
                                33vw - 15vw
                                + 15vw - 50vw
                            )      
                        )`),
            }}
        >
            <div
                className={"sleeveInner"}
                style={{
                    width: "100%",
                    height: "100%",
                    position: "relative",
                    backgroundColor: "black",
                    transition: "transform 1s",
                    transformStyle: "preserve-3d",
                    transform: `rotateY(${props.scrollPercent * 180}deg)`
                }}
            >
                <div
                    className={"sleeveFront"}
                    style={{
                        width: "100%",
                        height: "100%",
                        position: "absolute",
                        backfaceVisibility: "hidden",
                        WebkitBackfaceVisibility: "hidden"
                    }}
                >

                    <StaticImage
                        alt="More Info"
                        src="../images/sleeve2.jpg"
                        style={{
                            pointerEvents: "none",
                        }}
                    />
                </div>

                <div
                    className={"sleeveBack"}
                    style={{
                        width: "100%",
                        height: "100%",
                        position: "absolute",
                        transform: "rotateY(180deg)",
                        backfaceVisibility: "hidden",
                        WebkitBackfaceVisibility: "hidden",
                        color: Colors.offWhite,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                    }}

                >
                    <h2
                        style={{
                            fontSize: "4vw",
                            fontWeight: 200,
                            marginBottom: 0,
                            marginTop: "3vw",
                            textAlign: "center",
                            fontFamily: "stereofidelic"
                        }}
                    >
                        The Bone Yard Collective
                    </h2>
                    <p>
                        Subtext or slogan or something.
                    </p>
                    <p>
                        I guess hours and address or email
                    </p>
                    <p>
                        Links to insta and facebook
                    </p>
                    <p>
                        Maybe a little map
                    </p>
                </div>

            </div>
        </animated.div>
    )
}

export default Sleeve;
