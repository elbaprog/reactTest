import React, { useState, useEffect } from 'react';
import '../style/AboutUs.css';
import medLogo from "../img/medLogo.png";
import MediaQuery from 'react-responsive';
import axios from 'axios';

const baseURL = "http://192.168.1.41:85/api/abouts";
const AboutUs = () => {

    const [aboutData, setAboutData] = useState(
        null
    );

    useEffect(() => {
        axios.get(baseURL)
            .then((response) => {
                const aboutInfo = response.data.abouts; // Access the 'abouts' object
                setAboutData(aboutInfo);
            })
            .catch((error) => {
                console.error('Error fetching about data:', error);
            });
    }, []);

    if (!aboutData) return null;

    return (
        <div className="aboutUs" id="aboutId">
            <MediaQuery minDeviceWidth={768}>
                <div className='desktopAbout'>
                    <div className="aboutUsContent">
                        <h2>{aboutData.title}</h2>
                        <div className="logoContainer">
                            <img src={medLogo} alt="medLogo" className='medLogo' />
                        </div>
                        <div className="titleContainer">
                            <div className="textGroup">
                                <h2>{aboutData.subtitle.substring(0, 19)}</h2>
                                <h2 className='greenText'>{aboutData.subtitle.substring(20)}</h2>
                            </div>
                        </div>
                        <div className='textContainer'>
                            <p>{aboutData.description}</p>
                        </div>
                    </div>
                </div>
            </MediaQuery >
            <MediaQuery maxDeviceWidth={767}>
                <div className='mobileAbout'>
                    <div className='desktopHome'>
                        <div className="aboutUsContent">
                            <h2>{aboutData.title}</h2>
                            <div className="logoContainer">
                                <img src={medLogo} alt="medLogo" className='medLogo' />
                            </div>
                            <div className="titleContainer">
                                <div className="textGroup">
                                    <h2>{aboutData.subtitle.substring(0, 19)}</h2>
                                    <h2 className='greenText'>{aboutData.subtitle.substring(20)}</h2>
                                </div>
                            </div>
                            <div className='textContainer'>
                                <p>{aboutData.description}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </MediaQuery>
        </div>
    );
}

export default AboutUs;
