import React from 'react';
import {Zoom} from 'react-slideshow-image';
import SlideItem from "./SlideItem";

const items = [
    {
        source: 'images/slide1.jpg',
        title: 'Decentralized',
        text: ['The ONLY technology of its kind in the world',
            'that enables a completely autonomous operation of the smart switches',
            'with no any dependency of one center control unit.',
            'Each switch or sensor works autonomously,',
            'detects and collaborates with other units,',
            'and delivers a perfect unique living experience.'
        ],
    }, {
        source: 'images/slide2.jpg',
        title: 'Intelligent Green Hotel',
        text: ['SmartHome systems become a necessity for hotel rooms.',
            'igh Technology and abilities are evident in every aspect of this field',
            'and therefore it becomes a new standard.',
        ]
    }, {
        source: 'images/slide3.jpg',
        title: 'Intelligent Green Office',
        text: ['Modern dynamic working environment tends to create an overload',
            'over electric household and office expenses.',
            'igh SmartHome System may save up to 30% of the electric expenses and makes',
            'each working day much more efficient.',
        ]
    }, {
        source: 'images/slide4.jpg',
        title: 'Intelligent Green Home',
        text: ['With igh Technology you can easily enjoy a fully autonomous home.',
            'The sensors detect movement and measure the light and temperature levels,',
            'transmit the information to the switches that operate the electric appliances',
            'according to preset preferences and configurations.',
        ]
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

const MainSlideShow = () => {
    return (
        <Zoom {...zoomOutProperties}>
            {items.map((item, index) => <SlideItem key={index} item={item}/>)}
        </Zoom>
    );
};

export default MainSlideShow;