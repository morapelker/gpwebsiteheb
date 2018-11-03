import React from 'react';
import './products.css';
import {LargeScreen, SmallScreen} from "../Common/ScreenSizes";
import ImgWithLoader from "../Common/ImgWithLoader";

const SwitchComponent = ({even, src, title, dark, preText, listItems, height, children, marginTop, id}) => {
    return (
        <div className={'switch_root ' + (even ? '' : 'odd ') + (dark ? 'dark' : '')} id={id}>
            <SmallScreen>
                <h4 style={{margin: 'auto'}}>{title}</h4>
                {preText && preText.split('\n').map((item, index) => (index === 0 ?
                    <div key={index} style={{
                        display: 'flex',
                        width: '100%',
                        flexDirection: 'row'
                    }}>
                        <ImgWithLoader src={'/images/' + src} alt={''} style={{
                            maxWidth: '50%',
                            objectFit: 'contain',
                            marginTop: marginTop || 0,
                            maxHeight: 100,
                            alignSelf: 'center'
                        }}/>
                        <p style={{marginLeft: 10, marginRight: 10, alignSelf: 'flex-end'}}>{item}</p>
                    </div> :
                    <p key={index}>{item}</p>))}
                {listItems && <span className={'h4'}>מאפיינים ייחודיים</span>}
                {listItems && <ul>
                    {listItems.map((item, index) => <li key={index}>
                        {item}
                    </li>)}
                </ul>}
                {children}
            </SmallScreen>
            <LargeScreen>
                <div style={{
                    width: '50%', height: height || 200,
                    paddingLeft: 40, paddingRight: 40,
                    justifyContent: even ? 'flex-end' : 'flex-start',
                    display: 'flex'
                }}>
                    <ImgWithLoader src={'/images/' + src} alt={''} style={{
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
                    {listItems && <span className={'h4'}>מאפיינים ייחודיים</span>}
                    {listItems && <ul>
                        {listItems.map((item, index) => <li key={index}>
                            {item}
                        </li>)}
                    </ul>}
                    {children}
                </div>
            </LargeScreen>
        </div>
    );
};

export default SwitchComponent;