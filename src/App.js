import React, {Component} from 'react';
import './App.css';
import Header from "./components/Header/Header";
import HomePage from "./components/HomePage/HomePage";
import {library} from '@fortawesome/fontawesome-svg-core';
import {faQuoteRight, faPlus, faPaperPlane} from '@fortawesome/free-solid-svg-icons';
import {fab} from '@fortawesome/free-brands-svg-icons';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import AboutPage from "./components/AboutPage/AboutPage";
import AdvantagesPage from "./components/Advantages/AdvantagesPage";
import FaqPage from "./components/FAQ/FaqPage";
import ContactPage from "./components/Common/ContactPage";
import ProductsPage from "./components/Products/ProductsPage";
import NIY from "./components/NIY";

library.add(faQuoteRight, faPlus, fab, faPaperPlane);

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
                <BrowserRouter>
                    <div>
                        <div style={{
                            position: 'absolute',
                            left: 0,
                            top: 0,
                            width: '100%'
                        }}>
                            <Switch>
                                <Route exact path='/' component={HomePage}/>
                                <Route exact path='/about' component={AboutPage}/>
                                <Route exact path='/advantages' component={AdvantagesPage}/>
                                <Route exact path='/faq' component={FaqPage}/>
                                <Route exact path='/niy' component={NIY}/>
                                <Route path='/products' render={() => <ProductsPage shrinked={this.state.shrinked} />}/>
                            </Switch>
                            <ContactPage />
                        </div>
                        <Header shrinked={this.state.shrinked}/>
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;
