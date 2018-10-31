import React, {Component} from 'react';
import InfoPanel from "../AboutPage/InfoPanel";
import {
    automation,
    holistic,
    stayInTouch,
} from "./TextBlocks";
import EnergySavingPanel from "./EnergySavingPanel";
import QuickInstallationPanel from "./QuickInstallationPanel";
import AppPanel from "./AppPanel";
import ReliableSystem from "./ReliableSystem";
import '../Common/common.css';

class AdvantagesPage extends Component {
    constructor(props, context) {
        super(props, context);
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <div style={{width: '100%', display: 'flex', flexDirection: 'column'}}>
                <div className={'page_top_root'}>
                    <img className={'page_top_img'} src={'/images/banner_adva2.jpg'} alt={''} />
                    <div className={'page_top_bg'}>
                        <span className={'page_top_text'}>Advantages</span>
                    </div>
                </div>
                <InfoPanel marginTop={0} even={false} text={holistic}
                           title={'One holistic solution'}
                           image={'igh2_0.png'}/>
                <InfoPanel even={true} marginTop={0} text={automation} title={'Automation'}
                           image={'auto3.png'}/>
                <InfoPanel marginTop={0} even={false} text={stayInTouch}
                           title={'A home that stays in touch with us'}
                           image={'intouch_0.png'}/>
                <EnergySavingPanel />
                <QuickInstallationPanel />
                <AppPanel />
                <ReliableSystem />
            </div>
        );
    }
}

export default AdvantagesPage;