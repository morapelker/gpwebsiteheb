import React from 'react';
import {autoMode, ecoMode, manMode, modesPreText, products1, productsAfterText} from "./TextBlocks";
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
                background: 'rgba(255,255,255,0.9)',
                color: 'black',
            }}>
                <span className={'h4'}>המפסק החכם</span>
                {products1.split('\n').map((item, index) => <p key={index}>{item}</p>)}
                <p>
                    <div style={{display: 'flex', flexDirection: 'column'}}>
                        {modesPreText}
                        <span style={{marginTop: 10}}><strong style={{fontStyle: 'italic'}}>מצב אוטומטי - </strong>{autoMode}</span>
                        <span><strong style={{fontStyle: 'italic'}}>מצב כיבוי אוטומטי - </strong>{ecoMode}</span>
                        <span><strong style={{fontStyle: 'italic'}}>מצב ידני - </strong>{manMode}</span>
                    </div>

                </p>
                <p>{productsAfterText}</p>
                <p/>

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