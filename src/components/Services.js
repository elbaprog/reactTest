import React, { useState, useEffect } from 'react';
import '../style/Services.css';
import MediaQuery from 'react-responsive';
import axios from 'axios';
import ServiceMobile from './ServiceMobile'
import 'bootstrap/dist/css/bootstrap.min.css';

const baseURL = "https://progboard.app-med.com/api/services";
const Services = () => {
    const [servicesData, setServicesData] = useState([]);

    const [showServiceMobile, setShowServiceMobile] = useState(false);

    const handleButtonClick = () => {
        setShowServiceMobile(true);
    };

    const handleCloseButtonClick = () => {
        setShowServiceMobile(false); // Set to false to hide ServiceMobile
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
                                {/* <p>{item.description}</p> */}

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
            <MediaQuery minDeviceWidth={768}>
                <div className='desktopServices'>
                    <div className="servicesContent">
                        {renderColumns()}
                    </div>
                </div>
            </MediaQuery >
            <MediaQuery maxDeviceWidth={767}>
                <div className='mobileServices'>
                    {/* <div className="servicesContent">
                        {renderColumns()}
                    </div> */}
                    {!showServiceMobile && (
                        <button className='serviceButton' onClick={handleButtonClick}>Check our services</button>
                    )}
                    {showServiceMobile && (
                        <ServiceMobile onCloseButtonClick={handleCloseButtonClick} />
                    )}
                </div>
            </MediaQuery>
        </div >
    )
}
export default Services; 