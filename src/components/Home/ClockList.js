import React from 'react';
import ClockRow from "./ClockRow";

const twoLetters = num => num > 9 ? String(num) : '0' + String(num);

export const getTime = (hour, min) => {
    return twoLetters(hour % 24) + ':' + twoLetters(min);
};

const ClockList = ({items, textChanged, activeItem}) => {

    const itemClicked = index => () => {
        textChanged(index);
    };

    return (
        <div className={'clock_list'}>
            {items.map((item, index) =>
                <ClockRow key={index} icon={item.icon}
                          active={activeItem === index}
                          rowClicked={itemClicked(index)}
                          time={getTime(item.hour, item.min)}/>)}
        </div>
    );
};

export default ClockList;