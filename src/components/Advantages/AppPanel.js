import React from 'react';
import {appDescription} from "./TextBlocks";

const AppPanel = () => {
    return (
        <div style={{
            width: '100%',
            paddingLeft: '20%',
            paddingRight: '20%',
            display: 'flex',
            flexDirection: 'row-reverse',
            justifyContent: 'space-evenly'
        }}>
            <img src={'/images/app_front2.png'} alt={''}
                 style={{width: '40%', objectFit: 'scale-down', alignSelf: 'flex-start'}}/>
            <div style={{
                flex: 1,
                height: '100%',
                padding: 30,
                display: 'flex',
                flexDirection: 'column'
            }}>
                <h4>A friendly and intuitive App</h4>
                <span style={{textAlign: 'left'}}>{appDescription}</span>
                <div style={{
                    alignSelf: 'flex-start',
                    height: 50,
                    marginTop: 10
                }}>
                    <a href={'https://itunes.apple.com/us/app/igh-compact/id895412247?mt=8'}>
                        <img src={'/images/appstore.png'} alt={''}
                             style={{height: '100%'}}/></a>
                    <a style={{marginLeft: 10}} href={'https://play.google.com/store/apps/details?id=com.igh.ighcompact3&hl=en'}><img
                        src={'/images/googleplay.png'} alt={''} style={{height: '100%'}}/></a>
                </div>
            </div>
        </div>
    );
};

export default AppPanel;