import React from 'react';
import MediaQuery from 'react-responsive';

export const SmallScreen = ({children}) => {
    return (
        <MediaQuery maxWidth={950}>
            {children}
        </MediaQuery>
    );
};

export const LargeScreen = ({children}) => {
    return (
        <MediaQuery minWidth={951}>
            {children}
        </MediaQuery>
    );
};