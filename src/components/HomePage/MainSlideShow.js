import React from 'react';
import {Zoom} from 'react-slideshow-image';
import SlideItem from "./SlideItem";
import CircularProgress from "@material-ui/core/CircularProgress/CircularProgress";

const items = [
    {
        source: 'images/slide4.jpg',
        title: 'בית חכם וירוק',
        text: ['רק עם טכנולוגית IGH',
            ' תהנה מבית חכם היחידי בעולם שפועל באופן אוטומטי',
            ' על פי חיישני גילוי אור וטמפרטורה',
            ' וידאג להפעיל עבורך את מוצרי החשמל ללא צורך ',
            'בהרצת תזמן או תסריט כל שהוא על ידיך.'],
        link: '/home'
    }, {
        source: 'images/slide2.jpg',
        title: 'מלון ירוק וחכם',
        text: ['רמת אירוח חדשה',
            'מערכת igh  מותקנת הן בחדרי האירוח והן בשטחים הציבוריים של המלון ומביאה חווית אירוח',
            ' חדשה לאורחי המלון הכוללת קבלת פנים עם פתיחת הדלת,הפעלת ',
            'תרחישי תאורה כולל אפשרות עמעום תאורה וכן שליטה במיזוג האוויר משני צידי המיטה וממסדרון ',
            'החדר,בשטחים הציבוריים שליטה ובקרה הפעלת תרחישים מתוזמנים במסעדות, חדרי הישיבות, ',
            'אולמות אירועים,חדרי כשר,אולם הקבלה ועוד.',
        ],
        link: '/hotel'
    }, {
        source: 'images/slide3.jpg',
        title: 'משרד ירוק וחכם',
        text: ['מאפשר חיסכון באנרגיה המבוזבזת באופן אוטומטי ללא פגיעה בעובדי המשרד.החישנים ',
            'וממפסקים החכמים האוטונומיים יעבדו בשילוב, ',
            'התזמנים המובנים במפסקים החכמים',
            ' יבצעו שינוי הגדרות יחסית ליום ולשעה כך שהמזגן יכבה כל עוד אין עובד במשרד ',
            'אבל בזמן הפסקת הצהריים והמזגן יחזור לפעולה 15 דקות לפני חזרת העובד למשרדו.'],
        link: '/office'
    }, {
        source: 'images/slide1.jpg',
        title: 'מערכת אוטונומית ומבוזרת',
        text: ['מערכת בית חכם יחידה בעולם הפועלת ללא בקר מרכזי ומאפשרת יעילות ביצועים ואמינות ברמה גבוהה ',
            'מזו של מערכת קווית ,וכל זאת ללא תשתיות נוספות בבית.',
            'החיישנים פועלים ישירות מול המפסקים החכמים, התזמנים מופעלים מתוך המפסקים החכמים',
            ' וזאת  ללא תוספת תשתיות וללא צורך ברשת אלחוטית.',
            'להבדיל ממערכות אחרות בהן כל תקלה ברשת האלחוטית או',
            ' בבקר המרכזי גורמת לכלל הבית החכם להפסיק לפעול,במערכת igh מאחר ואין צורך בבקר',
            ' מרכזי אין נקודת כשל מרכזית והבית החכם לעולם לא יעצר.',
        ],
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