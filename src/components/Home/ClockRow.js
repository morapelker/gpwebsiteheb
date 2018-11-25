import React from 'react';
import ImgWithLoader from "../Common/ImgWithLoader";

const ClockRow = ({icon, time, rowClicked, active}) => {
    return (
        <div className={'clock_row'} style={{
            background: active ? '#c3c3c3' : 'white',
        }}
             onClick={rowClicked}>
            <ImgWithLoader style={{marginRight: 10, width: 30, height: 30}}
                           src={'/images/' + icon}/>
            <span style={{marginRight: 10, alignSelf: 'center'}}>{time}</span>
        </div>
    );
};

export default ClockRow;