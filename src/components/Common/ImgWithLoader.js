import React from 'react';
import RefreshIndicator from "./RefreshIndicator";
import Img from 'react-image'

const ImgWithLoader = (props) => {
    return (
        <Img style={props.style}
             src={props.src}
             alt={props.alt || ''}
             loader={<RefreshIndicator style={{
                marginTop: 10,
                 marginLeft: 10,
                 marginRight: 10,
             }} size={props.size || 20} color={props.color || 'black'} />} />
    );
};

export default ImgWithLoader;