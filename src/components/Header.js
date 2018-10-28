import React, {Component} from 'react';
import HomeRouter from "./HomePage/HomeRouter";

const styles = {
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
        location: '/about'
    }, {
        label: 'Products',
        location: '/about'
    }, {
        label: 'Information Center',
        location: '/about'
    }, {
        label: 'Apps',
        location: '/about'
    }, {
        label: 'FAQ',
        location: '/about'
    }, {
        label: 'Contact',
        location: '/about'
    }
];


class Header extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {};
    }

    render() {
        return (
            <div style={{
                ...styles.root,
                height: this.props.shrinked ? 30 : 50,
                background: this.props.shrinked ? 'white' : 'rgba(255,255,255,0.85)',
                paddingTop: 10,
                paddingBottom: 10,
                paddingLeft: 10
            }}>
                <div style={{display: 'flex', height: '100%', width: '100%', maxWidth: 1230, margin: 'auto'}}>
                    <img src={'/images/logo_green_point.svg'} alt={''}
                         style={{height: '100%', maxWidth: '100%'}}/>
                    <HomeRouter items={items} />
                </div>

            </div>
        );
    }
}

export default Header;