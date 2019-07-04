import React, {useState} from 'react';
import './contact_window_css.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import MatButton from "../Common/MatButton";
import {useInput} from "../Common/Hooks";

const ContactWindow = ({shrinked, minimizeFunc}) => {
    const name = useInput('שם');
    const email = useInput('דוא״ל');
    const phoneNumber = useInput('מספר טלפון*');
    const [messageSent, setMessageSent] = useState(0);

    const val = !(phoneNumber.value.length > 0);

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
                        message: ''
                    })
                }
            ).then(() => {
                setMessageSent(2);
                setTimeout(() => {
                    minimizeFunc();
                    setMessageSent(3);
                }, 4000)
            }).catch(() => {
                setMessageSent(0);
            });
        }
    };

    return (
        messageSent !== 3 &&
        <div className={'contact_window_root'} style={{
            background: shrinked ? 'white' : 'rgba(255, 255, 255, 0.85)'
        }}>
            <input className={'contact_window_input'} {...name}/>
            <input className={'contact_window_input'} {...phoneNumber}/>
            <input className={'contact_window_input'} {...email}/>

            {messageSent === 2 ?
                <span style={{fontSize: '1.2em', textAlign: 'center'}}>הודעתך נשלחה</span> :
                <MatButton disabled={val} onClick={sendMail}
                           backgroundColor={val ? 'gray' : 'default'} style={{
                    width: 150,
                    borderRadius: 20,
                    alignSelf: 'flex-end',
                }}>
                            <span style={{textAlign: 'center'}}>
                                {messageSent === 0 ? 'שלח' : 'שולח...'}
                            </span>
                    {messageSent === 0 ?
                        <FontAwesomeIcon className={'icon'} icon={'paper-plane'}
                                         style={{color: 'white', marginRight: 10}}/>
                        :
                        undefined
                    }

                </MatButton>
            }

        </div>
    );
};

export default ContactWindow;