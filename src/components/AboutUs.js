import React, { useState, useEffect } from 'react';
import '../style/AboutUs.css';
import medLogo from "../img/medLogo.png";
import MediaQuery from 'react-responsive';
import axios from 'axios';
import banner from "../img/banner.png";

// const baseURL = "https://progboard.app-med.com/api/abouts";
const baseURL = "http://192.168.88.239:85/api/abouts";


const AboutUs = () => {

    const [aboutData, setAboutData] = useState(
        null
    );

    useEffect(() => {
        axios.get(baseURL)
            .then((response) => {
                const aboutInfo = response.data.abouts;
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
                <div className='desktopAbout' style={{ padding: 20 }}>
                    <div className="aboutUsContent">
                        <h2>Who We Are</h2>
                        <div className="logoContainer">
                            <img src={medLogo} alt="medLogo" className='medLogo' />
                        </div>
                        <div className='subtitle'><h2>AppMed is Medical Application Platform</h2></div>


                    </div>


                    <div className='aboutUsDetailed'>
                        {aboutData.map((item, index) => (
                            <div className='row' key={item.id}>
                                {index % 2 === 0 ? (
                                    <>
                                        <div className='col-lg-6 col-sm-6 col-xs-12 odd'>

                                            <img src={`http://192.168.88.239:85/storage/${item.image}`} alt={item.title} className='evenImg' />
                                        </div>
                                        <div className='col-lg-6 col-sm-6 col-xs-12 textOfOdd'>
                                            <h2>{item.title}</h2>
                                            <p>{item.description}</p>
                                        </div>
                                    </>
                                ) : (
                                    <>
                                        <div className='col-lg-6 col-sm-6 col-xs-12 textOfEven'>
                                            <h2>{item.title}</h2>
                                            <p>{item.description}</p>
                                        </div>
                                        <div className='col-lg-6 col-sm-6 col-xs-12 even'>
                                            <img src={`http://192.168.88.239:85/storage/${item.image}`} alt={item.title} className='oddImg' />
                                        </div>
                                    </>
                                )}
                            </div>
                        ))}
                    </div>

                </div>
            </MediaQuery >
            <MediaQuery maxDeviceWidth={767}>
                <div className='mobileAbout'>
                    <div className="aboutUsContent">
                        <h2>Who We Are</h2>
                        <div className="logoContainer">
                            <img src={medLogo} alt="medLogo" className='medLogo' />
                        </div>
                        <div className='subtitle'><h2>AppMed is Medical Application Platform</h2></div>


                    </div>


                    <div className='aboutUsDetailed'>
                        {/* {aboutData.map((item, index) => (
                            <div className='row' key={item.id}>
                                {index % 2 === 0 ? (
                                    <>
                                        <div className='col-lg-6 col-sm-6 col-xs-12 odd'>

                                            <img src={`http://192.168.88.239:85/storage/${item.image}`} alt={item.title} className='evenImg' />
                                        </div>
                                        <div className='col-lg-6 col-sm-6 col-xs-12 textOfOdd'>
                                            <h2>{item.title}</h2>
                                            <p>{item.description}</p>
                                        </div>
                                    </>
                                ) : (
                                    <>
                                        <div className='col-lg-6 col-sm-6 col-xs-12 textOfEven'>
                                            <h2>{item.title}</h2>
                                            <p>{item.description}</p>
                                        </div>
                                        <div className='col-lg-6 col-sm-6 col-xs-12 even'>
                                            <img src={`http://192.168.88.239:85/storage/${item.image}`} alt={item.title} className='oddImg' />
                                        </div>
                                    </>
                                )}
                            </div>
                        ))} */}

                        {aboutData.map((item, index) => (
                            <div className='row' key={item.id}>
                                <div className='col-lg-6 col-sm-6 col-xs-12 mobileText'>
                                    <h2>{item.title}</h2>
                                    <p>{item.description}</p>
                                </div>
                                <div className='col-lg-6 col-sm-6 col-xs-12 mobileImage'>
                                    <img src={`http://192.168.88.239:85/storage/${item.image}`} alt={item.title} className='oddImg' />
                                </div>

                            </div>
                        ))}
                    </div>
                </div>
            </MediaQuery>
        </div>
    );
}

export default AboutUs;
