import React from 'react';
import MediaQuery from 'react-responsive';

export const SmallScreen = ({children}) => {
    return (
        <MediaQuery maxDeviceWidth={850}>
            {children}
        </MediaQuery>
    );
};

export const LargeScreen = ({children}) => {
    return (
        <MediaQuery minDeviceWidth={850}>
            {children}
        </MediaQuery>
    );
};