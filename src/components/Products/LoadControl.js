import React from 'react';
import {autoMode, ecoMode, manMode, products1} from "./TextBlocks";
import MatButton from "../Common/MatButton";
import {LargeScreen} from "../Common/ScreenSizes";
import ImgWithLoader from "../Common/ImgWithLoader";

const LoadControl = () => {
    return (
        <div className={'product_root'}>
            <div style={{
                flex: 1,
                height: '100%',
                padding: 50,
                maxWidth: '100%',
                display: 'flex',
                flexDirection: 'column',
                background: 'rgba(0,0,0,0.8)',
                color: 'white',
                fontSize: '1.2em',
            }}>
                <span className={'h4'}>המפסק החכם</span>
                <p/>
                {products1.split('\n').map((item, index) => <p key={index}>{item}</p>)}
                <p/>
                <span className={'h4'}>מצבים אוטומטים</span>
                <p><strong style={{color: 'green'}}>אוטומטי - </strong>{autoMode}</p>
                <p><strong style={{color: 'orange'}}>חצי אוטומטי - </strong>{ecoMode}</p>
                <p><strong style={{color: '#c6c6c6'}}>ידני - </strong>{manMode}</p>
                <a href={'/docs/smart_switch.pdf'}>
                    <MatButton style={{width: 300, alignSelf: 'center'}}
                               backgroundColor={'default'}>
                        מדריך למפסק החכם
                    </MatButton>
                </a>
            </div>
            <LargeScreen>
                <ImgWithLoader src={'/images/performance3_1.png'} alt={''}
                               style={{
                                   width: '40%',
                                   objectFit: 'scale-down',
                                   alignSelf: 'flex-start'
                               }}/>
            </LargeScreen>

        </div>
    );
};

export default LoadControl;