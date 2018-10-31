import React from 'react';
import {quickInstall, quickInstallList} from "./TextBlocks";
import {LargeScreen, SmallScreen} from "../Common/ScreenSizes";

const QuickInstallationPanel = () => {
    return (
        <div style={{
            width: '100%',
            paddingLeft: '10%',
            paddingRight: '10%',
        }}>
            <SmallScreen>
                <div style={{display: 'flex', width: '100%', flexDirection: 'column'}}>
                    <h4>Quick & simple installation</h4>
                    <div style={{display: 'flex', width: '100%'}}>
                        <img src={'/images/quickinstall.png'} alt={''}
                             style={{
                                 width: '40%',
                                 objectFit: 'scale-down',
                                 alignSelf: 'flex-start'
                             }}/>
                        <span style={{textAlign: 'left', flex: 1}}>{quickInstall}</span>
                    </div>
                    <ul>
                        {quickInstallList.map((item, index) => <li key={index}
                                                                   style={{
                                                                       textAlign: 'left'
                                                                   }}>
                                <span style={{
                                    textAlign: 'left',
                                }}> <strong>{item.sub + ' - '}</strong>{item.text}</span>
                        </li>)}
                    </ul>
                </div>
            </SmallScreen>
            <LargeScreen>
                <div style={{display: 'flex', width: '100%'}}>
                    <img src={'/images/quickinstall.png'} alt={''}
                         style={{
                             width: '40%',
                             objectFit: 'scale-down',
                             marginTop: 50,
                             alignSelf: 'flex-start'
                         }}/>
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
            </LargeScreen>
        </div>
    );
};

export default QuickInstallationPanel;