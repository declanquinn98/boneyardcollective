import * as React from "react";
import { useState, useEffect } from "react";
import { useSpring, animated, config } from 'react-spring';
import { isBrowser, isMobileOnly, isTablet } from 'react-device-detect';

import "../styles/index.css";

import Sleeve from "../components/sleeve.js";
import StarWarsText from "../components/starWarsText.js";

const IndexPage = () => {
    const [device, setDevice] = useState('');
    const [layout, setLayout] = useState('');
    // TODO check mobile tablet rotation
    useEffect(() => {
        if (isBrowser) {
            // Desktop
            setDevice('desktop');
            setLayout(getLayout());
            window.addEventListener('resize', onResize);
        } else if (isMobileOnly) {
            // Phone
            setDevice('phone');
        } else if (isTablet) {
            // Tablet
            setDevice('tablet');
        }

        window.addEventListener('scroll', onScroll);

        return () => {
            window.removeEventListener('scroll', onScroll);
            window.removeEventListener('resize', onResize);
        }
    }, []);

    const [titleSleeveContainerWidth, setTitleSleeveContainerWidth] = useState('80%');
    /* Prevent sleeve from seperating too far from title*/
    const [titleSleeveContainerMinWidth, setTitleSleeveContainerMinWidth] = useState('138vh');
    const [titleSleeveContainerMaxWidth, setTitleSleeveContainerMaxWidth] = useState('158vh');

    const titleSleeveSize = 65;    
    const [sleeveXPosition, setSleeveXPosition] = useState('');
    const [sleeveSize, setSleeveSize] = useState('');
    const [halfSleeveSize, setHalfSleeveSize] = useState('');

    const getLayout = () => {
        const ratio = window.innerWidth / window.innerHeight;
        console.log(ratio)
        // Constrain distance between title and sleeve based on aspect ratio
        // 1.738 - ratio before title covers text on sleeve

        // These two for position of sleeve
        const minDesktopRatio = 1.738;
        const maxDesktopRatio = 2;

        // This for size of sleeve and title
        const superMinDesktopRatio = 1.55;



        if (ratio < minDesktopRatio) {
            if (ratio < superMinDesktopRatio) {
                // set
                setTitleSleeveContainerMinWidth('91.25%');
                setTitleSize('21.35vw');

                const smallSize = 42;
                setSleeveSize(`${smallSize}vw`);
                setHalfSleeveSize(`${smallSize / 2}vw`);
                setSleeveXPosition(`5vw`);
                // setTitleSleeveContainerMaxWidth('99%'); 
                //setTitleSleeveContainerWidth('90%');
                //setSleeveXPosition(`5vw`);
            } else {
                setTitleSize('33vh');
                setTitleSleeveContainerMinWidth('139vh');
                setSleeveXPosition(`calc((100vw - 139vh) / 2)`);

                
                setSleeveSize(`${titleSleeveSize}vh`);
                setHalfSleeveSize(`${titleSleeveSize / 2}vh`);
            }
        } else if (ratio > maxDesktopRatio) {
            console.log('snap')
            setSleeveXPosition(`calc((100vw - 160vh) / 2)`);

        } else {
            setSleeveXPosition(`9.9vw`);
        }

        // Prevent title from going past left screen bounds
        // if (ratio < 1.35) {
        //     setMaxTitleLeftMargin(true);
        // } else {
        //     setMaxTitleLeftMargin(false);
        // }

        return ratio >= 1 ? 'landscape' : 'portrait';
    }

    const onResize = () => {
        setLayout(getLayout());
    }

    const [dimSwitch, setDimSwitch] = useState(0);
    const [scrollPercent, setScrollPercent] = useState(0);
    const [sleeveScalePos, setSleeveScalePos] = useState([1, 0]);
    const onScroll = () => {
        const scaleAmount = (100 - titleSleeveSize) * 0.01;
        const percent = window.pageYOffset / window.innerHeight;
        console.log(percent)
        setScrollPercent(percent);
        setDimSwitch(percent * 0.67);
        setSleeveScalePos([1 + (percent * scaleAmount), percent]);
    }

    // useEffect(() => {
    //     updateLayoutDependencies();
    // }, [device]);

    // useEffect(() => {
    //     if (device === 'desktop') {
    //         updateLayoutDependencies();
    //     }
    // }, [layout]);



    // % of vh / vw for title + sleeve div to occupy
    // const updateLayoutDependencies = () => {
    //     const xPos = 10;

    //     if (device === 'desktop') {
    //         if (layout === 'portrait') {
    //             // setSleeveXPosition(`${xPos}vw`);
    //             setSleeveSize(`${titleSleeveSize}vw`);
    //             setHalfSleeveSize(`${titleSleeveSize / 2}vw`);
    //         } else {
    //             // setSleeveXPosition(`${xPos}vh`);
    //             setSleeveSize(`${titleSleeveSize}vh`);
    //             setHalfSleeveSize(`${titleSleeveSize / 2}vh`);
    //         }
    //         setSleeveXPosition(`9.5vw`);
    //     } else if (device === 'phone') {

    //     } else {
    //         // Tablet
    //     }
    // }


    const [maxTitleLeftMargin, setMaxTitleLeftMargin] = useState(false);
    const [titleSize, setTitleSize] = useState();
    //const [titleMargin, setTitleMargin] = useState();

    const dimmerSpring = useSpring({ dimSwitch, config: config.default });
    const sleeveSpring = useSpring({ sleeveScalePos, config: config.default });

    /**
     * - Title scales with viewHeight in landscape mode and viewWidth in portrait mode.
     * - Override left margin if title going out of bounds due to window width too small.
    //  */
    // useEffect(() => {
    //     const stayOnScreenMagic = '20.35vw';

    //     if (layout === 'landscape') {
    //         // let leftMargin;

    //         // if (maxTitleLeftMargin) {
    //         //     leftMargin = stayOnScreenMagic;
    //         // } else {
    //         //     leftMargin = `calc((100vw - 80vh) / 2)`;
    //         // }

    //        // setTitleSize('33vh');
    //         // setTitleMargin(leftMargin);
    //     } else {
    //         //setTitleSize('33vw');
    //         // setTitleMargin(stayOnScreenMagic);
    //     }
    // }, [layout, maxTitleLeftMargin]);


    const sleeveProps = {
        sleeveSize,
        scrollPercent,
        halfSleeveSize,
        spring: sleeveSpring,
        xPosition: sleeveXPosition
    }




    return (
        <div id="main-container" aria-hidden="true">

            <div id="first-page">
                <div id="title-sleeve-container" style={{
                    height: sleeveSize,
                    width: titleSleeveContainerWidth,
                    minWidth: titleSleeveContainerMinWidth,
                    maxWidth: titleSleeveContainerMaxWidth
                }}
                >

                    <h1 id="title" style={{ fontSize: titleSize }}>
                        Bone Yard<br />Collective
                    </h1>
                    <Sleeve {...sleeveProps} />

                </div>
            </div>
            <animated.div id="background-dim" style={{ opacity: dimmerSpring.dimSwitch }} />


        </div>
    )
}
// <StarWarsText spring={sleeveSpring} />
export default IndexPage
