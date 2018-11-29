import React, {Component} from 'react';
import '../Common/common.css';
import PanoramicPage from "../Common/PanoramicPage";
import {hotelItems, hotelPreText} from "./TextBlocks";
import InfoPanel from "../AboutPage/InfoPanel";
import IntelligentRooms from "./IntelligentRooms";
import Advantages from "./Advantages";
import {LargeScreen} from "../Common/ScreenSizes";

class HotelPage extends Component {
    constructor(props) {
        super(props);
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <PanoramicPage title={'מלון חכם וירוק'} pageIcon={'hotel_icon_white.svg'}
                           topImage={'Executiveroom_0_0.jpg'}
            >
                <div className={'root_text_container'}>
                    {hotelPreText.split('\n').map((item, index) => <p key={index}
                                                                      style={{width: '100%', fontSize: '1.3em'}}>{item}</p>
                    )}
                </div>
                <InfoPanel marginTop={30} even={false} text={''}
                           title={hotelItems[0].title}
                           image={hotelItems[0].img}/>
                <IntelligentRooms />
                <Advantages />
                <div style={{
                    padding: '10vh 10vw',
                    width: '100%',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    backgroundAttachment: 'fixed',
                    backgroundSize: 'cover',
                    backgroundImage: 'url(/images/pool.jpg)',
                    display: 'flex',
                }}>
                    <LargeScreen>
                        <div style={{width: '50%'}} />
                    </LargeScreen>
                    <div style={{
                        background: 'rgba(0,0,0,0.7)',
                        flex: 1,
                        height: '100%',
                        padding: 30,
                        display: 'flex',
                        flexDirection: 'column'
                    }}>
                        <h4 style={{color: 'white', marginTop: 0}}>{hotelItems[3].title}</h4>
                        <ul style={{margin: 0, padding: 0}}>
                            {hotelItems[3].text.split('\n').map((item, index) => <li key={index}
                                                                                     style={{color: 'white'}}>
                                {item}
                            </li>)}
                        </ul>
                    </div>
                </div>
            </PanoramicPage>
        );
    }
}

export default HotelPage;