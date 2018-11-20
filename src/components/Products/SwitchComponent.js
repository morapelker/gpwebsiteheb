import React from 'react';
import './products.css';
import {LargeScreen, SmallScreen} from "../Common/ScreenSizes";
import ImgWithLoader from "../Common/ImgWithLoader";

const SwitchComponent = ({even, src, title, dark, preText, listItems, height, children, marginTop, id}) => {
    return (
        <div className={'switch_root ' + (even ? '' : 'odd ') + (dark ? 'dark' : '')} id={id}>
            <SmallScreen>
                <h4 style={{margin: 'auto'}}>{title}</h4>
                {preText ? preText.split('\n').map((item, index) => (index === 0 ?
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
                        <p style={{
                            marginLeft: 10,
                            marginRight: 10,
                            alignSelf: 'flex-end'
                        }}>{item}</p>
                    </div> :
                    <p key={index}>{item}</p>)) :
                    <ImgWithLoader src={'/images/' + src} alt={''} style={{
                        maxWidth: '50%',
                        objectFit: 'contain',
                        marginTop: marginTop || 0,
                        maxHeight: 100,
                        alignSelf: 'center'
                    }}/>}
                {listItems && <span className={'h4 small'}>מאפיינים ייחודיים</span>}
                {listItems && <ul>
                    {listItems.map((item, index) => <li key={index}>
                        {item}
                    </li>)}
                </ul>}
                {children}
            </SmallScreen>
            <LargeScreen>
                <div style={{
                    height: height || 300,
                    paddingLeft: 40, paddingRight: 40,
                    marginTop: marginTop || 80,
                    justifyContent: 'flex-start',
                    display: 'flex'
                }}>
                    <ImgWithLoader src={'/images/' + src} alt={''} style={{
                        objectFit: 'contain',
                        height: '100%',
                        objectPosition: 'left',
                        alignSelf: 'flex-start'
                    }}/>
                </div>
                <div style={{
                    background: 'white',
                    width: '50%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    padding: 20
                }}>
                    <span className={'h4'}>{title}</span>
                    {preText && preText.split('\n').map((item, index) => <p className={'product_paragraph'} key={index}>{item}</p>)}
                    {listItems && <span className={'h4 small'}>מאפיינים ייחודיים</span>}
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