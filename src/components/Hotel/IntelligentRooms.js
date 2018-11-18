import React from 'react';
import {LargeScreen} from "../Common/ScreenSizes";
import {hotelItems} from "./TextBlocks";

const IntelligentRooms = () => {
    return (
        <div style={{
            padding: '10vh 10vw',
            width: '100%',
            marginTop: 10,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed',
            backgroundSize: 'cover',
            backgroundImage: 'url(/images/hotel4.jpg)',
            display: 'flex',
        }}>
            <LargeScreen>
                <div style={{width: '50%'}}/>
            </LargeScreen>
            <div style={{
                background: 'rgba(0,0,0,0.5)',
                flex: 1,
                height: '100%',
                padding: 30,
                display: 'flex',
                flexDirection: 'column'
            }}>
                <h4 style={{color: 'white', marginTop: 0}}>חדרים חכמים</h4>
                {hotelItems[1].text.split('\n').map((item, index) => <p key={index}
                                                                        style={{color: 'white'}}>
                    {item}
                </p>)}
            </div>
        </div>
    );
};

export default IntelligentRooms;