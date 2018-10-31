import React from 'react';
import {LargeScreen, SmallScreen} from "../Common/ScreenSizes";

const PanelComponent = ({title, text, image, even, whiteText, children, marginTop}) => {
    return (
        <div style={{
            width: '100%',
        }}>
            <SmallScreen>
                <div style={{
                    paddingLeft: '10%',
                    paddingRight: '10%',
                    display: 'flex', flexDirection: 'column', width: '100%',
                    color: whiteText ? 'white' : 'black'
                }}>
                    <h4>{title}</h4>
                    {text.split('\n').map((item, index) => (index === 0 && image ? <div key={index} style={{
                            display: 'flex', width: '100%',
                            flexDirection: even ? 'row' : 'row-reverse'
                        }}>
                            <img src={'/images/' + image} alt={''}
                                 style={{
                                     width: '45%', objectFit: 'scale-down', alignSelf: 'flex-start'
                                 }}/>
                            <p style={{textAlign: 'left', alignSelf: 'center'}}>{item}</p>
                        </div> :
                        <p style={{textAlign: 'left'}} key={index}>{item}</p>)
                    )}
                    {children}
                </div>
            </SmallScreen>
            <LargeScreen>
                <div style={{
                    paddingLeft: '15%',
                    paddingRight: '15%',
                    width: '100%',
                    display: 'flex',
                    flexDirection: even ? 'row' : 'row-reverse',
                }}>
                    <img src={'/images/' + image} alt={''}
                         style={{
                             marginTop: marginTop === undefined ? 50 : marginTop,
                             width: '45%', objectFit: 'scale-down', alignSelf: 'flex-start'
                         }}/>
                    <div style={{
                        flex: 1,
                        height: '100%',
                        padding: 30,
                        marginLeft: 30, marginRight: 30,
                        display: 'flex',
                        flexDirection: 'column',
                        color: whiteText ? 'white' : 'black'
                    }}>
                        <h4>{title}</h4>
                        {text.split('\n').map((item, index) => <p
                            style={{textAlign: 'left'}} key={index}>{item}</p>
                        )}
                        {children}
                    </div>
                </div>
            </LargeScreen>
        </div>
    );
};

export default PanelComponent;