import React from 'react';
import '../style/AboutUs.css';
import medLogo from "../img/medLogo.png";
import MediaQuery from 'react-responsive';

const AboutUs = () => {
    return (
        <div className="aboutUs" id="aboutId">
            <MediaQuery minDeviceWidth={768}>
                <div className='desktopAbout'>
                    <div className="aboutUsContent">
                        <h2>Who We Are</h2>
                        <div className="logoContainer">
                            <img src={medLogo} alt="medLogo" className='medLogo' />
                        </div>
                        <div className="titleContainer">
                            <div className="textGroup">
                                <h2>AppMed is short for</h2>
                                <h2 className='greenText'>Medical Application SYSTEM.</h2>
                            </div>
                        </div>
                        <div className='textContainer'>
                            <p>As a team we created this app for medical staff (hospitals, laboratories), where they can use it for all their services and management.</p>
                        </div>
                    </div>
                </div>
            </MediaQuery >
            <MediaQuery maxDeviceWidth={767}>
                <div className='mobileAbout'>
                    <div className='desktopHome'>
                        <div className="aboutUsContent">
                            <h2>Who We Are</h2>
                            <div className="logoContainer">
                                <img src={medLogo} alt="medLogo" className='medLogo' />
                            </div>
                            <div className="titleContainer">
                                <div className="textGroup">
                                    <h2>AppMed is short for</h2>
                                    <h2 className='greenText'>Medical Application SYSTEM.</h2>
                                </div>
                            </div>
                            <div className='textContainer'>
                                <p>As a team we created this app for medical staff (hospitals, laboratories), where they can use it for all their services and management.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </MediaQuery>
        </div>
    );
}

export default AboutUs;
