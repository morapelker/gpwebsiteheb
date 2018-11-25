import React, {Component} from 'react';
import HomeInfo from "./HomeInfo";
import AboutSection from "./AboutSection";
import QuoteSection from "./QuoteSection";
import {withRouter} from "react-router-dom";
import './info_h4.css'
import CircularProgress from "@material-ui/core/CircularProgress/CircularProgress";

const info = [
    {
        title: 'בית',
        text: 'המערכת הביתית החכמה של גרינפוינט יודעת לשלוט על תאורה, תריסים, מזגנים ועוד.\n' +
            'ניתן לשלוט על העומסים באמצעות אפליקציה, לוח מקשים מעוצב ומואר ותכונות אוטומטיות הקיימות במערכת',
        image: 'home_icon.svg',
        link: 'home'
    }, {
        title: 'משרד',
        text: 'מערכת המשרד החכם של גרינפוינט מגדירה מחדש הרגלי עבודה וחוסכת חשמל. עושה את היום הרבה יותר נעים ויעיל במשרד',
        image: 'office_icon.svg',
        link: 'office'
    }, {
        title: 'מלון',
        text: 'המערכת המלונאית החכמה של גרינפוינט, שולטת על תאורה, תריסים ומזגנים על ידי לוח מקשים מעוצב ומואר ומקבלת החלטות אוטומטיות באמצעות חיישנים.\n',
        image: 'hotel_icon.svg',
        link: 'hotel'
    }
];

export function loadImage(url) {
    const r = (img, resolve) => () => {
        img.removeEventListener('load', r);
        img.removeEventListener('error', r);
        resolve()
    };

    return new Promise((resolve) => {
        const img = new Image();
        img.addEventListener('load', r(img, resolve));
        img.addEventListener('error', r(img, resolve));
        img.src = url;
    });
}

class HomePage extends Component {
    constructor(props) {
        super(props);
        window.scrollTo(0, 0);
        this.state = {
            loadedImages: false
        };
    }

    imageLoaded = () => {
        this.setState({loadedImages: true});
    };

    componentWillMount() {
        loadImage('/images/home_page_image.jpg').then(() => {
            this.imageLoaded();
        });
    }

    render() {
        return (
            <div style={{width: '100%', textAlign: 'center'}}>

                {this.state.loadedImages ?
                    <div style={{
                        width: '100%',
                        height: '100vh',
                        position: 'relative'
                    }}>
                        <img src={'/images/home_page_image.jpg'} style={{
                            objectFit: 'cover',
                            position: 'absolute',
                            left: 0,
                            top: 0,
                            width: '100%',
                            height: '100%'
                        }} alt={''}/>
                        <div style={{
                            position: 'absolute',
                            left: 0,
                            top: 0,
                            width: '100%',
                            height: '100%',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                            background: 'rgba(255,255,255,0.5)'
                        }}>
                            <div style={{
                                width: '70vw', height: 200,
                                position: 'absolute',
                                top: 80,
                                left: '15vw',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center'
                            }}>
                                <span style={{fontSize: '3em', color: '#767676'}}>Switch to <span
                                    style={{color: '#00cc00'}}>green</span></span>
                            </div>
                            <img className={'contain'} src={'/images/glasswhite.png'} alt={''}
                                 style={{
                                     width: 400,
                                     maxWidth: '80%',
                                     objectFit: 'contain'
                                 }}/>
                        </div>
                    </div> :
                    <div style={{
                        width: '100%',
                        height: '90vh',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <CircularProgress style={{width: 80, height: 80}}/>
                    </div>}


                <div style={{
                    marginTop: 10,
                    width: '100%'
                }}>
                    <div style={{
                        width: '100%',
                        display: 'flex',
                        flexWrap: 'wrap',
                        justifyContent: 'center'
                    }}>
                        {info.map((info, index) => <HomeInfo history={this.props.history}
                                                             info={info} key={index}/>)}
                    </div>
                    <AboutSection history={this.props.history}/>
                    <QuoteSection/>
                </div>
            </div>
        );
    }
}

export default withRouter(HomePage);