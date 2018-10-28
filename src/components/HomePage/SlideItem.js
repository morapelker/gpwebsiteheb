import React from 'react';
import './router.css';

const SlideItem = ({item}) => {
    return (
        <div style={{width: '100%', height: '100%'}}>
            <img src={item.source} alt={''} style={{width: '100%', height: '100%', objectFit: 'cover'}}/>
            <div style={{
                position: 'absolute',
                left: 0,
                top: 0,
                right: 0,
                background: 'rgba(0,0,0,0.35)',
                bottom: 0,
            }}>
                <div style={{
                    margin: 'auto',
                    display: 'flex',
                    height: '100%',
                    flexDirection: 'column',
                    position: 'relative',
                    width: '100%',
                    maxWidth: 1200,
                    justifyContent: 'center'
                }}>
                    <h4>
                        <span className={'title'}>{item.title}</span>
                    </h4>
                    {item.text.map((line, index) =>
                        <span key={index} className={'text'}>{line}</span>)}
                </div>
            </div>
        </div>
    );
};

export default SlideItem;