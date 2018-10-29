import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const quotes = [
    'It was so easy to adapt the easy life of this technology doing so much for our family .',
    'The location handler opening my garage door on arriving without the need to do anything it is so great.',
    'igh smart control over lights on public areas in our commercial building save us more than 30% on the electric billing'
];

const QuoteSection = () => {
    const quote = quotes[Math.floor(Math.random() * 10) % 3];
    return (
        <div style={{
            width: '100%',
            height: 300,
            background: 'white',
            paddingTop: 75,
            boxSizing: 'border-box'
        }}>
            <div style={{
                width: '70%', height: 150,
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