import * as React from "react";
import { Helmet } from "react-helmet";
import { useState, useEffect } from "react";
import { useSpring, animated, config } from 'react-spring';
import { isBrowser, isMobileOnly, isTablet } from 'react-device-detect';

import "../styles/index.css";

import Sleeve from "../components/sleeve.js";
import StarWarsText from "../components/starWarsText.js";

const IndexPage = () => {
    const [device, setDevice] = useState();
    // TODO check mobile tablet rotation
    useEffect(() => {
        if (isBrowser) {
            setDevice('desktop');
            window.addEventListener('resize', updateLayout);
        } else if (isMobileOnly) {
            setDevice('phone');
        } else if (isTablet) {
            setDevice('tablet');
        }
    }, []);

    useEffect(() => {
        if (!device) {
            return;
        }

        window.addEventListener('scroll', onScroll);
        updateLayout();

        return () => {
            window.removeEventListener('scroll', onScroll);
            window.removeEventListener('resize', updateLayout);
        }

    }, [device])

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
    const [titleSleeveContainerJustifyContent, setTitleSleeveContainerJustifyContent] = useState('unset');

    // Magic number hell
    const updateLayout = () => {
        if (device === 'phone') {
            const phoneSleeveSize = 67;
            const rightOffset = (100 - phoneSleeveSize)

            setTitleSize('25vw');
            //setSleeveXPosition(`calc(50vw - ${rightOffset}vw)`);
            setSleeveSize(`${phoneSleeveSize}vw`);
            setHalfSleeveSize(`${phoneSleeveSize / 2}vw`);
            setTitleMargin('77.5vh');
            setTitleSleeveContainerMinWidth('unset');
            setTitleSleeveContainerJustifyContent('center');

            return;
        }


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
    const [titleMargin, setTitleMargin] = useState(0);

    const onScroll = () => {
        let scaleAmount;
        const percent = window.pageYOffset / window.innerHeight;
        console.log(device)
        if (device === 'desktop') {
            scaleAmount = (100 - titleSleeveSize) * 0.01;
        } else if (device === 'phone') {
            scaleAmount = (100 - titleSleeveSize) * 0.05;
        } else if (device === 'tablet') {
            scaleAmount = (100 - titleSleeveSize) * 0.03;
        }

        setScrollPercent(percent);
        setDimSwitch(percent * 0.67);
        setSleeveScalePos([1 + (percent * scaleAmount), percent]);
    }

    const dimmerSpring = useSpring({ dimSwitch, config: config.default });
    const sleeveSpring = useSpring({ sleeveScalePos, config: config.default });

    const sleeveProps = {
        device,
        sleeveSize,
        scrollPercent,
        halfSleeveSize,
        spring: sleeveSpring,
        xPosition: sleeveXPosition
    }

    const [titleStyle, setTitleStyle] = useState({

    });

    return (
        <div id="main-container" aria-hidden="true">

            {/* <Helmet>
                <meta
                    charSet="utf-8"
                    name="description"
                    content="The Boneyard Collective"
                />
                <meta
                    http-equiv="Content-Security-Policy"
                    content="X-Frame-Options https://declanquinn.dev; script-src 'self' declanquinn.dev 'unsafe-inline'; style-src 'self' 'unsafe-inline'; base-uri 'self'; frame-ancestors 'self' https://declanquinn.dev"
                />

                <title>The Boneyard Collective</title>
                {/* <link rel="canonical" href="http://mysite.com/example" /> 
            </Helmet> */}

            <div id="first-page">
                <div
                    id="title-sleeve-container"
                    style={{
                        height: sleeveSize,
                        justifyContent: titleSleeveContainerJustifyContent,
                        minWidth: titleSleeveContainerMinWidth,
                    }}
                >

                    <h1
                        id="title"
                        style={{
                            marginBottom: titleMargin,
                            fontSize: titleSize
                        }}
                    >
                        Bone Yard<br />Collective
                    </h1>

                    <Sleeve {...sleeveProps} />

                </div>
                <StarWarsText device={device} />
                {device === 'phone' ? < div /> : <animated.div id="background-dim" style={{ opacity: dimmerSpring.dimSwitch }} />}
            </div>

        </div>
    )
}
//

export default IndexPage
