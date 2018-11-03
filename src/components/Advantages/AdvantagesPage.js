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