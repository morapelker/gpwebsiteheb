import React from 'react';
import CircularProgress from "@material-ui/core/CircularProgress/CircularProgress";

const RefreshIndicator = ({size, style, color}) => {
    return (
        <CircularProgress style={{...style, color: color || 'purple'}} size={size} />
    );
};

export default RefreshIndicator;