import React from 'react';
import {quickInstall, quickInstallList} from "./TextBlocks";

const QuickInstallationPanel = () => {
    return (
        <div style={{
            width: '100%', display: 'flex',
            paddingLeft: '20%',
            paddingRight: '20%',
        }}>
            <img src={'/images/quickinstall.png'} alt={''}
                 style={{width: '40%', objectFit: 'scale-down', marginTop: 50, alignSelf: 'flex-start'}}/>
            <div style={{
                flex: 1,
                height: '100%',
                padding: 30,
                display: 'flex',
                flexDirection: 'column'
            }}>
                <h4>Quick & simple installation</h4>
                <span style={{textAlign: 'left'}}>{quickInstall}</span>
                <ul>
                    {quickInstallList.map((item, index) => <li key={index}
                                                               style={{
                                                                   fontSize: 16,
                                                                   textAlign: 'left'
                                                               }}>
                                <span style={{
                                    fontSize: 16,
                                    textAlign: 'left',
                                }}> <strong>{item.sub + ' - '}</strong>{item.text}</span>
                    </li>)}
                </ul>
            </div>
        </div>
    );
};

export default QuickInstallationPanel;