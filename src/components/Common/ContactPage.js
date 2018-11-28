import React, {useState} from 'react';
import {useInput} from "./Hooks";
import MatButton from "./MatButton";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import RefreshIndicator from "./RefreshIndicator";
import {LargeScreen, SmallScreen} from "./ScreenSizes";
import '../Common/contact.css';

const ContactPage = () => {

    const name = useInput('שם מלא');
    const email = useInput('דוא״ל');
    const phoneNumber = useInput('מספר טלפון*');
    const message = useInput('הודעה');

    const [messageSent, setMessageSent] = useState(0);

    const validate = () => {
        if (phoneNumber.value.length > 0)
            return undefined;
        return true;
    };

    const sendMail = () => {
        if (messageSent === 0) {
            setMessageSent(1);
            fetch(
                'https://baloofeathers.herokuapp.com/contact', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        name: name.value,
                        email: email.value,
                        phone: phoneNumber.value,
                        message: message.value
                    })
                }
            ).then(() => {
                setMessageSent(2);
            }).catch(() => {
                setMessageSent(3);
            });
        }
    };
    const val = validate();

    return (
        <div id={'contactSection'} style={{
            background: '#cdcdcd',
            padding: '40px 0',
            boxSizing: 'unset',
            width: '100%',
            display: 'flex',
            flexDirection: 'column'
        }}>
            <span style={{fontSize: '2em', fontWeight: 'bold', textAlign: 'center'}}>צור קשר</span>
            <div className={'contact_root'}>
                <div style={{
                    flex: 1,
                    fontSize: '1.3em',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    lineHeight: 2,
                    textAlign: 'left'
                }}>
                    <span style={{fontWeight: 'bold'}}>גרינפוינט מערכות בע״מ</span>
                    <span>האשל 7 אזור התעשייה הדרומי קיסריה</span>
                    <a href={'mailto:info@greenpointsys.com'}>info@greenpointsys.com</a>

                    <div style={{display: 'flex'}}>
                        <span style={{fontSize: '1.5em', marginLeft: 10}}>04-6039090</span>
                        <FontAwesomeIcon className={'icon'} icon={'phone'}
                                         style={{alignSelf: 'center',
                                             color: 'green',
                                         }}/>
                    </div>
                </div>
                <LargeScreen>
                    <div style={{width: 10}}/>
                </LargeScreen>
                <div className={'contact_form_parent'}>
                    <form style={{
                        display: 'flex',
                        flexDirection: 'column',
                        visibility: messageSent < 2 ? 'unset' : 'hidden'
                    }}>
                        <input {...name} style={{width: '100%'}}/>
                        <LargeScreen>
                            <div style={{display: 'flex', marginTop: 10, width: '100%'}}>
                                <input {...email} style={{width: '50%'}} type={'email'}/>
                                <input {...phoneNumber} style={{width: '50%', marginRight: 10}}
                                       type={'tel'}/>
                            </div>
                        </LargeScreen>
                        <SmallScreen>
                            <input {...email} style={{width: '100%', marginTop: 10}} type={'email'}/>
                            <input {...phoneNumber} style={{width: '100%', marginTop: 10}}
                                   type={'tel'}/>
                        </SmallScreen>

                        <textarea {...message}
                                  style={{width: '100%', marginTop: 10, resize: 'vertical'}}/>
                        <SmallScreen>
                            <MatButton disabled={val} onClick={sendMail}
                                       backgroundColor={val ? 'gray' : 'default'} style={{
                                width: 300,
                                borderRadius: 20,
                                alignSelf: 'flex-end',
                                fontSize: '1.5em'
                            }}>
                            <span style={{textAlign: 'center'}}>
                                {messageSent === 0 ? 'שלח' : 'שולח...'}
                            </span>
                                {messageSent === 0 ?
                                    <FontAwesomeIcon className={'icon'} icon={'paper-plane'} size={'2x'}
                                                     style={{color: 'white', marginRight: 10}}/>
                                    :
                                    <RefreshIndicator size={30} style={{marginLeft: 10, marginRight: 10}}/>
                                }

                            </MatButton>
                        </SmallScreen>
                        <LargeScreen>
                            <MatButton disabled={val} onClick={sendMail}
                                       backgroundColor={val ? 'gray' : 'default'} style={{
                                width: 300,
                                borderRadius: 20,
                                alignSelf: 'flex-end',
                            }}>
                            <span style={{textAlign: 'center'}}>
                                {messageSent === 0 ? 'שלח' : 'שולח...'}
                            </span>
                                {messageSent === 0 ?
                                    <FontAwesomeIcon className={'icon'} icon={'paper-plane'} size={'2x'}
                                                     style={{color: 'white', marginRight: 10}}/>
                                    :
                                    <RefreshIndicator size={30} style={{marginLeft: 10, marginRight: 10}}/>
                                }

                            </MatButton>
                        </LargeScreen>
                    </form>
                    {messageSent >= 2 &&
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
                        <h4>{messageSent === 2 ? 'הודעתך נשלחה' : 'הודעתך לא נשלחה'}</h4>
                    </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default ContactPage;