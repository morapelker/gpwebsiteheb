import React from 'react';
import {reliable} from "./TextBlocks";
import {LargeScreen} from "../Common/ScreenSizes";
import ImgWithLoader from "../Common/ImgWithLoader";
import './reliable.css';

const ReliableSystem = () => {
    return (
        <div className={'reliable_root'}>
            <div className={'reliable_root_2'}>
                <LargeScreen>
                    <ImgWithLoader src={'/images/decentralized2.png'} alt={''}
                         style={{width: '50%', height: '100%', objectFit: 'scale-down', alignSelf: 'flex-start'}}/>
                    <div style={{width: 10}} />
                </LargeScreen>
                <div style={{
                    flex: 1,
                    height: '100%',
                    padding: 30,
                    display: 'flex',
                    flexDirection: 'column',
                    color: 'white'
                }}>
                    <h4 style={{marginTop: 0}}>A reliable system</h4>
                    {reliable.split('\n').map((item, index) => <p key={index}>{item}</p>)}
                </div>
            </div>
        </div>
    );
};

export default ReliableSystem;