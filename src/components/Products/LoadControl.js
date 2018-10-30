import React from 'react';
import {autoMode, ecoMode, manMode, products1} from "./TextBlocks";
import MatButton from "../Common/MatButton";

const LoadControl = props => {
    return (
        <div style={{
            width: '100%',
            paddingLeft: '10%',
            paddingRight: '10%',
            marginTop: 50,
            display: 'flex',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed',
            backgroundSize: 'cover',
            backgroundImage: 'url(/images/products1.jpg)',
        }}>
            <div style={{
                flex: 1,
                height: '100%',
                padding: 50,
                display: 'flex',
                flexDirection: 'column',
                background: 'rgba(0,0,0,0.8)',
                color: 'white',
                fontSize: '1.2em',
            }}>
                <span className={'h4'}>Intelligent Load Control</span>
                <p/>
                <span style={{textAlign: 'left'}}>{products1}</span>
                <p/>
                <span className={'h4'}>Operating Modes</span>
                <p><strong style={{color: 'green'}}>Auto - </strong>{autoMode}</p>
                <p><strong style={{color: 'orange'}}>Eco - </strong>{ecoMode}</p>
                <p><strong style={{color: '#c6c6c6'}}>Manual - </strong>{manMode}</p>
                <MatButton style={{width: 300, alignSelf: 'center'}} backgroundColor={'default'}>
                    Smart Switch Manual Download
                </MatButton>
            </div>
            <img src={'/images/performance3_1.png'} alt={''}
                 style={{width: '40%', objectFit: 'scale-down', alignSelf: 'flex-start'}}/>

        </div>
    );
};

export default LoadControl;