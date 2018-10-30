import React from 'react';

const SwitchComponent = ({even, src, title, dark, preText, listItems, height, children, marginTop, id}) => {
    return (
        <div id={id} style={{
            width: '100%',
            paddingLeft: '10%',
            paddingRight: '10%',
            paddingBottom: 30,
            paddingTop: 30,
            display: 'flex',
            flexDirection: even ? 'row' : 'row-reverse',
            color: dark ? 'white' : 'black'
        }}>
            <div style={{
                width: '50%', height: height || 200,
                paddingLeft: 40, paddingRight: 40,
                justifyContent: even ? 'flex-end' : 'flex-start',
                display: 'flex'
            }}>
                <img src={'/images/' + src} alt={''} style={{
                    maxWidth: '100%',
                    objectFit: 'contain',
                    marginTop: marginTop || 0,
                    height: '100%',
                    alignSelf: 'flex-start'
                }}/>
            </div>
            <div style={{
                background: dark === 2 ? 'rgba(0,0,0,0.7)' : dark ? '#333333' : 'white',
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                padding: 20
            }}>
                <span className={'h4'}>{title}</span>
                {preText && preText.split('\n').map((item, index) => <p key={index}>{item}</p>)}
                {listItems && <span className={'h4'}>Unique Features</span>}
                {listItems && <ul style={{textAlign: 'left'}}>
                    {listItems.map((item, index) => <li key={index}>
                        {item}
                    </li>)}
                </ul>}
                {children}
            </div>
        </div>
    );
};

export default SwitchComponent;