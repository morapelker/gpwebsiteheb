import React from 'react';

const HomeInfo = ({info}) => {
    return (
        <div style={{padding: 30, width: 300}}>
            <img src={'images/' + info.image} style={{}} alt={''} />
        </div>
    );
};

export default HomeInfo;