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


class AdvantagesPage extends Component {
    constructor(props, context) {
        super(props, context);
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <div style={{width: '100%', display: 'flex', flexDirection: 'column'}}>
                <div style={{position: 'relative'}}>
                    <img src={'/images/banner_adva2.jpg'} alt={''}
                         style={{width: '100%', objectFit: 'cover'}}/>
                    <div style={{
                        position: 'absolute',
                        left: 0,
                        top: 0,
                        right: 0,
                        bottom: 0,
                        boxShadow: '0 0 10px 0 rgba(0,0,0,0.5)',
                        background: 'linear-gradient(to bottom,rgba(0,0,0,0) 0%,rgba(0,0,0,1) 100%)'
                    }}>
                        <span style={{
                            color: 'white',
                            position: 'absolute',
                            left: '20%',
                            bottom: '10%',
                            fontSize: '2.5em',
                        }}>Advantages</span>
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