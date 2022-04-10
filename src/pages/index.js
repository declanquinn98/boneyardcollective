import * as React from "react";
import { Helmet } from "react-helmet";
import { useState, useEffect } from "react";
import { useSpring, animated, config } from 'react-spring';
import { isBrowser, isMobileOnly, isTablet } from 'react-device-detect';

import "../styles/index.css";

import Sleeve from "../components/sleeve.js";
import StarWarsText from "../components/starWarsText.js";

const IndexPage = () => {
    const [device, setDevice] = useState('');
    // TODO check mobile tablet rotation
    useEffect(() => {
        if (isBrowser) {
            setDevice('desktop');
            updateLayout();
            window.addEventListener('resize', updateLayout);
        } else if (isMobileOnly) {
            setDevice('phone');
        } else if (isTablet) {
            setDevice('tablet');
        }

        window.addEventListener('scroll', onScroll);

        return () => {
            window.removeEventListener('scroll', onScroll);
            window.removeEventListener('resize', updateLayout);
        }
    }, []);

    // width/height as a % of vh 
    const titleSleeveSize = 65;
    // 0.647 magic ratio to convert from vh based size to width constrained size
    const titleSleeveSizeWhenResizing = titleSleeveSize * 0.647;
    const [titleSize, setTitleSize] = useState();
    const [sleeveSize, setSleeveSize] = useState('');
    const [halfSleeveSize, setHalfSleeveSize] = useState('');
    const [sleeveXPosition, setSleeveXPosition] = useState('');
    // 138 magic to 
    const [titleSleeveContainerMinWidth, setTitleSleeveContainerMinWidth] = useState('138vh');

    // Magic number hell
    const updateLayout = () => {
        const ratio = window.innerWidth / window.innerHeight;
        // Constrain distance between title and sleeve based on aspect ratio
        // 1.738 - ratio before title covers text on sleeve
        // These two for position of sleeve
        const minDesktopRatio = 1.738;
        const maxDesktopRatio = 2;
        // This for size of sleeve and title
        const superMinDesktopRatio = 1.55;

        if (ratio < minDesktopRatio) {
            if (ratio < superMinDesktopRatio) {
                setTitleSize('21.35vw');
                setSleeveXPosition(`5vw`);
                setSleeveSize(`${titleSleeveSizeWhenResizing}vw`);
                setHalfSleeveSize(`${titleSleeveSizeWhenResizing / 2}vw`);
                setTitleSleeveContainerMinWidth('90vw');
            } else {
                setTitleSize('33vh');
                setSleeveXPosition(`calc((100vw - 139vh) / 2)`);
                setSleeveSize(`${titleSleeveSize}vh`);
                setHalfSleeveSize(`${titleSleeveSize / 2}vh`);
                setTitleSleeveContainerMinWidth('139vh');

            }
        } else if (ratio > maxDesktopRatio) {
            setTitleSize('33vh');
            setSleeveXPosition(`calc((100vw - 160vh) / 2)`);
            setSleeveSize(`${titleSleeveSize}vh`);
            setHalfSleeveSize(`${titleSleeveSize / 2}vh`);
            setTitleSleeveContainerMinWidth('139vh');

        } else {
            setTitleSize('33vh');
            setSleeveXPosition(`9.9vw`);
            setSleeveSize(`${titleSleeveSize}vh`);
            setHalfSleeveSize(`${titleSleeveSize / 2}vh`);
            setTitleSleeveContainerMinWidth('139vh');
        }
    }


    const [dimSwitch, setDimSwitch] = useState(0);
    const [scrollPercent, setScrollPercent] = useState(0);
    const [sleeveScalePos, setSleeveScalePos] = useState([1, 0]);

    const onScroll = () => {
        const scaleAmount = (100 - titleSleeveSize) * 0.01;
        const percent = window.pageYOffset / window.innerHeight;

        setScrollPercent(percent);
        setDimSwitch(percent * 0.67);
        setSleeveScalePos([1 + (percent * scaleAmount), percent]);
    }


    const dimmerSpring = useSpring({ dimSwitch, config: config.default });
    const sleeveSpring = useSpring({ sleeveScalePos, config: config.default });

    const sleeveProps = {
        sleeveSize,
        scrollPercent,
        halfSleeveSize,
        spring: sleeveSpring,
        xPosition: sleeveXPosition
    }




    return (
        <div id="main-container" aria-hidden="true">

            <Helmet>
                <meta
                    charSet="utf-8"
                    name="description"
                    content="The Boneyard Collective"
                />
                <meta
                    http-equiv="Content-Security-Policy"
                    content="script-src 'self' declanquinn.dev 'unsafe-inline'; style-src 'self' 'unsafe-inline'; base-uri 'self'; frame-ancestors 'self' declanquinn.dev"
                />

                <title>The Boneyard Collective</title>
                {/* <link rel="canonical" href="http://mysite.com/example" /> */}
            </Helmet>

            <div id="first-page">
                <div id="title-sleeve-container"
                    style={{
                        height: sleeveSize,
                        minWidth: titleSleeveContainerMinWidth,
                    }}
                >

                    <h1 id="title" style={{ fontSize: titleSize }}>
                        Bone Yard<br />Collective
                    </h1>
                    <Sleeve {...sleeveProps} />

                </div>
                <StarWarsText spring={sleeveSpring} />
                <animated.div id="background-dim" style={{ opacity: dimmerSpring.dimSwitch }} />
            </div>



        </div>
    )
}
// 
export default IndexPage
