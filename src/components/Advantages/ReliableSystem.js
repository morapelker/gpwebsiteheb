import React from 'react';
import {reliable} from "./TextBlocks";
import {LargeScreen} from "../Common/ScreenSizes";
import ImgWithLoader from "../Common/ImgWithLoader";
import './reliable.css';

const ReliableSystem = () => {
    return (
        <div className={'reliable_root'}>
            <div className={'reliable_root_2'}>
                <div style={{
                    flex: 1,
                    height: '100%',
                    padding: 30,
                    display: 'flex',
                    flexDirection: 'column',
                    color: 'white'
                }}>
                    <h4 style={{marginTop: 0}}>אמינות</h4>
                    {reliable.split('\n').map((item, index) => <p key={index}>{item}</p>)}
                </div>

                <LargeScreen>
                    <div style={{width: 10}} />
                    <ImgWithLoader src={'/images/decentralized2.png'} alt={''}
                                   style={{width: '50%', maxHeight: 300, padding: 10, height: '100%', objectFit: 'scale-down', alignSelf: 'flex-start'}}/>
                </LargeScreen>
            </div>
        </div>
    );
};

export default ReliableSystem;