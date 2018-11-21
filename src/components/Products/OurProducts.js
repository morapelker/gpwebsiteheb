import React from 'react';
import {products} from "../Header/TextBlocks";
import ImgWithLoader from "../Common/ImgWithLoader";
import {LargeScreen, SmallScreen} from "../Common/ScreenSizes";
import {withRouter} from "react-router-dom";

const OurProducts = ({history}) => {
    const productClicked = link => () => {
        history.push('/products#' + link);
    };
    return (
        <div style={{
            width: '100%',
        }}>
            <SmallScreen>
                <div style={{
                    width: '100%',
                    display: 'flex',
                    overflow: 'auto'
                }}>
                    {products.map((item, index) =>
                        <div
                            onClick={productClicked(item.url)}
                            className={'product_item_root'}
                            key={index}>
                            <span className={'product_title'} style={{textAlign: 'center', fontSize: '1.4em'}}>{item.text}</span>
                            <ImgWithLoader
                                src={'/images/' + item.blackImage} alt={''}
                                style={{height: 200, objectFit: 'contain'}}/>
                        </div>)}
                    <div style={{minWidth: 30, height: 5}} />
                </div>
            </SmallScreen>
            <LargeScreen>
                <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', overflow: 'auto'}}>
                    <div style={{display: 'flex', marginTop: 50}}>
                        {products.slice(0, 5).map((item, index) =>
                            <div
                                className={'product_item_root'}
                                onClick={productClicked(item.url)}
                                key={index}>
                                <span style={{textAlign: 'center'}}>{item.text}</span>
                                <ImgWithLoader
                                    src={'/images/' + item.blackImage} alt={''}
                                    style={{maxWidth: '100%', height: 200, objectFit: 'contain'}}/>
                            </div>)}
                    </div>
                    <div style={{display: 'flex', marginTop: 50}}>
                        {products.slice(5).map((item, index) =>
                            <div
                                className={'product_item_root'}
                                onClick={productClicked(item.url)} key={index}>
                                <span style={{width: '100%', textAlign: 'center'}}>{item.text}</span>
                                <ImgWithLoader
                                    src={'/images/' + item.blackImage} alt={''}
                                    style={{height: 200, objectFit: 'contain'}}/>
                            </div>)}
                    </div>
                </div>
            </LargeScreen>
        </div>
    );
};

export default withRouter(OurProducts);