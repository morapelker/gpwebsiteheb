import React from 'react';
import './router.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const onClick = item => () => {
    console.log('clicked', item.location);
};

const HomeRouter = ({items}) => {
    return (
        <div style={{
            display: 'flex',
            listStyle: 'none',
            height: '100%',
            alignItems: 'center',
            justifyContent: 'flex-end', width: '100%'
        }}>
            {items.map((item, index) =>
                <span className={'routeSpan'} key={index} onClick={onClick(item)}>
                    {item.label}
            </span>)}
            <FontAwesomeIcon className={'icon'} icon={['fab' , 'facebook']} />
            <FontAwesomeIcon className={'icon'} icon={['fab' , 'youtube']} />
        </div>
    );
};

export default HomeRouter;