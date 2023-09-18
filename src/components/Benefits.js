import React, { useState, useEffect } from 'react';
import '../style/Benefits.css';
import MediaQuery from 'react-responsive';
import axios from 'axios';
import medLogo from "../img/medLogo.png";
import BenefitMobile from './BenefitMobile'

// const baseURL = "https://progboard.app-med.com/api/benefits";
// const infoURL = "https://progboard.app-med.com/api/infos";
const baseURL = "http://192.168.88.239:85/api/benefits";
const infoURL = "http://192.168.88.239:85/api/infos";


const Benefits = () => {

    const [benefitsData, setBenefitsData] = useState([]);
    const [infoData, setInfoData] = useState([]);


    const [showBenefitMobile, setShowBenefitMobile] = useState(false);

    const handleButtonClick = () => {
        setShowBenefitMobile(true);
    };

    const handleCloseButtonClick = () => {
        setShowBenefitMobile(false); // Set to false to hide BenefitMobile
    };
    useEffect(() => {
        axios.get(baseURL)
            .then((response) => {
                const benefitsInfo = response.data.benefits; // Use response.data.benefits
                setBenefitsData(benefitsInfo);
            })
            .catch((error) => {
                console.error('Error fetching benefit data:', error);
            });

        axios.get(infoURL)
            .then((response) => {
                const info = response.data.infos;
                setInfoData(info);
            })
            .catch((error) => {
                console.error('Error fetching info data:', error);
            });
    }, []);

    if (!benefitsData || !infoData) return null;


    const renderColumns = () => {
        const maxColumns = 3;
        const rows = [];

        for (let i = 0; i < benefitsData.length; i += maxColumns) {
            const row = benefitsData.slice(i, i + maxColumns);
            const isLastRow = i + maxColumns >= benefitsData.length;
            rows.push(
                <div className={`row ${isLastRow ? 'last-row' : ''}`} key={i}>
                    {row.map(item => (
                        <div class="col-lg-4 col-sm-4 col-xs-6 box-item" key={item.id}>
                            <span class="icon">
                                <img src={`http://192.168.88.239:85/storage/${item.image}`} alt={item.title} />
                            </span>
                            <div class="text">
                                <h4>{item.title}</h4>
                                <ul>
                                    {item.description.split('\n').map((desc, index) => (
                                        <li key={index}>{desc.trim()}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            );
        }

        return rows;
    };

    return (
        <div className="benefits" id="benefitsId">
            <MediaQuery minDeviceWidth={768}>
                <div className='desktopBenefits'>

                    <div className='welcomeBanner'>
                        <h1>{infoData.service_intro}</h1>
                        <div className="logoContainer">
                            <img src={medLogo} alt="medLogo" className='medLogo' />
                        </div>
                        <p>{infoData.service_description}</p>
                    </div>

                    {/* <h2>Revolutionize Healthcare Management with Our Software Application's Advanced benefits</h2> */}

                    <div class="row">
                        {renderColumns()}
                    </div>
                </div>
            </MediaQuery >
            <MediaQuery maxDeviceWidth={767}>
                <div className='mobileBenefits'>

                    <div className='welcomeBanner'>
                        <h1>{infoData.service_intro}</h1>
                        <p>{infoData.service_description}</p>
                    </div>

                    {/* <div class="row">
                        {renderColumns()}
                    </div> */}

                    {!showBenefitMobile && (
                        <button className='serviceButton' onClick={handleButtonClick}>Check our Benefits</button>
                    )}
                    {showBenefitMobile && (
                        <BenefitMobile onCloseButtonClick={handleCloseButtonClick} />
                    )}
                </div>
            </MediaQuery>
        </div >
    )
}
export default Benefits;