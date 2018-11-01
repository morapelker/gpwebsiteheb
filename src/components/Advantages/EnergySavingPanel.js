import React from 'react';
import {energySaving1, energySavingList} from "./TextBlocks";
import {LargeScreen} from "../Common/ScreenSizes";
import ImgWithLoader from "../Common/ImgWithLoader";

const EnergySavingPanel = () => {
    return (
        <div style={{
            padding: '10vh 10vw',
            width: '100%',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed',
            backgroundSize: 'cover',
            backgroundImage: 'url(/images/stats2.jpg)',
            display: 'flex',
            justifyContent: 'space-evenly'
        }}>
            <LargeScreen>
                <ImgWithLoader src={'/images/stats3.png'} alt={''}
                     style={{width: '40%', objectFit: 'scale-down', alignSelf: 'flex-start'}}/>
                <div style={{width: '10%'}}/>
            </LargeScreen>
            <div style={{
                background: 'rgba(0,0,0,0.5)',
                flex: 1,
                height: '100%',
                padding: 30,
                display: 'flex',
                flexDirection: 'column'
            }}>
                <h4 style={{color: 'white', marginTop: 0}}>Intelligent energy saving</h4>
                <span style={{color: 'white', textAlign: 'left'}}>{energySaving1}</span>
                <ul style={{color: 'white', padding: 0}}>
                    {energySavingList.map((item, index) => <li key={index}
                                                               style={{
                                                                   fontSize: '1em',
                                                                   textAlign: 'left'
                                                               }}>
                                <span style={{
                                    fontSize: '1em',
                                    color: 'white',
                                    textAlign: 'left',
                                }}> <strong>{item.sub + ' - '}</strong>{item.text}</span>
                    </li>)}
                </ul>
            </div>
        </div>
    );
};

export default EnergySavingPanel;