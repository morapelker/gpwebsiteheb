import React, {Component} from 'react';
import MainSlideShow from "./MainSlideShow";
import HomeInfo from "./HomeInfo";
import AboutSection from "./AboutSection";
import InfoCenterSection from "./InfoCenterSection";
import QuoteSection from "./QuoteSection";

const info = [
    {
        title: 'Intelligent Green Office',
        text: 'GreenPoint systems redefine the entire working environment and working experience, making your day much more joyful and efficient at the office.',
        image: 'office_icon.svg',
        link: 'office'
    }, {
        title: 'Intelligent Green Hotel',
        text: 'Intelligent room occupancy detection system that makes decision based on a door magnet and a PIR detector, allowing separate WELCOME and GOODBYE scenario...',
        image: 'hotel_icon.svg',
        link: 'hotel'
    }, {
        title: 'Intelligent Green Home',
        text: 'Close your shutter at night, open it slightly in the morning, close it while you are at work or even manage the room temperature and light automatically by...',
        image: 'home_icon.svg',
        link: 'home'
    }
];

class HomePage extends Component {
    constructor(props, context) {
        super(props, context);
        window.scrollTo(0, 0);
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
                    <div style={{
                        width: '100%',
                        display: 'flex',
                        flexWrap: 'wrap',
                        justifyContent: 'center'
                    }}>
                        {info.map((info, index) => <HomeInfo info={info} key={index}/>)}
                    </div>
                    <div
                        style={{width: '100%', height: 0, paddingTop: '50%', position: 'relative'}}>
                        <iframe title={'IGH Product Introduction'} style={{
                            position: 'absolute', left: 0, top: 0, right: 0, bottom: 0,
                            width: '100%', height: '100%'
                        }}
                                allowFullScreen="allowfullscreen"
                                src="https://www.youtube.com/embed/P1U-8Mgi-yw">
                        </iframe>
                    </div>
                    <AboutSection/>
                    <InfoCenterSection/>
                    <QuoteSection/>
                </div>
            </div>
        );
    }
}

export default HomePage;