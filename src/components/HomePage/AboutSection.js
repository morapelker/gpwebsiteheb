import React from 'react';
import MatButton from "../Common/MatButton";

const AboutSection = () => {
    return (
        <div style={{
            width: '100%',
            height: 600,
            backgroundImage: 'url(/images/office7_0.jpg)',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed',
            backgroundSize: 'cover',
        }}>
            <div style={{
                width: '100%',
                height: '100%',
                background: 'rgba(0,0,0,0.7)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center'
            }}>
                <div style={{
                    width: '50%',
                    height: '70%',
                    display: 'flex',
                    flexDirection: 'column',
                    paddingLeft: 30,
                    alignItems: 'flex-start'
                }}>
                    <h4 style={{color: 'white', marginLeft: 40}}>About Us</h4>
                    <span style={{color: 'white', fontSize: '1.1em'}}>Green Point Systems vision was to create a system that fits</span>
                    <span style={{color: 'white', fontSize: '1.1em'}}>everyone’s need. A simple operated system that will </span>
                    <span style={{color: 'white', fontSize: '1.1em'}}>automatically adapt home environment to the user's </span>
                    <span style={{color: 'white', fontSize: '1.1em'}}>needs while eliminating energy wastage; an affordable, simple </span>
                    <span style={{color: 'white', fontSize: '1.1em'}}>and easy-to-install solution for a new or existing home. The </span>
                    <span style={{color: 'white', fontSize: '1.1em'}}>igh system introduces a new hassle free standard of </span>
                    <span style={{color: 'white', fontSize: '1.1em'}}>living. Our goals were achieved by inventing a revolutionary </span>
                    <span style={{color: 'white', fontSize: '1.1em'}}>igh concept that opens the door for a new generation of real </span>
                    <span style={{color: 'white', fontSize: '1.1em'}}>smart homes. igh system is designed...</span>
                    <MatButton text={'Read More'} type={'secondary'} backgroundColor={'#33cc33'} />
                </div>

            </div>

        </div>
    );
};

export default AboutSection;