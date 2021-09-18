import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { useState, useEffect, useRef } from "react";
import { useSpring, animated, config } from 'react-spring';
import Colors from "../styles/colors";


import "../styles/index.css";


const Sleeve = (props) => {

    const [open, setOpen] = useState(false);

    useEffect(() => {
        setOpen(props.clicked);
    }, [props.clicked]);


    return (
        <animated.div
            className={"sleeve"}
            onClick={props.MouseClick}
            onMouseEnter={props.MouseEnter}
            onMouseMove={props.MouseMove}
            onMouseLeave={props.MouseLeave}
            style={{
                zIndex: 2,
                width: "30vw",
                height: "30vw",
                cursor: "pointer",
                alignSelf: "center",
                position: "absolute",
                perspective: "100vw",
                willChange: "transform",
                transition: "box-shadow 0.5s",
                scale: props.spring.sleeveXYS.to((x, y, s) => s),
                /*
                wtf lol 
                30/15vw based on actual width - subject to change
                */
                right: props.spring.sleeveXYS.to((x, y, s, xFactor) => `
                calc(
                        (
                            ( 100vh - 30vw ) / 2
                        ) 
                        -
                        (
                            ${xFactor} * 
                            (
                                ((100vh - 30vw) / 2)
                                + 15vw - 50vw
                            )      
                        )
                        `),
                transform: !open ? props.spring.sleeveXYS.to((x, y, s) => `perspective(200vw) rotateX(${x}deg) rotateY(${y}deg)`) : ''
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
                    transform: open ? "rotateY(180deg)" : ""
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
                        src="../images/sleeve.jpg"
                        style={{
                            pointerEvents: "none"
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
