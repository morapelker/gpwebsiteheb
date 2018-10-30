import React, {useState} from 'react';
import {useInput} from "./Hooks";
import MatButton from "./MatButton";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import RefreshIndicator from "./RefreshIndicator";

const ContactPage = () => {

    const name = useInput('Full Name*');
    const email = useInput('Email*');
    const phoneNumber = useInput('Phone Number');
    const message = useInput('Message*');

    const [messageSent, setMessageSent] = useState(0);

    const validate = () => {
        if (name.value.length > 0 && email.value.length > 0 && message.value.length > 0)
            return undefined;
        return true;
    };

    const sendMail = () => {
        if (messageSent === 0) {
            setMessageSent(1);
            setTimeout(() => {
                setMessageSent(2);
            }, 1000);
        }
    };
    const val = validate();

    return (
        <div style={{
            background: '#cdcdcd',
            padding: 40,
            boxSizing: 'unset',
            width: '100%',
            display: 'flex',
            flexDirection: 'column'
        }}>
            <span style={{fontSize: '2em', fontWeight: 'bold', textAlign: 'center'}}>Contact</span>
            <div style={{
                width: '80%',
                flex: 1,
                display: 'flex',
                margin: 'auto',
                justifyContent: 'space-evenly'
            }}>
                <div style={{
                    width: '45%',
                    fontSize: '1.3em',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    marginTop: 40,
                    lineHeight: 2
                }}>
                    <span style={{textAlign: 'left', fontWeight: 'bold'}}>Green Point Systems</span>
                    <span>Ha'Eshel 7 st. POB 3136, Caesarea Ind. Park South, Israel</span>
                    <span>Email: <a href={'/'}>info@greenpointsys.com</a> </span>
                </div>
                <div style={{width: '50%', marginTop: 40, position: 'relative'}}>
                    <form style={{
                        display: 'flex',
                        flexDirection: 'column',
                        visibility: messageSent !== 2 ? 'unset' : 'hidden'
                    }}>
                        <input {...name} style={{width: '100%'}}/>
                        <div style={{display: 'flex', marginTop: 10, width: '100%'}}>
                            <input {...email} style={{width: '50%'}} type={'email'}/>
                            <input {...phoneNumber} style={{width: '50%', marginLeft: 10}}
                                   type={'tel'}/>
                        </div>
                        <textarea {...message}
                                  style={{width: '100%', marginTop: 10, resize: 'vertical'}}/>
                        <MatButton disabled={val} onClick={sendMail} backgroundColor={val ? 'gray' : 'default'} style={{
                            width: 300,
                            borderRadius: 20,
                            alignSelf: 'flex-end'
                        }}>
                            <span style={{textAlign: 'center'}}>
                                {messageSent === 0 ? 'Send' : 'Sending...'}
                            </span>
                            {messageSent === 0 ?
                                <FontAwesomeIcon className={'icon'} icon={'paper-plane'} size={'2x'}
                                                 style={{color: 'white'}}/>
                                :
                                <RefreshIndicator size={30} style={{marginLeft: 10}} />
                            }

                        </MatButton>
                    </form>
                    {messageSent === 2 &&
                    <div style={{
                        position: 'absolute',
                        left: 0,
                        top: 0,
                        right: 0,
                        bottom: 0,
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <h4>Message Sent</h4>
                    </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default ContactPage;