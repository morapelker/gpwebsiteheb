import React from 'react';
import {Zoom} from 'react-slideshow-image';
import SlideItem from "./SlideItem";
import CircularProgress from "@material-ui/core/CircularProgress/CircularProgress";

const items = [
    {
        source: 'images/slide1.jpg',
        title: 'מערכת עצמאית',
        text: ['המערכת היחידה בעולם ללא בקר מרכזי',
            'דבר המאפשר שליטה מלאה בכל מוצרי החשמל',
            'בצורה אינדיוידואלית ללא צורך בשום בקר מרכזי בדרך.',
            'כל מפסק וחיישן עובד בצורה עצמאית לחלוטין',
            'ומתקשר עם שאר המפסקים בצורה ישירה',
            'ובכך מייצר מצב אמין ומשפר את איכות החיים'
        ],
    }, {
        source: 'images/slide2.jpg',
        title: 'מלון ירוק וחכם',
        text: ['מערכות בית חכם ניהיו נחוצות בבתי מלון.',
            'יכולות מערכת igh ניכרות בבתי מלון ומשפרות משמעותית את איכות האירוח',
            'ובכך ניהיו סטנדרט חדש',
        ],
        link: '/hotel'
    }, {
        source: 'images/slide3.jpg',
        title: 'משרד ירוק וחכם',
        text: ['מערכת מודרנית המאפשרת שינויי הגדרות בזמן אמת ובצורה דינמית',
            'ושליטה בכל מוצרי המשרד.',
            'מערכת הבית החכם של igh יכולה לחסוך עד 30% מצריכת החשמל במשרדים',
            'ללא התפשרות באיכות החיים ע״י הדלקות וכיבויים אוטומטיים',
            'ובכך עושה את יום העבודה שלך ליעיל יותר',
        ],
        link: '/office'
    }, {
        source: 'images/slide4.jpg',
        title: 'בית חכם וירוק',
        text: [
            'עם מערכת הבית החכם של igh, אפשר להנות מבית אוטומטי לחלוטין.',
            'הסנסורים מגלים תנועה ומודדים עוצמת עור,',
            'משדרים את המידע למפסקים וכל מפסק מקבל החלטה',
            'בעזרת תהליך קבלת ההחלטות המובנה בתוכו ומחליט האם',
            'להדליק/לכבות את עצמו.',
        ],
        link: '/home'
    }
];

const zoomOutProperties = {
    duration: 7500,
    transitionDuration: 500,
    infinite: true,
    indicators: true,
    scale: 1.4,
    arrows: false,
};

const MainSlideShow = (props) => {
    return (
        props.loaded ?
            <Zoom {...zoomOutProperties} style={{width: '100%', direction: 'ltr'}}>
                {items.map((item, index) => <SlideItem key={index} history={props.history}
                                                       item={item}/>)}
            </Zoom>
            : <div style={{
                width: '100%',
                height: '90vh',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <CircularProgress style={{width: 80, height: 80}}/>
            </div>
    );
};

export default MainSlideShow;