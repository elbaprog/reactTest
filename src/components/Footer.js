import React from 'react';
import '../style/Footer.css';
import MediaQuery from 'react-responsive';
import { SocialIcon } from 'react-social-icons/component'
import 'react-social-icons/facebook'
import 'react-social-icons/instagram'
import 'react-social-icons/linkedin'
import AppMed from '../img/appmed.png'
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = () => {
    return (
        <div className="footer" id="footerId">
            <MediaQuery minDeviceWidth={768}>
                <div className='desktopFooter'>
                    <div className='footerContainer'>
                        <div className='row'>
                            <div className='col-md-4 col-sm-6 socials'> <p>
                                Stay in touch
                            </p>
                                <div className='icon'>

                                    <SocialIcon url="www.facebook.com" />
                                    <SocialIcon url="www.instagram.com" />
                                    <SocialIcon url="www.linkedin.com" />
                                </div>
                            </div>
                            <div className='col-md-4 col-sm-6 logo'>
                                <img src={AppMed} alt="AppMed" />
                            </div>
                            <div className='col-md-4 col-sm-6 privacy'>
                                <h3>Privacy and Policy</h3>
                                <p>
                                    Copyright © Appmed. {new Date().getFullYear()}. All rights reserved.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </MediaQuery>
            <MediaQuery maxDeviceWidth={767}>
                <div className='mobileFooter'>
                    <div className='footerContainer'>
                        <div className='row'>
                            <div className='col-md-4 col-sm-6 socials'> <p>
                                Stay in touch
                            </p>
                                <div className='icon'>

                                    <SocialIcon url="www.facebook.com" />
                                    <SocialIcon url="www.instagram.com" />
                                    <SocialIcon url="www.linkedin.com" />
                                </div>
                            </div>
                            <div className='col-md-4 col-sm-6 logo'>
                                <img src={AppMed} alt="AppMed" />
                            </div>
                            <div className='col-md-4 col-sm-6 privacy'>
                                <h3>Privacy and Policy</h3>
                                <p>
                                    Copyright © Appmed. {new Date().getFullYear()}. All rights reserved.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </MediaQuery>
        </div>
    )
}
export default Footer;