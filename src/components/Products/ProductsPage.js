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
    downloadKeypad,
    downloadSensor,
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

class ProductsPage extends Component {

    scrollCorrectly = (hash, animated) => {
        const behavior = animated ? 'smooth' : undefined;
        if (!hash || hash.length === 0) {
            window.scrollTo({
                top: 0,
                behavior
            });
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
                    window.scrollTo({
                        top: top - 40,
                        behavior
                    });
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
                <div style={{position: 'relative'}}>
                    <img src={'/images/product_banner1_2.jpg'} alt={''}
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
                        }}>Our Products</span>
                    </div>
                </div>
                <LoadControl/>
                <SwitchComponent id={'light'} even={true} dark={true} src={'lightwhite.png'}
                                 title={'Light Switch'}
                                 preText={dimmerPre}
                                 listItems={dimmerItems}
                />
                <SwitchComponent id={'shutter'} even={false} dark={true} src={'shutterwhite.png'}
                                 title={'Shutter Switch'}
                                 preText={shutterPre}
                                 listItems={shutterItems}
                />
                <SwitchComponent id={'power'} even={true} dark={false} src={'powerwhite.png'}
                                 title={'Power Switch'}
                                 preText={powerPre}
                                 listItems={powerItems}
                />
                <div id={'sense'} style={{
                    width: '100%',
                    marginTop: 50,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    backgroundAttachment: 'fixed',
                    backgroundSize: 'cover',
                    position: 'relative',
                    backgroundImage: 'url(/images/office8_1.jpg)',
                }}>
                    <SwitchComponent even={false} dark={2} src={'sensewhite.png'}
                                     title={'Sense Switch'}
                                     preText={sensePre}
                                     listItems={senseItems}
                    />
                </div>
                <div id={'sensor'} style={{
                    width: '100%',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    backgroundAttachment: 'fixed',
                    backgroundSize: 'cover',
                    position: 'relative',
                    backgroundImage: 'url(/images/products1.jpg)',
                }}>
                    <SwitchComponent even={true} dark={2} src={'sensorwhite.png'}
                                     title={'Environmental Sensor'}
                                     height={400}
                                     marginTop={30}
                                     preText={sensorPre}
                    >
                        <span className={'h4'}>Environmental Information</span>
                        <ul style={{textAlign: 'left'}}>
                            {sensorItems1.map((item, index) => <li key={index}>{item}</li>)}
                        </ul>
                        <span className={'h4'}>Self Sustainable</span>
                        <ul style={{textAlign: 'left'}}>
                            {sensorItems2.map((item, index) => <li key={index}>{item}</li>)}
                        </ul>
                        <span className={'h4'}>Easy Installation</span>
                        <ul style={{textAlign: 'left'}}>
                            {sensorItems3.map((item, index) => <li key={index}>{item}</li>)}
                        </ul>
                        <MatButton backgroundColor={'default'}
                                   style={{
                                       alignSelf: 'center',
                                       marginTop: 30
                                   }}>{downloadSensor}</MatButton>
                    </SwitchComponent>
                    <SwitchComponent id={'irbridge'} even={false}
                                     dark={2}
                                     src={'irwhite.png'}
                                     title={'IR Bridge'}
                                     preText={irPre}
                                     height={300}
                                     listItems={irItems}
                    >
                        <MatButton backgroundColor={'default'}
                                   style={{
                                       alignSelf: 'center',
                                       marginTop: 30
                                   }}>{downloadIR}</MatButton>
                    </SwitchComponent>
                    <SwitchComponent id={'internetgateway'} even={true}
                                     dark={2}
                                     src={'ighcwhite.png'}
                                     title={'Internet Gateway'}
                                     preText={ighcStrings[0]}
                                     height={300}
                    >
                        <p className={'h4'}>{ighcStrings[1]}</p>
                        <p>{ighcStrings[2]}</p>
                        <p className={'h4'}>{ighcStrings[3]}</p>
                        <p>{ighcStrings[4]}</p>
                        <p className={'h4'}>{ighcStrings[5]}</p>
                        <MatButton backgroundColor={'default'}
                                   style={{
                                       alignSelf: 'center',
                                       marginTop: 30
                                   }}>{downloadIGHC}</MatButton>
                    </SwitchComponent>
                </div>
                <SwitchComponent
                    id={'keypad'}
                    even={false}
                    dark={false}
                    src={'keypadwhite.png'}
                    title={'Intelligent Keypad'}
                    marginTop={30}
                    preText={keypadPre}
                >
                    <span className={'h4'}>Main Features</span>
                    {keypadItems.map((item, index) =>
                        <span key={index}
                              style={{textAlign: 'left'}}><strong>{item.sub}</strong>{item.text}</span>)}
                    <MatButton backgroundColor={'default'}
                               style={{
                                   alignSelf: 'center',
                                   marginTop: 30
                               }}>{downloadKeypad}</MatButton>
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
                    <span className={'h4'}>Smart Operation Features</span>
                    <span style={{fontSize: '1.3em'}}>Basic Operation</span>
                    {basicOper.map((item, index) =>
                        <span key={index}
                              style={{textAlign: 'left'}}><strong>{item.sub}</strong>{item.text}</span>)}
                    <p/>
                    <span style={{fontSize: '1.3em'}}>Advanced Operation</span>
                    {advancedOper.map((item, index) =>
                        <span key={index}
                              style={{textAlign: 'left'}}><strong>{item.sub}</strong>{item.text}</span>)}
                </div>
            </div>
        );
    }
}

export default withRouter(ProductsPage);