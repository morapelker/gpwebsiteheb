import React from 'react';
import MatButton from "../Common/MatButton";
import './AboutSection.css';
import {about1} from "../AboutPage/TextBlocks";

const AboutSection = ({history}) => {
    return (
        <div style={{
            width: '100%',
            backgroundImage: 'url(/images/office7_0.jpg)',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed',
            backgroundSize: 'cover',
        }}>
            <div style={{
                width: '100%',
                paddingTop: 30,
                paddingBottom: 30,
                boxSizing: 'unset',
                background: 'rgba(0,0,0,0.7)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center'
            }}>
                <div className={'about_section_root'}>
                    <h4 style={{marginRight: 40}}>אודות החברה</h4>
                    {about1.split('\n').map((item, index) => <p style={{textAlign: 'right'}} key={index}>{item}</p>)}
                    <MatButton type={'secondary'}
                               onClick={() => {
                                    history.push('/about');
                               }}
                               backgroundColor={'#33cc33'} style={{
                        alignSelf: 'center'
                    }}>
                        קרא עוד
                    </MatButton>
                </div>

            </div>

        </div>
    );
};

export default AboutSection;