import React from 'react';
import {withRouter} from "react-router-dom";

const HeaderUnit = ({product, dark, history, productsSelector}) => {
    return (
        <div style={{
            height: 200,
            marginTop: 30,
            display: 'flex',
            flexDirection: 'column',
            cursor: 'pointer'
        }} onClick={() => {
            history.push('/products#' + product.url);
            productsSelector(false);
        }}>
            <span style={{color: dark ? 'white' : 'black', fontWeight: 'bold'}}>{product.text}</span>
            <img style={{flex: 1, overflow: 'hidden', width: 130, objectFit: 'contain', padding: 10}} alt={''} src={'/images/' + (dark ? product.blackImage : product.whiteImage)} />
            <img style={{display: 'none'}} src={'/images/' + product.blackImage} alt={''} />
        </div>
    );
};

export default withRouter(HeaderUnit);