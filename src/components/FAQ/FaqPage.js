import React, {Component} from 'react';
import QuestionAnswer from "./QuestionAnswer";
import {questions} from './questions';

class FaqPage extends Component {
    constructor(props) {
        super(props);
        window.scrollTo(0, 0);
        this.state = {
            openQuestion: -1
        }
    }

    questionClicked = index => {
        this.setState({openQuestion: index === this.state.openQuestion ? -1 : index});
    };

    render() {
        return (
            <div style={{width: '100%', display: 'flex', flexDirection: 'column'}}>
                <div style={{position: 'relative'}}>
                    <img src={'/images/home5_0.jpg'} alt={''}
                         style={{width: '100%', objectFit: 'cover'}}/>
                    <div style={{
                        position: 'absolute',
                        left: 0,
                        top: 0,
                        right: 0,
                        bottom: 0,
                        boxShadow: '0 0 10px 0 rgba(0,0,0,0.5)',
                        background: 'linear-gradient(to bottom,rgba(0,0,0,0) 0%,rgba(0,0,0,1) 100%)'
                    }}>
                        <span style={{
                            color: 'white',
                            position: 'absolute',
                            left: '20%',
                            bottom: '10%',
                            fontSize: '2.5em',
                        }}>FAQ</span>
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
                                        open={this.state.openQuestion === index}
                                        question={question.question}
                                        answer={question.answer}/>
                    )}
                    <div style={{height: 100}} />
                </div>
            </div>
        );
    }
}

export default FaqPage;