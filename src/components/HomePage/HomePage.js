import React, {Component} from 'react';
import MainSlideShow from "./MainSlideShow";
import HomeInfo from "./HomeInfo";
import AboutSection from "./AboutSection";
import QuoteSection from "./QuoteSection";
import {withRouter} from "react-router-dom";

const info = [
    {
        title: 'משרד',
        text: 'מערכת המשרד החכם של גרינפוינט מגדירה מחדש הרגלי עבודה וחוסכת חשמל. עושה את היום הרבה יותר כיף ויעיל במשרד',
        image: 'office_icon.svg',
        link: 'office'
    }, {
        title: 'מלון',
        text: 'המערכת בבתי מלון מקבלת החלטות בהתאם לחיישני תנועה, מגנט בדלת ועוד על מנת לחסוך בחשמל ולשפר את איכות השהייה של האורח בעזרת הרצת תסריט ברוך הבא לחדר מיידית בפתיחת הדלת של אורח חדש',
        image: 'hotel_icon.svg',
        link: 'hotel'
    }, {
        title: 'בית',
        text: 'סגור את התריסים בלילה, פתח אותם מעט בבוקר, סגור אותם כשאתה יוצא לעבודה, ניהול אוטומטי של הדלקות וכיבויי מנורות ובכך חיסכון בחשמל ושיפור איכות חיים',
        image: 'home_icon.svg',
        link: 'home'
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
        loadImage('/images/slide4.jpg').then(() => {
            this.imageLoaded();
        });
        loadImage('/images/slide2.jpg');
        loadImage('/images/slide3.jpg');
        loadImage('/images/slide1.jpg');
    }

    render() {
        return (
            <div style={{width: '100%', textAlign: 'center'}}>
                <MainSlideShow history={this.props.history} loaded={this.state.loadedImages}/>
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
                    <div
                        style={{
                            width: '100%',
                            height: 0,
                            paddingTop: '50%',
                            position: 'relative',
                            paddingLeft: 5,
                            paddingRight: 5,
                            overflowX: 'hidden',
                            overflowY: 'hidden',
                            background: 'black'
                        }}>
                        <iframe title={'IGH Product Introduction'} style={{
                            position: 'absolute', left: 0, top: 0, bottom: 0,
                            width: '100%', height: '99%'
                        }}
                                allowFullScreen="allowfullscreen"
                                src="https://www.youtube.com/embed/P1U-8Mgi-yw">
                        </iframe>
                    </div>
                    <AboutSection history={this.props.history}/>
                    <QuoteSection/>
                </div>
            </div>
        );
    }
}

export default withRouter(HomePage);