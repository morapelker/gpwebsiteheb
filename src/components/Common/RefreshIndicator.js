import React from 'react';
import CircularProgress from "@material-ui/core/CircularProgress/CircularProgress";

const RefreshIndicator = ({size, style}) => {
    return (
        <CircularProgress style={{...style, color: 'purple'}} size={size} />
    );
};

export default RefreshIndicator;