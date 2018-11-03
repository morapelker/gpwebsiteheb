import React, {Component} from 'react';
import PanoramicPage from "../Common/PanoramicPage";
import {homeBatch1, homeBatch2, homePreText, homeTurnItOff} from "./TextBlocks";
import InfoPanel from "../AboutPage/InfoPanel";
import {LargeScreen} from "../Common/ScreenSizes";

class HomePage extends Component {
    constructor(props) {
        super(props);
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <PanoramicPage title={'בית חכם וירוק'} pageIcon={'home_icon_white.svg'}
                           topImage={'home1.jpg'}
            >
                <div className={'root_text_container'}>
                    {homePreText.split('\n').map((item, index) => <p key={index}
                                                                     style={{
                                                                         width: '100%',
                                                                         textAlign: 'left'
                                                                     }}>{item}</p>
                    )}
                </div>
                <InfoPanel title={homeBatch1[0].title} text={homeBatch1[0].text}
                           image={homeBatch1[0].img} even={false} marginTop={30}/>
                <InfoPanel title={homeBatch1[1].title} text={homeBatch1[1].text}
                           image={homeBatch1[1].img} even={true} marginTop={30}/>
                <div style={{
                    padding: '10vh 10vw',
                    width: '100%',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    backgroundAttachment: 'fixed',
                    backgroundSize: 'cover',
                    backgroundImage: 'url(/images/home2.jpg)',
                    display: 'flex',
                }}>
                    <div style={{
                        background: 'rgba(0,0,0,0.7)',
                        flex: 1,
                        height: '100%',
                        padding: 30,
                        display: 'flex',
                        flexDirection: 'column'
                    }}>
                        <h4 style={{color: 'white', marginTop: 0}}>Turn it Off so you don't have
                            to</h4>
                        {homeTurnItOff.split('\n').map((item, index) => <p key={index}
                                                                           style={{
                                                                               color: 'white',
                                                                               textAlign: 'left'
                                                                           }}>
                            {item}
                        </p>)}
                    </div>
                    <LargeScreen>
                        <div style={{width: '50%'}}/>
                    </LargeScreen>
                </div>
                {homeBatch2.map((item, index) => <InfoPanel key={index} even={index % 2 === 0} image={item.img}
                                                            text={item.text}
                                                            title={item.title} marginTop={index === 3 ? 0 : 30}
                />)}
            </PanoramicPage>
        );
    }
}

export default HomePage;