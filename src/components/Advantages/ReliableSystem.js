import React from 'react';
import {reliable} from "./TextBlocks";
import {LargeScreen} from "../Common/ScreenSizes";
import ImgWithLoader from "../Common/ImgWithLoader";

const ReliableSystem = () => {
    return (
        <div style={{
            width: '100%',
            height: '70vh',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed',
            marginTop: 40,
            backgroundSize: 'cover',
            backgroundImage: 'url(/images/mesh_0.jpg)',
        }}>
            <div style={{width: '100%', height: '100%', background: 'rgba(0,0,0,0.4)', display: 'flex'}}>
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
                    <h4>A reliable system</h4>
                    {reliable.split('\n').map((item, index) => <p key={index}>{item}</p>)}
                </div>
            </div>
        </div>
    );
};

export default ReliableSystem;