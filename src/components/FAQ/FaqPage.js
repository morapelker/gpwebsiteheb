import React, {Component} from 'react';
import QuestionAnswer from "./QuestionAnswer";

class FaqPage extends Component {
    constructor(props, context) {
        super(props, context);
        window.scrollTo(0, 0);
    }

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
                    height: 500,
                    display: 'flex',
                    flexDirection: 'column'
                }}>
                    <QuestionAnswer question={'hey?'} answer={'yes'} />
                    <QuestionAnswer question={'hey?'} answer={'yes'} open={true} />
                    <QuestionAnswer question={'hey?'} answer={'yes'} />
                    <QuestionAnswer question={'hey?'} answer={'yes'} />
                </div>
            </div>
        );
    }
}

export default FaqPage;