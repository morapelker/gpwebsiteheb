import React, {Component} from 'react';
import HomeRouter from "../HomePage/HomeRouter";
import Collapse from '@material-ui/core/Collapse';
import {withStyles} from '@material-ui/core/styles';

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
    constructor(props) {
        super(props);
        this.state = {
            showProducts: false
        };
    }

    showProducts = showProducts => {
        if (showProducts !== this.state.showProducts)
            this.setState({showProducts});
    };

    componentWillReceiveProps(props, context) {
        this.setState({showProducts: false});
    }

    render() {
        const {classes} = this.props;
        return (
            <div>
                <div style={{
                    ...ourStyles.root,
                    height: this.props.shrinked ? 30 : 50,
                    background: this.props.shrinked ? 'white' : 'rgba(255,255,255,0.85)',
                    paddingTop: 10,
                    paddingBottom: 10,
                    paddingLeft: 10
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
                <Collapse in={this.state.showProducts} classes={{container: classes.container}} style={{top: this.props.shrinked ? 50 : 70}}>
                    <div style={{
                        background: 'rgba(255,0,0,0.3)',
                        width: '100%',
                        minWidth: 450,
                        height: 300,
                        zIndex: 10
                    }}>

                    </div>
                </Collapse>
            </div>
        );
    }
}

export default withStyles(styles)(Header);