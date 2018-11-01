import React from 'react';
import {LargeScreen, SmallScreen} from "../Common/ScreenSizes";
import ImgWithLoader from "../Common/ImgWithLoader";
import {hotelItems} from "./TextBlocks";

const Advantages = () => {
    return (
        <div>
            <SmallScreen>
                <div style={{
                    display: 'flex', flexDirection: 'column',
                    width: '100%',
                    paddingLeft: '10%',
                    paddingRight: '10%',
                }}>
                    <h4 style={{textAlign: 'center'}}>Advantages</h4>
                    <ul>
                        {hotelItems[2].text.split('\n').map((item, index) => <li key={index}>{item}</li>)}
                    </ul>
                </div>
            </SmallScreen>
            <LargeScreen>
                <div style={{
                    width: '100%',
                    display: 'flex',
                    paddingLeft: '10%',
                    paddingRight: '20%',
                    marginTop: 50,
                }}>
                    <ImgWithLoader src={'/images/hotel12_2.png'} style={{
                        width: '50%',
                        marginTop: 30,
                        objectFit: 'scale-down',
                        alignSelf: 'flex-start'
                    }}/>
                    <div style={{flex: 1, marginLeft: 10}}>
                        <h4 style={{textAlign: 'left'}}>Advantages</h4>
                        <ul>
                            {hotelItems[2].text.split('\n').map((item, index) => <li key={index}>{item}</li>)}
                        </ul>
                    </div>
                </div>
            </LargeScreen>
        </div>
    );
};

export default Advantages;