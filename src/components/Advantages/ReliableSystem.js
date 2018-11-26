import React from 'react';
import {reliable} from "./TextBlocks";
import './reliable.css';

const ReliableSystem = () => {
    return (
        <div className={'reliable_root'}>
            <div className={'reliable_root_2'}>
                <div style={{
                    flex: 1,
                    height: '100%',
                    padding: 30,
                    display: 'flex',
                    flexDirection: 'column',
                    fontSize: '1.3em',
                    color: 'black'
                }}>
                    <h4 style={{margin: 0}}>אמינות</h4>
                    {reliable.split('\n').map((item, index) => <p key={index}>{item}</p>)}
                </div>
            </div>
        </div>
    );
};

export default ReliableSystem;