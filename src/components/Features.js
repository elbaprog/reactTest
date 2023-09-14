import React, { useState, useEffect } from 'react';
import '../style/Features.css';
import MediaQuery from 'react-responsive';
import axios from 'axios';

const baseURL = "http://192.168.88.239:85/api/features";
const Features = () => {
    const [featuresData, setFeaturesData] = useState([]);

    useEffect(() => {
        axios.get(baseURL)
            .then(response => {
                const featuresInfo = response.data.features.map(item => ({
                    ...item,
                }));

                setFeaturesData(featuresInfo);

            })
            .catch(error => {
                console.error('Error fetching data from API:', error);
            });
    }, []);

    if (!featuresData) return null;

    const renderColumns = () => {
        const maxColumns = 3;
        const rows = [];

        for (let i = 0; i < featuresData.length; i += maxColumns) {
            const row = featuresData.slice(i, i + maxColumns);
            rows.push(
                <div className="row" key={i}>
                    {row.map(item => (
                        <div className="col-md-4 col-sm-6" key={item.id}>
                            <div className="item-boxes wow fadeInDown" data-wow-delay="0.2s">
                                <div className="icon">
                                    <img src={`http://192.168.88.239:85/storage/${item.image}`} alt={item.title} />

                                </div>
                                <h4>{item.title}</h4>
                                <p>{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            );
        }

        return rows;
    };
    return (
        <div className="features" id="featuresId">
            <MediaQuery minDeviceWidth={768}>
                <div className='desktopFeatures'>
                    <div className="featuresContent">
                        {renderColumns()}
                    </div>
                </div>
            </MediaQuery >
            <MediaQuery maxDeviceWidth={767}>
                <div className='mobileFeatures'>
                    <div className="featuresContent">
                        {renderColumns()}
                    </div>
                </div>
            </MediaQuery>
        </div >
    )
}
export default Features; 