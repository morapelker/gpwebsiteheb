import React from 'react';
import {LargeScreen, SmallScreen} from "../Common/ScreenSizes";

/*
* <SmallScreen>
                            {about2.split('\n').map((item, index) => (index === 0 ?
                                <div key={index} style={{display: 'flex', width: '100%'}}>
                                    <p
                                        style={{flex: 1, textAlign: 'left'}}
                                        key={index}>{item}</p>
                                    <img src={'/images/intro.png'} alt={''} style={{
                                        marginLeft: 10,
                                        width: '40%',
                                        objectFit: 'scale-down',
                                        alignSelf: 'flex-start'
                                    }}/>
                                </div>
                                : <p
                                    style={{width: '100%', textAlign: 'left'}}
                                    key={index}>{item}</p>))}
                        </SmallScreen>
                        <LargeScreen>
                            {about2.split('\n').map((item, index) => <p
                                style={{width: '100%', textAlign: 'left'}} key={index}>{item}</p>)}
                        </LargeScreen> */

const InfoPanel = ({image, title, text, even, marginTop}) => {
    return (
        <div>
            <SmallScreen>
                <div style={{
                    display: 'flex', flexDirection: 'column',
                    width: '100%',
                    paddingLeft: '20%',
                    paddingRight: '20%'
                }}>
                    <h4 style={{textAlign: 'left'}}>{title}</h4>
                    {text.split('\n').map((item, index) => (index === 0 ?
                        <div key={index} style={{
                            display: 'flex',
                            flexDirection: even ? 'row' : 'row-reverse',
                            width: '100%'
                        }}>
                            <p style={{flex: 1, alignSelf: 'center', textAlign: 'left'}}>{item}</p>
                            <img src={'/images/' + image} alt={''} style={{
                                width: '40%',
                                objectFit: 'scale-down',
                                alignSelf: 'flex-start'
                            }}/>
                        </div>
                        : <p
                            style={{width: '100%', textAlign: 'left'}}
                            key={index}>{item}</p>))}
                </div>
            </SmallScreen>
            <LargeScreen>
                <div style={{
                    width: '100%',
                    display: 'flex',
                    paddingLeft: '20%',
                    paddingRight: '20%',
                    marginTop: 70,
                    flexDirection: even ? 'row' : 'row-reverse'
                }}>
                    <img src={'/images/' + image} alt={''} style={{
                        width: '40%',
                        marginTop: marginTop === undefined ? 100 : marginTop,
                        objectFit: 'scale-down',
                        alignSelf: 'flex-start'
                    }}/>
                    <div style={{flex: 1, marginLeft: 10}}>
                        <h4 style={{textAlign: 'left'}}>{title}</h4>
                        {text.split('\n').map((item, index) => <p
                            style={{width: '100%', textAlign: 'left'}} key={index}>{item}</p>)}
                    </div>
                </div>
            </LargeScreen>
        </div>
    );
};

export default InfoPanel;