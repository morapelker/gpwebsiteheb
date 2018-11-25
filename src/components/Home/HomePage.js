import React, {Component} from 'react';
import PanoramicPage from "../Common/PanoramicPage";
import Clock from "./Clock";
import ClockList, {getTime} from "./ClockList";
import {items} from "./TextBlocks";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import MatButton from "../Common/MatButton";
import './homepage.css';

class HomePage extends Component {
    constructor(props) {
        super(props);
        const d = new Date();
        this.state = {
            hours: d.getHours(),
            mins: d.getMinutes(),
            secs: d.getSeconds(),
            currentText: '',
            index: -1
        };
        window.scrollTo(0, 0);
    }

    componentDidMount() {
        this.timerId = setInterval(() => {
            const d = new Date();
            this.setState({
                hours: d.getHours(),
                mins: d.getMinutes(),
                secs: d.getSeconds()
            });
        }, 1000)
    }

    componentWillUnmount() {
        clearInterval(this.timerId);
    }

    itemClicked = index => {
        if (index > 7)
            index = 0;
        clearInterval(this.timerId);
        this.setState({
            index,
            currentText: items[index].text,
            hours: items[index].hour,
            mins: items[index].min,
            secs: items[index].hour * 60
        });
    };

    render() {
        return (
            <PanoramicPage title={'בית חכם וירוק'} pageIcon={'home_icon_white.svg'}
                           topImage={'home1.jpg'}
            >
                <div className={'home_root_container'}>
                    <Clock hours={this.state.hours} mins={this.state.mins} secs={this.state.secs}/>
                    <div style={{display: 'flex', width: '100%', flex: 1, overflow: 'auto', marginTop: 10}}>
                        <FontAwesomeIcon onClick={() => {
                            this.itemClicked(this.state.index + 1);
                        }} style={{
                            transition: '0.5s',
                            visibility: this.state.index === -1 ? 'hidden' : 'unset',
                            height: 40,
                            marginLeft: 0,
                            marginRight: 10,
                            marginTop: this.state.index <= 0 ? 0 : this.state.index * 40,
                            width: 30,
                        }} className={'icon'}
                                         icon={this.state.index === 7 ? 'arrow-circle-up' : 'arrow-circle-down'}
                        />
                        <ClockList activeItem={this.state.index} items={items}
                                   textChanged={this.itemClicked}/>
                        <div style={{flex: 1, marginRight: 10}}>
                            {this.state.currentText.length === 0 ? <MatButton onClick={() => {
                                    this.itemClicked(0);
                                }} backgroundColor={'default'}>התחל את היום</MatButton> :
                                <div>
                                    <span className={'h4'}>{getTime(this.state.hours, this.state.mins)}</span>
                                    {this.state.currentText.split('\n').map((item, index) =>
                                        <p key={index}>{item}</p>)}
                                </div>
                            }
                        </div>
                    </div>

                </div>
            </PanoramicPage>
        );
    }
}

export default HomePage;