import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const quotes = [
    'היה לי ולמשפחתי מאוד קל להתרגל לטכנולוגיה הזאת!',
    'מנהל המיקום שפותח לי את החנייה כשאני מגיע כל כך נוח!',
    'שליטה בתאורות בשטחים הציבוריים שלנו חוסך לנו 30% בצריכת החשמל החודשית'
];

const QuoteSection = () => {
    const quote = quotes[Math.floor(Math.random() * 10) % 3];
    return (
        <div style={{
            width: '100%',
            background: 'white',
            paddingTop: 75,
        }}>
            <div style={{
                width: '70%',
                margin: '0 auto', background: '#939599',
                boxShadow: '0 0 15px 1px rgba(0,0,0,0.5)',
                padding: 30,
            }}>
                <FontAwesomeIcon style={{color: 'white'}} size={'3x'} className={'icon'}
                                 icon={'quote-right'}/>
                <p/>
                <span style={{color: 'white', fontSize: '1.2em'}}>{quote}</span>
            </div>
        </div>
    );
};

export default QuoteSection;