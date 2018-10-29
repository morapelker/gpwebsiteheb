import React from 'react';
import {energySaving1, energySavingList} from "./TextBlocks";

const EnergySavingPanel = () => {
    return (
        <div style={{
            padding: '10vh',
            width: '100%',
            height: '90vh',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed',
            backgroundSize: 'cover',
            backgroundImage: 'url(/images/stats2.jpg)',
            display: 'flex',
            justifyContent: 'space-evenly'
        }}>
            <img src={'/images/stats3.png'} alt={''}
                 style={{width: '40%', objectFit: 'scale-down', alignSelf: 'flex-start'}}/>
            <div style={{
                background: 'rgba(0,0,0,0.5)',
                width: '38%',
                height: '100%',
                padding: 30,
                display: 'flex',
                flexDirection: 'column'
            }}>
                <h4 style={{color: 'white'}}>Intelligent energy saving</h4>
                <span style={{color: 'white', textAlign: 'left'}}>{energySaving1}</span>
                <ul style={{color: 'white'}}>
                    {energySavingList.map((item, index) => <li key={index}
                                                               style={{
                                                                   fontSize: 16,
                                                                   textAlign: 'left'
                                                               }}>
                                <span style={{
                                    fontSize: 16,
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