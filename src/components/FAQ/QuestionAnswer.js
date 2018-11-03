import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Collapse from "@material-ui/core/Collapse/Collapse";
import './faq.css';

const green = '#33cc33';

const openStyle = {
    display: 'flex', width: '100%',
    padding: '10px 10px 0 10px', cursor: 'pointer'
};

const closeStyle = {
    borderWidth: 1, cursor: 'pointer',
    borderColor: 'black',
    borderStyle: 'solid',
    borderRadius: 10,
    display: 'flex',
    width: '100%',
    padding: 10,
};

const QuestionAnswer = ({question, answer, open, onClick}) => {
    return (
        <div style={{width: '100%', marginTop: 10}}>
            <div onClick={onClick} style={open ? openStyle : closeStyle}>
                <FontAwesomeIcon style={{
                    alignSelf: 'center',
                    transition: 'transform 0.4s',
                    transform: open ? 'rotate(45deg)' : 'unset'
                }} className={'icon'} icon={'plus'}/>
                <span className={'question_text'}>{question}</span>
            </div>
            <Collapse in={open}>
                <div style={{
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                }}>
                    <hr style={{
                        color: green,
                        backgroundColor: green,
                        height: 2,
                        width: '100%',
                        borderWidth: 0
                    }}/>
                    {answer.split('\n').map((item, index) =>
                        <p
                            key={index}
                            style={{marginTop: 5, marginRight: 20}}>{item}</p>
                    )}
                </div>
            </Collapse>
        </div>
    );
};

export default QuestionAnswer;