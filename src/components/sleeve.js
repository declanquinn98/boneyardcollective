import * as React from "react";
import { useState, useEffect, useRef } from "react";
import { useSpring, animated, config } from 'react-spring';

const Sleeve = (props) => {

    const [open, setOpen] = useState(false);

    useEffect(() => {
        setOpen(props.clicked);
        console.log(props.spring)
    }, [props.clicked]);


    return (
        <animated.div
            className={"sleeve"}
            onClick={props.MouseClick}
            onMouseEnter={props.MouseEnter}
            onMouseMove={props.MouseMove}
            onMouseLeave={props.MouseLeave}
            style={{
                zIndex: 1,
                width: "30vw",
                height: "30vw",
                cursor: "pointer",
                alignSelf: "center",
                position: "absolute",
                perspective: "100vw",
                willChange: "transform",
                transition: "box-shadow 0.5s",
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
                transform: props.spring.sleeveXYS.to((x, y, s) => `perspective(200vw) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`)
            }}
        >
            <div
                className={"sleeveInner"}
                style={{
                    backgroundColor: "white",
                    width: "100%",
                    height: "100%",
                    position: "relative",
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
                    <p>FRONT</p>

                </div>


                <div
                    className={"sleeveBack"}
                    style={{
                        width: "100%",
                        height: "100%",
                        position: "absolute",
                        transform: "rotateY(180deg)",
                        backfaceVisibility: "hidden",
                        WebkitBackfaceVisibility: "hidden"
                    }}

                >
                    <p>BACK</p>

                </div>

            </div>
        </animated.div>
    )
}

export default Sleeve
