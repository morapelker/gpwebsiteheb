import React from 'react';
import MatButton from "../Common/MatButton";

const InfoCenterSection = () => {
    return (
        <div style={{
            width: '100%',
            height: 600,
            backgroundImage: 'url(/images/proff.jpg)',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed',
            backgroundSize: 'cover',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'flex-end'
        }}>

            <div style={{
                background: '#3eb549',
                width: '40%',
                height: 300,
                marginRight: '10%',
                boxSizing: 'border-box',
                padding: 30
            }}>
                <span style={{lineSpacing: 1, fontWeight: 'bold', color: 'white', fontSize: '2em'}}>Information Center</span>
                <br/>
                <span style={{lineSpacing: 1, color: 'white', fontSize: '1.6em'}}>Smart home professional information</span>
                <br/>
                <p style={{display: 'block', color: 'white', textAlign: 'left', fontSize: '1.3em'}}>We have collected for you the latest news in Smart Homes technology and trends. come and take a look.
                </p>
                <MatButton type={'primary'} backgroundColor={''}>
                    Read More
                </MatButton>
            </div>

        </div>
    );
};

export default InfoCenterSection;