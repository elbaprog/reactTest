import React, { useState, useEffect } from 'react';
import '../style/Services.css';
import Telemedicine from "../img/telemedicine.png";
import Prescription from "../img/prescription.png";
import Mobile from "../img/mobile.png";
import Scalability from "../img/scalability.png";
import Integration from "../img/integration.png";
import Workflow from "../img/workflow.png";
import Portal from "../img/portal.png";
import MediaQuery from 'react-responsive';
import axios from 'axios';

const baseURL = "http://192.168.1.41:85/api/services";
const Services = () => {

    const [servicesData, setServicesData] = useState([]);

    useEffect(() => {
        axios.get(baseURL)
            .then((response) => {
                const servicesInfo = response.data.services; // Use response.data.services
                setServicesData(servicesInfo);
            })
            .catch((error) => {
                console.error('Error fetching service data:', error);
            });
    }, []);

    if (!servicesData) return null;


    const renderColumns = () => {
        const maxColumns = 2;
        const rows = [];

        for (let i = 0; i < servicesData.length; i += maxColumns) {
            const row = servicesData.slice(i, i + maxColumns);
            rows.push(
                <div className="row" key={i}>
                    {row.map(item => (
                        <div class="col-lg-6 col-sm-6 col-xs-12 box-item" key={item.id}>
                            <span class="icon">
                                <img src={`http://192.168.1.41:85/storage/${item.image}`} alt={item.title} />
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
        <div className="services" id="servicesId">
            <MediaQuery minDeviceWidth={768}>
                <div className='desktopServices'>
                    <div className='welcomeBanner'>
                        <h1>Welcome to a new era of Healthcare Management Software</h1>
                        <p>Designed to streamline workflows, enhance patient care, and empower healthcare professionals,
                            our software offers a comprehensive suite of features tailored to the unique needs of the healthcare industry.</p>
                    </div>
                    <h2>Revolutionize Healthcare Management with Our Software Application's Advanced Services</h2>

                    <div class="row">
                        {renderColumns()}
                    </div>
                </div>
            </MediaQuery >
            <MediaQuery maxDeviceWidth={767}>
                <div className='mobileServices'>
                    <div className='welcomeBanner'>
                        <h1>Welcome to a new era of Healthcare Management Software</h1>
                        <p>Designed to streamline workflows, enhance patient care, and empower healthcare professionals,
                            our software offers a comprehensive suite of features tailored to the unique needs of the healthcare industry.</p>
                    </div>
                    <h2>Revolutionize Healthcare Management with Our Software Application's Advanced Services</h2>

                    <div class="row">
                        {renderColumns()}
                    </div>
                </div>
            </MediaQuery>
        </div >
    )
}
export default Services;