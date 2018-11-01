import React from 'react';
import ImgWithLoader from "./ImgWithLoader";
import './common.css';

const PanoramicPage = ({topImage, pageIcon, title, children}) => {
    return (
        <div style={{width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'flex-start'}}>
            <div className={'page_top_root'}>
                <ImgWithLoader className={'page_top_img'} src={'/images/' + topImage}/>
                <div className={'page_top_bg'}>
                        <div className={'page_top_text panoramic'} style={{display: 'flex', justifyContent: 'center'}}>
                            <img
                                src={'/images/' + pageIcon}
                                style={{width: 50, height: 50, alignSelf: 'center'}}
                                alt={''}/><span style={{marginTop: 15}}>{title}</span></div>
                </div>
            </div>
            <div style={{height: 20}}/>
            {children}
        </div>
    );
};

export default PanoramicPage;