import React, {Component} from 'react';
import InfoPanel from "../AboutPage/InfoPanel";
import {
    automation,
    holistic, modular, quickInstall,
    stayInTouch,
} from "./TextBlocks";
import EnergySavingPanel from "./EnergySavingPanel";
import AppPanel from "./AppPanel";
import ReliableSystem from "./ReliableSystem";
import '../Common/common.css';
import {about3, aboutFeatures, aboutInstall} from "../AboutPage/TextBlocks";
import {LargeScreen, SmallScreen} from "../Common/ScreenSizes";
import ImgWithLoader from "../Common/ImgWithLoader";

class AdvantagesPage extends Component {
    constructor(props) {
        super(props);
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <div style={{width: '100%', display: 'flex', flexDirection: 'column'}}>
                <div className={'page_top_root'}>
                    <img className={'page_top_img'} src={'/images/banner_adva2.jpg'} alt={''} />
                    <div className={'page_top_bg'}>
                        <span className={'page_top_text'}>יתרונות</span>
                    </div>
                </div>
                <InfoPanel marginTop={30} even={false} text={holistic}
                           title={'פתרון רחב וכולל'}
                           image={'igh2_0.png'}/>
                <InfoPanel even={true} marginTop={30} text={automation} title={'אוטומציה'}
                           image={'auto3.png'}/>
                <InfoPanel marginTop={30} even={false} text={stayInTouch}
                           title={'דירה ששומרת קשר איתנו'}
                           image={'intouch_0.png'}/>
                <SmallScreen>
                    <div style={{
                        width: '100%',
                        paddingLeft: '20%',
                        paddingRight: '20%',
                    }}>
                        <h4 style={{textAlign: 'right'}}>התקנות</h4>
                        <ul>
                            {aboutInstall.map((item, index) =>
                                <li
                                    key={index}>{item}</li>)}
                        </ul>
                    </div>
                </SmallScreen>
                <LargeScreen>
                    <div style={{
                        width: '100%',
                        paddingLeft: '20%',
                        paddingRight: '20%',
                        marginTop: 80,
                        flexDirection: 'row-reverse',
                        display: 'flex'
                    }}>
                        <div style={{flex: 1}}>
                            <h4 style={{textAlign: 'right'}}>התקנות</h4>
                            <ul>
                                {aboutInstall.map((item, index) =>
                                    <li
                                        key={index}>{item}</li>)}
                            </ul>
                        </div>
                        <ImgWithLoader src={'/images/building2.png'} alt={''} style={{
                            marginLeft: 10,
                            width: '40%',
                            objectFit: 'scale-down',
                            marginTop: 100,
                            alignSelf: 'flex-start'
                        }}/>
                    </div>
                </LargeScreen>


                <InfoPanel even={true} image={'app6_0.png'} title={'ללא מערכת עיבוד מרכזית'}
                           text={about3}/>
                <div style={{
                    width: '100%',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    backgroundAttachment: 'fixed',
                    backgroundSize: 'cover',
                    backgroundImage: 'url(/images/mesh_0.jpg)',
                }}>
                    <div style={{
                        width: '100%',
                        height: '100%',
                        background: 'rgba(0,0,0,0.5)',
                        padding: '50px 50px 50px 10%',
                    }}>
                        <span style={{fontSize: '2em', color: 'white'}}>מאפיינים מיוחדים</span>
                        <ul className={'features_list_root'}>
                            {aboutFeatures.map((item, index) => <li
                                style={{color: 'white', textAlign: 'right'}}
                                key={index}>{item}</li>)}
                        </ul>
                    </div>
                </div>
                <EnergySavingPanel />
                <InfoPanel marginTop={30} even={false} text={modular}
                           title={'מודולריות'}
                           image={'quickinstall.png'}/>
                <InfoPanel marginTop={30} even={true} text={quickInstall}
                           title={'התקנה פשוטה ומהירה'}
                           image={'install.png'}/>
                <AppPanel />
                <ReliableSystem />
            </div>
        );
    }
}

export default AdvantagesPage;