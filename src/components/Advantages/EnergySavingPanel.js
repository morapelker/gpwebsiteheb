import React from 'react';
import {energySaving1, energySavingList} from "./TextBlocks";

const EnergySavingPanel = () => {
    return (
        <div style={{
            padding: '10vh 10vw',
            width: '100%',
            display: 'flex',
            justifyContent: 'space-evenly'
        }}>
            <div style={{
                background: 'rgba(255,255,255,0.5)',
                flex: 1,
                height: '100%',
                padding: 30,
                display: 'flex',
                flexDirection: 'column'
            }}>
                <h4 style={{color: 'black', marginTop: 0}}>מדידת תצרוכת החשמל</h4>
                <span style={{color: 'black'}}>{energySaving1}</span>
                <ul style={{color: 'black', padding: 0}}>
                    {energySavingList.map((item, index) => <li key={index}
                                                               style={{
                                                                   fontSize: '1em',
                                                                   textAlign: 'right'
                                                               }}>
                                <span style={{
                                    fontSize: '1em',
                                    color: 'black',
                                }}> <strong>{item.sub + ' - '}</strong>{item.text}</span>
                    </li>)}
                </ul>
            </div>
        </div>
    );
};

export default EnergySavingPanel;