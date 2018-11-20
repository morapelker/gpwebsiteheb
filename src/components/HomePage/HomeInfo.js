import React from 'react';
import ImgWithLoader from "../Common/ImgWithLoader";

const HomeInfo = ({info, history}) => {
    return (
        <div style={{padding: 30, minWidth: 300, width: '33%', cursor: 'pointer'}} onClick={() => {
            history.push('/' + info.link);
        }} >
            <ImgWithLoader src={'images/' + info.image} style={{objectFit: 'contain'}} alt={''}/>
            <h4 className={'info_title'}>{info.title}<span
                style={{color: 'green'}}> ירוק</span><span> וחכם</span></h4>
            <span className={'info_text'}>{info.text}</span>
            <p/>
        </div>
    );
};

export default HomeInfo;