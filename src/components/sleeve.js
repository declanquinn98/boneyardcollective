import * as React from "react";
import { animated } from 'react-spring';
import { StaticImage } from "gatsby-plugin-image";

import "../styles/index.css";

const Sleeve = (props) => {

    if (props.device === 'phone') {
        return (<Mobile {...props} />);
    } else {
        return (<DesktopTablet {...props} />);
    }
}

const Mobile = (props) => {
    const { sleeveSize, scrollPercent, halfSleeveSize, spring, xPosition } = props;

    // Font sizes must be relative to sleeve size
    const headingMargin = 0.05;
    const headingSize = 0.15;
    const subHeadingSize = 0.075;
    const subHeadingLetterSpacing = 0.0075;
    const paragraphSize = 0.035;
    const hoursSize = 0.03;
    const bottomSectionMargin = 0.04;
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

                <div id="sleeve-back" style={{ transform: `rotateY(${scrollPercent * 180}deg) scale(0.5)` }}>
                    <div>
                        <h2
                            id="sleeve-heading"
                            style={{
                                fontSize: `calc(${sleeveSize} * ${headingSize})`,
                                marginTop: `calc(${sleeveSize} * ${headingMargin})`,
                                marginBottom: `calc(${sleeveSize} * ${headingMargin})`
                            }}
                        >
                            The Bone Yard Collective
                        </h2>

                        <h3 id='sleeve-sub-heading'
                            style={{
                                fontSize: `calc(${sleeveSize} * ${subHeadingSize})`,
                                marginBottom: `calc(${sleeveSize} * ${headingMargin})`,
                                letterSpacing: `calc(${sleeveSize} * ${subHeadingLetterSpacing})`,
                            }}
                        >
                            Kitsch is king
                        </h3>

                        <p
                            className='sleeve-paragraph'
                            style={{
                                fontSize: `calc(${sleeveSize} * ${paragraphSize})`,
                                marginBottom: `calc(${sleeveSize} * ${headingMargin})`
                            }}
                        >
                            Here you will find treasures from the past that were built to last. <br />
                            Colourful collectables and retro rarities. Vinyl records, bar memorabilia, homewares, furniture and funky threads.
                        </p>

                        <p className='sleeve-paragraph' style={{ fontSize: `calc(${sleeveSize} * ${hoursSize})` }}>
                            Monday & Tuesday
                            <br />
                            CLOSED
                            <br />
                            <br />
                            Wednesday, Thursday, Saturday & Sunday
                            <br />
                            9:00 AM - 3:00 PM
                            <br />
                            <br />
                            Friday
                            <br />
                            9:00 AM - 7:00 PM
                        </p>
                    </div>

                    <div
                        id="sleeve-bottom-section"
                        style={{
                            width: `calc(100% - (${sleeveSize} * ${bottomSectionMargin * 2}))`,
                            marginBottom: `calc(${sleeveSize} * ${bottomSectionMargin})`
                        }}
                    >

                        <p style={{ margin: 'unset', fontSize: `calc(${sleeveSize} * ${paragraphSize})` }}>18 Anzac ave Redcliffe</p>

                        <div id='sleeve-bottom-section-social'>
                            <a
                                href='https://www.instagram.com/bone_yard_records_and_relics'
                                style={{ width: `calc(${sleeveSize} *${socialButtonSize}`, height: `calc(${sleeveSize} * ${socialButtonSize}` }}
                            >
                                <StaticImage alt="Instagram" src="../images/insta.png" />
                            </a>

                            <a
                                href='https://www.facebook.com/theboneyardcollective'
                                style={{ width: `calc(${sleeveSize} *${socialButtonSize}`, height: `calc(${sleeveSize} * ${socialButtonSize}` }}>
                                <StaticImage alt="Facebook" src="../images/facebook.png" />
                            </a>
                        </div>
                    </div>

                </div>

            </div>
        </animated.div >
    )
}

const DesktopTablet = (props) => {
    const { sleeveSize, scrollPercent, halfSleeveSize, spring, xPosition } = props;

    // Font sizes must be relative to sleeve size
    const headingMargin = 0.05;
    const headingSize = 0.15;
    const subHeadingSize = 0.075;
    const subHeadingLetterSpacing = 0.0075;
    const paragraphSize = 0.035;
    const hoursSize = 0.03;
    const bottomSectionMargin = 0.04;
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
                    <div>
                        <h2
                            id="sleeve-heading"
                            style={{
                                fontSize: `calc(${sleeveSize} * ${headingSize})`,
                                marginTop: `calc(${sleeveSize} * ${headingMargin})`,
                                marginBottom: `calc(${sleeveSize} * ${headingMargin})`
                            }}
                        >
                            The Bone Yard Collective
                        </h2>

                        <h3 id='sleeve-sub-heading'
                            style={{
                                fontSize: `calc(${sleeveSize} * ${subHeadingSize})`,
                                marginBottom: `calc(${sleeveSize} * ${headingMargin})`,
                                letterSpacing: `calc(${sleeveSize} * ${subHeadingLetterSpacing})`,
                            }}
                        >
                            Kitsch is king
                        </h3>

                        <p
                            className='sleeve-paragraph'
                            style={{
                                fontSize: `calc(${sleeveSize} * ${paragraphSize})`,
                                marginBottom: `calc(${sleeveSize} * ${headingMargin})`
                            }}
                        >
                            Here you will find treasures from the past that were built to last. <br />
                            Colourful collectables and retro rarities. Vinyl records, bar memorabilia, homewares, furniture and funky threads.
                        </p>

                        <p className='sleeve-paragraph' style={{ fontSize: `calc(${sleeveSize} * ${hoursSize})` }}>
                            Monday & Tuesday
                            <br />
                            CLOSED
                            <br />
                            <br />
                            Wednesday, Thursday, Saturday & Sunday
                            <br />
                            9:00 AM - 3:00 PM
                            <br />
                            <br />
                            Friday
                            <br />
                            9:00 AM - 7:00 PM
                        </p>
                    </div>

                    <div
                        id="sleeve-bottom-section"
                        style={{
                            width: `calc(100% - (${sleeveSize} * ${bottomSectionMargin * 2}))`,
                            marginBottom: `calc(${sleeveSize} * ${bottomSectionMargin})`
                        }}
                    >

                        <p style={{ margin: 'unset', fontSize: `calc(${sleeveSize} * ${paragraphSize})` }}>18 Anzac ave Redcliffe</p>

                        <div id='sleeve-bottom-section-social'>
                            <a
                                href='https://www.instagram.com/bone_yard_records_and_relics'
                                style={{ width: `calc(${sleeveSize} *${socialButtonSize}`, height: `calc(${sleeveSize} * ${socialButtonSize}` }}
                            >
                                <StaticImage alt="Instagram" src="../images/insta.png" />
                            </a>

                            <a
                                href='https://www.facebook.com/theboneyardcollective'
                                style={{ width: `calc(${sleeveSize} *${socialButtonSize}`, height: `calc(${sleeveSize} * ${socialButtonSize}` }}>
                                <StaticImage alt="Facebook" src="../images/facebook.png" />
                            </a>
                        </div>
                    </div>

                </div>

            </div>
        </animated.div >
    )
}


export default Sleeve;