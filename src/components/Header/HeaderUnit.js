import React from 'react';

const HeaderUnit = ({product, dark}) => {
    return (
        <div style={{
            height: 200,
            width: 130,
            marginTop: 30,
            display: 'flex',
            flexDirection: 'column'
        }}>
            <span style={{color: dark ? 'white' : 'black', fontWeight: 'bold'}}>{product.text}</span>
            <img style={{flex: 1, overflow: 'hidden', objectFit: 'contain', padding: 10}} alt={''} src={'/images/' + (dark ? product.blackImage : product.whiteImage)} />
            <img style={{display: 'none'}} src={'/images/' + product.blackImage} alt={''} />
        </div>
    );
};

export default HeaderUnit;