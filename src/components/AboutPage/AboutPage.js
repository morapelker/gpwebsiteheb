import React, {Component} from 'react';
import {
    about1,
    about2,
    aboutCustomers,
    aboutSupport,
} from "./TextBlocks";
import MatButton from "../Common/MatButton";
import InfoPanel from "./InfoPanel";
import {SmallScreen, LargeScreen} from "../Common/ScreenSizes";
import '../Common/common.css'
import ImgWithLoader from "../Common/ImgWithLoader";

class AboutPage extends Component {
    constructor(props) {
        super(props);
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <div style={{width: '100%', display: 'flex', flexDirection: 'column'}}>
                <div className={'page_top_root'}>
                    <img className={'page_top_img'} src={'/images/abouttop.jpg'} alt={''}/>
                    <div className={'page_top_bg'}>
                        <span className={'page_top_text'}>אודות</span>
                    </div>
                </div>
                <div style={{
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    paddingLeft: '20%',
                    paddingRight: '20%',
                    marginTop: 20
                }}>
                    {about1.split('\n').map((item, index) => <span
                        style={{width: '100%', fontSize: '1.5em'}} key={index}>{item}</span>)}
                </div>
                <div style={{
                    width: '100%',
                    display: 'flex',
                    paddingLeft: '20%',
                    paddingRight: '20%',
                    marginTop: 10
                }}>
                    <div style={{flex: 1, textAlign: 'justify'}}>
                        <SmallScreen>
                            {about2.split('\n').map((item, index) => (index === 0 ?
                                <div key={index} style={{display: 'flex', width: '100%'}}>
                                    <p
                                        style={{flex: 1, alignSelf: 'flex-end'}}>{item}</p>
                                    <ImgWithLoader src={'/images/intro.png'} alt={''} style={{
                                        marginLeft: 10,
                                        width: '40%',
                                        objectFit: 'scale-down',
                                        alignSelf: 'flex-start'
                                    }}/>
                                </div>
                                : <p
                                    style={{width: '100%'}}
                                    key={index}>{item}</p>))}
                        </SmallScreen>
                        <LargeScreen>
                            {about2.split('\n').map((item, index) => <p
                                style={{width: '100%'}} key={index}>{item}</p>)}
                        </LargeScreen>
                        <a href={'/docs/introduction-he.pdf'}>
                            <MatButton backgroundColor={'default'}
                                       style={{width: '30%', minWidth: 200, fontSize: '1em'}}>
                                להורדת פרוספקט
                            </MatButton>
                        </a>
                    </div>
                    <LargeScreen>
                        <ImgWithLoader src={'/images/intro.png'} alt={''} style={{
                            marginLeft: 10,
                            width: '40%',
                            objectFit: 'scale-down',
                            marginTop: 100,
                            alignSelf: 'flex-start'
                        }}/>
                    </LargeScreen>
                </div>



                <InfoPanel marginTop={0} even={true} text={aboutSupport}
                           title={'שירות ותמיכה'}
                           image={'support2.png'}/>
                <InfoPanel even={false} text={aboutCustomers} marginTop={0}
                           title={'מי הם הלקוחות הפוטנציאלים שלנו?'} image={'people2.png'}/>
            </div>
        );
    }
}

export default AboutPage;