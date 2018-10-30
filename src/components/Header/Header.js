import React, {Component} from 'react';
import HomeRouter from "../HomePage/HomeRouter";
import Collapse from '@material-ui/core/Collapse';
import {withStyles} from '@material-ui/core/styles';
import HeaderUnit from "./HeaderUnit";

const styles = {
    container: {
        position: 'fixed',
        left: 0,
        right: 0,
        margin: 'auto',
        width: '50%',
        minWidth: 450,
        zIndex: 10,
    }
};

const ourStyles = {
    root: {
        width: '100%',
        position: 'fixed',
        transition: 'height 0.2s ease-out',
        left: 0,
        zIndex: 10,
        top: 0,
    }
};

const items = [
    {
        label: 'Home',
        location: '/'
    }, {
        label: 'About',
        location: '/about'
    }, {
        label: 'Advantages',
        location: '/advantages'
    }, {
        label: 'Products',
        location: '/products',
        hash: ''
    }, {
        label: 'Information Center',
        location: '/niy',
    }, {
        label: 'Apps',
        location: '/niy',
    }, {
        label: 'FAQ',
        location: '/faq'
    }, {
        label: 'Contact',
        location: '/niy'
    }
];

const products = [
    {
        text: 'Light Switch',
        whiteImage: 'lightwhite.png',
        blackImage: 'lightblack.png',
        url: 'light'
    }, {
        text: 'Shutter Switch',
        whiteImage: 'shutterwhite.png',
        blackImage: 'shutterblack.png',
        url: 'shutter'
    }, {
        text: 'Power Switch',
        whiteImage: 'powerwhite.png',
        blackImage: 'powerblack.png',
        url: 'power'
    }, {
        text: 'Sense Switch',
        whiteImage: 'sensewhite.png',
        blackImage: 'senseblack.png',
        url: 'sense'
    }, {
        text: 'Sensor',
        whiteImage: 'sensorwhite.png',
        blackImage: 'sensorblack.png',
        url: 'sensor'
    }, {
        text: 'IR Bridge',
        whiteImage: 'irwhite.png',
        blackImage: 'irblack.png',
        url: 'irbridge'
    }, {
        text: 'Internet Gateway',
        whiteImage: 'ighcwhite.png',
        blackImage: 'ighcblack.png',
        url: 'internetgateway'
    }, {
        text: 'Keypad',
        whiteImage: 'keypadwhite.png',
        blackImage: 'keypadblack.png',
        url: 'keypad'
    }
];

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showProducts: false,
            dark: false
        };
    }

    showProducts = showProducts => {
        if (showProducts !== this.state.showProducts)
            this.setState({showProducts});
    };

    render() {
        const {classes} = this.props;
        return (
            <div>
                <div style={{
                    ...ourStyles.root,
                    height: this.props.shrinked ? 50 : 70,
                    background: this.props.shrinked ? 'white' : 'rgba(255,255,255,0.85)',
                    paddingTop: 10,
                    paddingBottom: 10,
                    paddingLeft: 10,
                    borderBottom: this.props.shrinked ? '1px solid' : 'unset',
                }}>
                    <div style={{
                        display: 'flex',
                        height: '100%',
                        width: '100%',
                        maxWidth: 1230,
                        margin: 'auto'
                    }}>
                        <img src={'/images/logo_green_point.svg'} alt={''}
                             style={{height: '100%', maxWidth: '100%'}}/>
                        <HomeRouter items={items} productsSelector={this.showProducts}/>
                    </div>

                </div>
                <Collapse in={this.state.showProducts} onMouseLeave={() => {
                    this.setState({showProducts: false});
                }} classes={{container: classes.container}}
                          style={{top: this.props.shrinked ? 50 : 70}}>
                    <div style={{
                        width: '100%',
                        minWidth: 450,
                        paddingBottom: 30,
                        zIndex: 10,
                        display: 'flex',
                        borderBottomLeftRadius: 10,
                        borderBottomRightRadius: 10,
                        background: this.state.dark ? '#b3b3b3' : 'white'
                    }}>
                        <div style={{
                            flex: 1,
                            display: 'flex',
                            flexWrap: 'wrap',
                            justifyContent: 'space-evenly'
                        }}>
                            {products.map((product, index) =>
                                <HeaderUnit key={index}
                                            product={product}
                                            productsSelector={this.showProducts}
                                            dark={this.state.dark}/>)}
                        </div>
                        <div style={{
                            width: 80, height: 40, display: 'flex',
                            justifyContent: 'space-evenly',
                            paddingTop: 7
                        }}>
                            <span
                                onClick={() => {
                                    this.setState({dark: true});
                                }}
                                style={{
                                    width: 25,
                                    borderRadius: 10,
                                    borderWidth: 3,
                                    borderColor: this.state.dark ? '#00ff00' : 'black',
                                    height: 25,
                                    borderStyle: 'solid',
                                    background: 'black',
                                    cursor: 'pointer'
                                }}/>

                            <span
                                onClick={() => {
                                    this.setState({dark: false});
                                }}
                                style={{
                                    width: 25,
                                    borderWidth: 3,
                                    borderStyle: 'solid',
                                    borderRadius: 10,
                                    borderColor: this.state.dark ? 'white' : '#00ff00',
                                    height: 25,
                                    background: 'white',
                                    cursor: 'pointer'
                                }}/>
                        </div>

                    </div>
                </Collapse>
            </div>
        );
    }
}

export default withStyles(styles)(Header);