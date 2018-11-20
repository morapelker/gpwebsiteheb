import React, {Component} from 'react';
import LoadControl from "./LoadControl";
import SwitchComponent from "./SwitchComponent";
import {
    advancedOper,
    basicOper,
    dimmerItems,
    dimmerPre,
    downloadIGHC,
    downloadIR,
    downloadSensor, glassItems, glassText, ighcItems,
    ighcStrings,
    irItems,
    irPre, keypadItems,
    keypadPre,
    powerItems,
    powerPre,
    senseItems,
    sensePre,
    sensorPre,
    shutterItems,
    shutterPre
} from "./TextBlocks";
import MatButton from "../Common/MatButton";
import {withRouter} from "react-router-dom";
import '../Common/common.css';
import './products.css';

class ProductsPage extends Component {

    scrollCorrectly = (hash, animated) => {
        const behavior = animated ? 'smooth' : undefined;
        if (!hash || hash.length === 0) {
            try {
                window.scroll({
                    top: 0,
                    left: 0,
                    behavior
                });
            } catch {
                window.scroll(0, 0);
            }

        } else {
            if (hash.length > 0) {
                let top = document.getElementById(hash.substring(1));
                if (top) {
                    top = top.offsetTop;

                    try {
                        window.scroll({
                            top: top - 40,
                            left: 0,
                            behavior
                        });
                    } catch {
                        window.scroll(0, top - 40);
                    }

                }
            }
        }
    };

    componentDidMount() {
        this.scrollCorrectly(this.props.location.hash, false);
    }

    componentDidUpdate(prevProps, prevState, _) {
        if (prevProps.shrinked === this.props.shrinked)
            this.scrollCorrectly(this.props.location.hash, true);

    }

    render() {
        return (
            <div style={{width: '100%', display: 'flex', flexDirection: 'column'}}>
                <div className={'page_top_root'}>
                    <img className={'page_top_img'} src={'/images/product_banner1_2.jpg'} alt={''}/>
                    <div className={'page_top_bg'}>
                        <span className={'page_top_text'}>המוצרים שלנו</span>
                    </div>
                </div>
                <LoadControl/>
                <SwitchComponent id={'light'} even={true} dark={false} src={'lightblack.png'}
                                 title={'מפסק תאורה'}
                                 preText={dimmerPre}
                                 listItems={dimmerItems}
                />
                <SwitchComponent id={'shutter'} even={true} dark={false} src={'shutterblack.png'}
                                 title={'מפסק תריסים/ווילונות'}
                                 preText={shutterPre}
                                 listItems={shutterItems}
                />
                <SwitchComponent id={'power'} even={true} dark={false} src={'powerblack.png'}
                                 title={'מפסק כוח'}
                                 preText={powerPre}
                                 listItems={powerItems}
                />
                <SwitchComponent id={'sense'} even={true} dark={2} src={'senseblack.png'}
                                 title={'מפסק סנס'}
                                 preText={sensePre}
                                 listItems={senseItems}
                />
                <SwitchComponent id={'sensor'} even={true} dark={2} src={'sensorblack.png'}
                                 title={'חיישן סביבתי'}
                                 height={300}
                                 marginTop={30}
                                 preText={sensorPre}
                >

                    <a href={'/docs/sensor_manual.pdf'}>
                        <MatButton backgroundColor={'default'}
                                   style={{
                                       alignSelf: 'center',
                                       marginTop: 30
                                   }}>{downloadSensor}</MatButton>
                    </a>
                </SwitchComponent>
                <SwitchComponent id={'irbridge'} even={true}
                                 dark={2}
                                 src={'irblack.png'}
                                 title={'מגשר אינפרה אדום'}
                                 preText={irPre}
                                 height={300}
                                 listItems={irItems}
                >
                    <a href={'/docs/ir_manual.pdf'}>
                        <MatButton backgroundColor={'default'}
                                   style={{
                                       alignSelf: 'center',
                                       marginTop: 30
                                   }}>{downloadIR}</MatButton>
                    </a>
                </SwitchComponent>
                <SwitchComponent id={'internetgateway'} even={true}
                                 dark={2}
                                 src={'ighcblack.png'}
                                 title={'מגשר האינטרנט'}
                                 preText={ighcStrings[0]}
                                 height={300}
                                 listItems={ighcItems}
                >
                    <a href={'/docs/ighc_manual.pdf'}>
                        <MatButton backgroundColor={'default'}
                                   style={{
                                       alignSelf: 'center',
                                       marginTop: 30
                                   }}>{downloadIGHC}</MatButton>
                    </a>
                </SwitchComponent>
                <SwitchComponent
                    id={'keypad'}
                    even={true}
                    dark={false}
                    src={'keypadblack.png'}
                    title={'לוח המקשים'}
                    preText={keypadPre}
                    marginTop={1}
                    listItems={keypadItems}
                >
                </SwitchComponent>
                <SwitchComponent
                    id={'glass'}
                    even={true}
                    dark={false}
                    src={'glassblack.png'}
                    title={'מפסקי מגע מזכוכית קריסטלית'}
                    marginTop={80}
                >
                    {glassText.split('\n').map((item, index) => <p className={'product_paragraph'} key={index}>{item}</p>)}
                    <ul>
                        {glassItems.map((item, index) => <li key={index}>{item}</li>)}
                    </ul>
                </SwitchComponent>
            </div>
        );
    }
}

export default withRouter(ProductsPage);