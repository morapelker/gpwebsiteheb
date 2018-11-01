import React, {Component} from 'react';
import {officePreText} from "./TextBlocks";
import PanoramicPage from "../Common/PanoramicPage";

class OfficePage extends Component {
    constructor(props) {
        super(props);
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <PanoramicPage title={'Intelligent Green Office'} pageIcon={'office_icon_white.svg'}
                           topImage={'office.jpg'}
            >
                <div className={'root_text_container'}>
                    {officePreText.split('\n').map((item, index) => <p key={index}
                                                                     style={{
                                                                         width: '100%',
                                                                         textAlign: 'left'
                                                                     }}>{item}</p>
                    )}
                </div>
            </PanoramicPage>
        );
    }
}

export default OfficePage;