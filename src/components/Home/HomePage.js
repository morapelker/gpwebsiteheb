import React, {Component} from 'react';
import PanoramicPage from "../Common/PanoramicPage";
import {homeBatch1, homeBatch2, homePreText} from "./TextBlocks";
import InfoPanel from "../AboutPage/InfoPanel";

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
                                                                     }}>{item}</p>
                    )}
                </div>
                <InfoPanel title={homeBatch1[0].title} text={homeBatch1[0].text}
                           image={homeBatch1[0].img} even={false} marginTop={30}/>
                <InfoPanel even={true} image={homeBatch2[0].img}
                           text={homeBatch2[0].text}
                           title={homeBatch2[0].title} marginTop={30}
                />
            </PanoramicPage>
        );
    }
}

export default HomePage;