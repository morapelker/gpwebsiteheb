import React from 'react';
import './router.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {withRouter} from "react-router-dom";

const onClick = (item, history, selector) => () => {
    if (history.location.pathname === item.location &&
        (item.hash === undefined || item.hash === history.location.hash))
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    else
        history.push(item.location + '#' + (item.hash || ''));
    selector && selector(false);
};

const HomeRouter = ({items, productsSelector, history}) => {
    return (
        <div style={{
            display: 'flex',
            listStyle: 'none',
            height: '100%',
            alignItems: 'center',
            justifyContent: 'flex-end', width: '100%'
        }}>
            {items.map((item, index) =>
                <span className={'routeSpan'} key={index}
                      onClick={onClick(item, history, productsSelector)} onMouseEnter={() => {
                    productsSelector(item.label === 'Products')
                }}>
                    {item.label}
            </span>)}
            <FontAwesomeIcon className={'icon'} icon={['fab', 'facebook']}/>
            <FontAwesomeIcon className={'icon'} icon={['fab', 'youtube']}/>
        </div>
    );
};

export default withRouter(HomeRouter);