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

            <div id={'movie_div'}
                style={{
                    width: '100%',
                    height: 0,
                    paddingTop: '50%',
                    position: 'relative',
                    paddingLeft: 5,
                    paddingRight: 5,
                    overflowX: 'hidden',
                    overflowY: 'hidden',

                }}>
                <iframe title={'IGH Product Introduction'} style={{
                    position: 'absolute', top: '10%', bottom: 0,
                    width: '50%', height: '80%', left: '25%'
                }}
                        allowFullScreen="allowfullscreen"
                        src="https://www.youtube.com/embed/w-2Khs6ftNc">
                </iframe>
            </div>

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
                    {about1.split('\n').map((item, index) => <span
                        style={{textAlign: 'right'}}
                        key={index}>{item}</span>)}
                    <MatButton type={'secondary'}
                               onClick={() => {
                                   history.push('/about');
                               }}
                               backgroundColor={'#33cc33'} style={{
                        alignSelf: 'flex-start',
                        fontSize: '1em'
                    }}>
                        קרא עוד
                    </MatButton>
                </div>

            </div>

        </div>
    );
};

export default AboutSection;