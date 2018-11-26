import React from 'react';
import './products.css';
import {LargeScreen, SmallScreen} from "../Common/ScreenSizes";
import ImgWithLoader from "../Common/ImgWithLoader";

const SwitchComponent = ({even, src, title, dark, preText, listItems, height, children, marginTop, id}) => {
    const titleAbove = (id === 'glass' || id === 'keypad');
    return (
        <div className={'switch_root ' + (even ? '' : 'odd ') + (dark ? 'dark' : '')} id={id}>
            <SmallScreen>
                {titleAbove && <h4 style={{margin: 'auto'}}>{title}</h4>}
                {preText ? preText.split('\n').map((item, index) => (index === 0 ?
                    <div key={index} style={{
                        display: 'flex',
                        width: '100%',
                        flexDirection: 'row'
                    }}>
                        <ImgWithLoader src={'/images/' + src} alt={''} style={{
                            maxWidth: '50%',
                            objectFit: 'contain',
                            marginTop: 0,
                            maxHeight: 100,
                            alignSelf: 'center'
                        }}/>
                        <div>
                            {!titleAbove &&
                            <h4 style={{margin: '0 20px', textAlign: 'right'}}>{title}</h4>}
                            <p style={{
                                marginLeft: 10,
                                marginRight: 10,
                                alignSelf: 'flex-end'
                            }}>{item}</p>
                        </div>
                    </div> :
                    <p key={index}>{item}</p>)) :
                    <ImgWithLoader src={'/images/' + src} alt={''} style={{
                        maxWidth: '50%',
                        objectFit: 'contain',
                        marginTop: marginTop || 0,
                        maxHeight: 100,
                        alignSelf: 'center'
                    }}/>}
                <p/>
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
                    marginTop: marginTop || 80,
                    justifyContent: 'flex-end',
                    width: 200,
                    display: 'flex'
                }}>
                    <ImgWithLoader src={'/images/' + src} alt={''} style={{
                        objectFit: 'contain',
                        height: '100%',
                        objectPosition: 'top',
                        maxWidth: '100%',
                        alignSelf: 'flex-start'
                    }}/>
                </div>
                <div style={{
                    background: 'white',
                    width: '50%',
                    display: 'flex',
                    marginRight: 50,
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    padding: 20
                }}>
                    <span className={'h4'}>{title}</span>
                    {preText && preText.split('\n').map((item, index) => <p
                        className={'product_paragraph'} key={index}>{item}</p>)}
                    <p/>

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