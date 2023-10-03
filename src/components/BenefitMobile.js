import React, { useState, useEffect } from 'react';
import '../style/Benefits.css';
import MediaQuery from 'react-responsive';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const baseURL = "https://progboard.app-med.com/api/benefits";
const infoURL = "https://progboard.app-med.com/api/infos";

const BenefitMobile = ({ onCloseButtonClick }) => {
    const [benefitsData, setBenefitsData] = useState([]);
    const [infoData, setInfoData] = useState([]);

    const [showBenefitMobile, setShowBenefitMobile] = useState(true);

    const handleButtonClick = () => {
        setShowBenefitMobile(false);
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
                                <img src={`https://progboard.app-med.com/storage/${item.image}`} alt={item.title} />
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
            <MediaQuery maxDeviceWidth={767}>
                <div className='mobileBenefits'>
                    <div className="benefitsContent">
                        {renderColumns()}
                    </div>
                    <button className='serviceButton' onClick={onCloseButtonClick}>Close Benefits</button>
                </div >
            </MediaQuery >
        </div >
    )
}

export default BenefitMobile;
