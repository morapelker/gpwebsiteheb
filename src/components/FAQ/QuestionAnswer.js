import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const QuestionAnswer = ({question, answer, open, onClick}) => {
    return (
        <div style={{width: '100%', padding: 10, marginTop: 5, cursor: 'pointer'}} onClick={onClick}>
            <div style={{display: 'flex'}}>
                <FontAwesomeIcon className={'icon'} icon={'plus'} />
            </div>
            <hr style={{color: 'green'}} />
        </div>
    );
};

export default QuestionAnswer;