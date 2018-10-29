import React from 'react';

const InfoPanel = ({image, title, text, even, marginTop}) => {
    return (
        <div style={{
            width: '100%',
            display: 'flex',
            paddingLeft: '20%',
            paddingRight: '20%',
            marginTop: 70,
            flexDirection: even ? 'row' : 'row-reverse'
        }}>
            <img src={'/images/' + image} alt={''} style={{
                width: '40%',
                marginTop: marginTop === undefined ? 100 : marginTop,
                objectFit: 'scale-down',
                alignSelf: 'flex-start'
            }}/>
            <div style={{flex: 1, marginLeft: 10}}>
                <h4 style={{textAlign: 'left'}}>{title}</h4>
                {text.split('\n').map((item, index) => <p
                    style={{width: '100%', textAlign: 'left'}} key={index}>{item}</p>)}
            </div>
        </div>
    );
};

export default InfoPanel;