import React from 'react';
import {reliable} from "./TextBlocks";

const ReliableSystem = () => {
    return (
        <div style={{
            width: '100%',
            height: '70vh',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed',
            backgroundSize: 'cover',
            backgroundImage: 'url(/images/mesh_0.jpg)',
        }}>
            <div style={{width: '100%', height: '100%', background: 'rgba(0,0,0,0.4)', padding: '10vh 30vh 10vh 30vh', display: 'flex'}}>
                <img src={'/images/decentralized2.png'} alt={''}
                     style={{width: '50%', height: '100%', objectFit: 'scale-down', alignSelf: 'flex-start'}}/>
                <div style={{
                    flex: 1,
                    height: '100%',
                    padding: 30,
                    display: 'flex',
                    flexDirection: 'column'
                }}>
                    <h4 style={{color: 'white'}}>A reliable system</h4>
                    <span style={{color: 'white', textAlign: 'left'}}>{reliable}</span>

                </div>
            </div>
        </div>
    );
};

export default ReliableSystem;