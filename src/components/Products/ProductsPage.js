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
    downloadSensor, glassItems,
    ighcStrings,
    irItems,
    irPre, keypadItems,
    keypadPre,
    powerItems,
    powerPre,
    senseItems,
    sensePre,
    sensorItems1,
    sensorItems2,
    sensorItems3,
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
                    if (hash === '#irbridge' || hash === '#internetgateway') {
                        const sensorTop = document.getElementById('sensor');
                        if (sensorTop)
                            top += sensorTop.offsetTop;
                        else
                            return;
                    }
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
                <SwitchComponent id={'light'} even={true} dark={true} src={'lightwhite.png'}
                                 title={'מפסק תאורה'}
                                 preText={dimmerPre}
                                 listItems={dimmerItems}
                />
                <SwitchComponent id={'shutter'} even={false} dark={true} src={'shutterwhite.png'}
                                 title={'מפסק תריסים/ווילונות'}
                                 preText={shutterPre}
                                 listItems={shutterItems}
                />
                <SwitchComponent id={'power'} even={true} dark={false} src={'powerwhite.png'}
                                 title={'מפסק כוח'}
                                 preText={powerPre}
                                 listItems={powerItems}
                />
                <div className={'sense_parent'} id={'sense'}>
                    <SwitchComponent even={false} dark={2} src={'sensewhite.png'}
                                     title={'מפסק סנס'}
                                     preText={sensePre}
                                     listItems={senseItems}
                    />
                </div>
                <div className={'sensor_parent'} id={'sensor'}>
                    <SwitchComponent even={true} dark={2} src={'sensorwhite.png'}
                                     title={'חיישן סביבתי'}
                                     height={400}
                                     marginTop={30}
                                     preText={sensorPre}
                    >
                        <span className={'h4'}>מידע סביבתי</span>
                        <ul>
                            {sensorItems1.map((item, index) => <li key={index}>{item}</li>)}
                        </ul>
                        <span className={'h4'}>עצמאי</span>
                        <ul>
                            {sensorItems2.map((item, index) => <li key={index}>{item}</li>)}
                        </ul>
                        <span className={'h4'}>התקנה פשוטה וגמישה</span>
                        <ul>
                            {sensorItems3.map((item, index) => <li key={index}>{item}</li>)}
                        </ul>
                        <a href={'/docs/sensor_manual.pdf'}>
                            <MatButton backgroundColor={'default'}
                                       style={{
                                           alignSelf: 'center',
                                           marginTop: 30
                                       }}>{downloadSensor}</MatButton>
                        </a>
                    </SwitchComponent>
                    <SwitchComponent id={'irbridge'} even={false}
                                     dark={2}
                                     src={'irwhite.png'}
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
                                     src={'ighcwhite.png'}
                                     title={'מגשר האינטרנט'}
                                     preText={ighcStrings[0]}
                                     height={300}
                    >
                        <p className={'h4'}>{ighcStrings[1]}</p>
                        <p>{ighcStrings[2]}</p>
                        <p className={'h4'}>{ighcStrings[3]}</p>
                        <p>{ighcStrings[4]}</p>
                        <p className={'h4'}>{ighcStrings[5]}</p>
                        <a href={'/docs/ighc_manual.pdf'}>
                            <MatButton backgroundColor={'default'}
                                       style={{
                                           alignSelf: 'center',
                                           marginTop: 30
                                       }}>{downloadIGHC}</MatButton>
                        </a>
                    </SwitchComponent>
                </div>
                <SwitchComponent
                    id={'keypad'}
                    even={false}
                    dark={false}
                    src={'keypadwhite.png'}
                    title={'לוח המקשים'}
                    marginTop={30}
                    preText={keypadPre}
                >
                    <span className={'h4'}>תכונות עיקריות:</span>
                    {keypadItems.map((item, index) =>
                        <span key={index}><strong>{item.sub}</strong>{item.text}</span>)}
                </SwitchComponent>
                <SwitchComponent
                    id={'glass'}
                    even={true}
                    dark={false}
                    src={'glasswhite.png'}
                    title={'פנלים מזכוכית'}
                    marginTop={30}
                >
                    <ul>
                        {glassItems.map((item, index) => <li key={index}>{item}</li>)}
                    </ul>
                </SwitchComponent>
                <div style={{
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    paddingLeft: '20%',
                    paddingRight: '20%',
                    paddingBottom: 100,
                    alignItems: 'center'
                }}>
                    <span className={'h4'}>הפעלות חכמות</span>
                    <span style={{fontSize: '1.3em', fontWeight: 'bold'}}>הפעלות בסיסיות</span>
                    {basicOper.map((item, index) =>
                        <span key={index}><strong>{item.sub}</strong>{item.text}</span>)}
                    <p/>
                    <span style={{fontSize: '1.3em', fontWeight: 'bold'}}>הפעלות מתקדמות</span>
                    {advancedOper.map((item, index) =>
                        <span key={index}><strong>{item.sub}</strong>{item.text}</span>)}
                </div>
            </div>
        );
    }
}

export default withRouter(ProductsPage);