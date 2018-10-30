import React from 'react';
import MatButton from "../Common/MatButton";

const HomeInfo = ({info}) => {
    return (
        <div style={{padding: 30, minWidth: 300, width: '33%'}}>
            <img src={'images/' + info.image} style={{objectFit: 'contain'}} alt={''} />
            <h4 style={{textAlign: 'center'}}>{info.title}</h4>
            <span>{info.text}</span>
            <p/>
            <MatButton type={'secondary'} backgroundColor={'default'}>
                Read More
            </MatButton>
        </div>
    );
};

export default HomeInfo;