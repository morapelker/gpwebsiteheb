import React, {Component} from 'react';
import './App.css';
import Header from "./components/Header/Header";
import HomePage from "./components/HomePage/HomePage";
import {library} from '@fortawesome/fontawesome-svg-core'
import {fab} from '@fortawesome/free-brands-svg-icons'

library.add(fab);

class App extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {shrinked: false};
    }

    handleScroll = ({target}) => {
        const {scrollTop} = target.scrollingElement ? target.scrollingElement : target.documentElement;
        const shrinked = scrollTop > 100;
        if (this.state.shrinked !== shrinked) {
            this.setState({
                shrinked
            });
        }
    };

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll)
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll)
    }

    render() {
        return (
            <div className="App">
                <div style={{
                    position: 'absolute',
                    left: 0,
                    top: 0,
                    width: '100%'
                }}>
                    <HomePage/>
                </div>
                <Header shrinked={this.state.shrinked}/>
            </div>
        );
    }
}

export default App;
