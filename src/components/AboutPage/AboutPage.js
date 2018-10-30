import React, {Component} from 'react';
import {
    about1,
    about2,
    about3,
    aboutCustomers,
    aboutFeatures,
    aboutSupport,
    aboutInstall
} from "./TextBlocks";
import MatButton from "../Common/MatButton";
import InfoPanel from "./InfoPanel";

class AboutPage extends Component {
    constructor(props) {
        super(props);
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <div style={{width: '100%', display: 'flex', flexDirection: 'column'}}>
                <div style={{position: 'relative'}}>
                    <img src={'/images/abouttop.jpg'} alt={''}
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
                        }}>About Us</span>
                    </div>
                </div>
                <div style={{
                    width: '100%',
                    display: 'block',
                    paddingLeft: '20%',
                    paddingRight: '20%'
                }}>
                    {about1.split('\n').map((item, index) => <p
                        style={{width: '100%', textAlign: 'left'}} key={index}>{item}</p>)}
                </div>
                <div style={{
                    width: '100%',
                    display: 'flex',
                    paddingLeft: '20%',
                    paddingRight: '20%'
                }}>
                    <div style={{flex: 1}}>
                        <h4 style={{textAlign: 'left'}}>Introduction</h4>
                        {about2.split('\n').map((item, index) => <p
                            style={{width: '100%', textAlign: 'left'}} key={index}>{item}</p>)}
                        <MatButton backgroundColor={'default'} style={{width: '30%', minWidth: 200}}
                                   onClick={() => {
                                       console.log('pdf');
                                   }}>
                            Introduction PDF
                        </MatButton>
                    </div>
                    <img src={'/images/intro.png'} alt={''} style={{
                        marginLeft: 10,
                        width: '40%',
                        objectFit: 'scale-down',
                        marginTop: 100,
                        alignSelf: 'flex-start'
                    }}/>
                </div>
                <InfoPanel even={true} image={'app6_0.png'} title={'No Central Processing Unit'}
                           text={about3}/>
                <div style={{
                    width: '100%',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    backgroundAttachment: 'fixed',
                    backgroundSize: 'cover',
                    backgroundImage: 'url(/images/mesh_0.jpg)',
                }}>
                    <div style={{
                        width: '100%',
                        height: '100%',
                        background: 'rgba(0,0,0,0.5)',
                        padding: '50px 50px 50px 10%',
                        boxSizing: 'unset',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'flex-start'
                    }}>
                        <span style={{textAlign: 'left', fontSize: '2em', color: 'white'}}>Exceptional Features</span>
                        <ul>
                            {aboutFeatures.map((item, index) => <li
                                style={{color: 'white', textAlign: 'left'}}
                                key={index}>{item}</li>)}
                        </ul>
                    </div>
                </div>
                <div style={{
                    width: '100%',
                    display: 'flex',
                    paddingLeft: '20%',
                    paddingRight: '20%',
                    flexDirection: 'row-reverse',
                    marginTop: 80
                }}>
                    <div style={{flex: 1}}>
                        <h4 style={{textAlign: 'left'}}>Installation</h4>
                        <ul>
                            {aboutInstall.map((item, index) => <li style={{textAlign: 'left'}}
                                                                   key={index}>{item}</li>)}
                        </ul>
                    </div>
                    <img src={'/images/intro.png'} alt={''} style={{
                        marginLeft: 10,
                        width: '40%',
                        objectFit: 'scale-down',
                        marginTop: 100,
                        alignSelf: 'flex-start'
                    }}/>
                </div>
                <InfoPanel marginTop={0} even={false} text={aboutSupport} title={'Support & Service'}
                           image={'support2.png'}/>
                <InfoPanel even={true} text={aboutCustomers} marginTop={0}
                           title={'Who are our potential customers?'} image={'people2.png'}/>
            </div>
        );
    }
}

export default AboutPage;