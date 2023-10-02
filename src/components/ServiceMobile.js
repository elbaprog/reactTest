import React, { useState, useEffect } from 'react';
import '../style/Services.css';
import MediaQuery from 'react-responsive';
import axios from 'axios';

const baseURL = "https://progboard.app-med.com/api/services";

const ServiceMobile = ({ onCloseButtonClick }) => {
    const [servicesData, setServicesData] = useState([]);

    const [showServiceMobile, setShowServiceMobile] = useState(true);

    const handleButtonClick = () => {
        setShowServiceMobile(false);
    };

    useEffect(() => {
        axios.get(baseURL)
            .then(response => {
                const servicesInfo = response.data.services.map(item => ({
                    ...item,
                }));

                setServicesData(servicesInfo);

            })
            .catch(error => {
                console.error('Error fetching data from API:', error);
            });
    }, []);

    if (!servicesData) return null;

    const renderColumns = () => {
        const maxColumns = 4;
        const rows = [];

        for (let i = 0; i < servicesData.length; i += maxColumns) {
            const row = servicesData.slice(i, i + maxColumns);
            rows.push(
                <div className="row" key={i}>
                    {row.map(item => (
                        <div className="col-md-3 col-sm-4" key={item.id}>
                            <div className="item-boxes wow fadeInDown" data-wow-delay="0.2s">
                                <div className="icon">
                                    <img src={`https://progboard.app-med.com/storage/${item.image}`} alt={item.title} />
                                </div>
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
        <div className="services" id="servicesId">
            <MediaQuery maxDeviceWidth={767}>
                <div className='mobileServices'>
                    <div className="servicesContent">
                        {renderColumns()}
                    </div>
                    <button className='serviceButton' onClick={onCloseButtonClick}>Close Services</button>
                </div >
            </MediaQuery >
        </div >
    )
}

export default ServiceMobile;
