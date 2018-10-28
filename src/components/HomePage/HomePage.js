import React, {Component} from 'react';
import MainSlideShow from "./MainSlideShow";
import HomeInfo from "./HomeInfo";

const info = [
    {
        title: 'Intelligent Green Office',
        text: 'GreenPoint systems redefine the entire working environment and working experience, making your day much more joyful and efficient at the office.',
        image: 'office_icon.svg'
    },{
        title: 'Intelligent Green Office',
        text: 'GreenPoint systems redefine the entire working environment and working experience, making your day much more joyful and efficient at the office.',
        image: 'office_icon.svg'
    },{
        title: 'Intelligent Green Office',
        text: 'GreenPoint systems redefine the entire working environment and working experience, making your day much more joyful and efficient at the office.',
        image: 'office_icon.svg'
    }
];

class HomePage extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {};
    }

    render() {
        return (
            <div style={{width: '100%'}}>
                <MainSlideShow/>
                <div style={{
                    marginTop: 10,
                    height: 1000,
                    width: '100%'
                }}>
                    <div style={{width: '100%', display: 'flex', flexWrap: 'wrap', justifyContent: 'center'}}>
                        {info.map((info, index) => <HomeInfo info={info} key={index} /> )}
                    </div>
                </div>
            </div>
        );
    }
}

export default HomePage;