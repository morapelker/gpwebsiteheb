import React, {Component} from 'react';
import QuestionAnswer from "./QuestionAnswer";
import {questions} from './questions';
import '../Common/common.css';

class FaqPage extends Component {
    constructor(props) {
        super(props);
        window.scrollTo(0, 0);
        this.state = {
            openQuestions: {}
        }
    }

    questionClicked = index => {
        const openQuestions = {...this.state.openQuestions};
        openQuestions[index] = !openQuestions[index];
        this.setState({openQuestions});
    };

    render() {
        return (
            <div style={{width: '100%', display: 'flex', flexDirection: 'column'}}>
                <div className={'page_top_root'}>
                    <img className={'page_top_img'} src={'/images/home5_0.jpg'} alt={''} />
                    <div className={'page_top_bg'}>
                        <span className={'page_top_text'}>שאלות נפוצות</span>
                    </div>
                </div>
                <div style={{
                    marginTop: 60,
                    paddingLeft: '20%',
                    paddingRight: '20%',
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                }}>
                    {questions.map((question, index) =>
                        <QuestionAnswer key={index}
                                        onClick={() => {
                                            this.questionClicked(index);
                                        }}
                                        open={this.state.openQuestions[index]}
                                        question={question.question}
                                        answer={question.answer}/>
                    )}
                </div>
            </div>
        );
    }
}

export default FaqPage;