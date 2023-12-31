import React, { useState, useEffect } from 'react'; import '../style/Client.css';
import medLogo from "../img/medLogo.png";
// import Avicena from "../img/avicena.png";
// import Pinea from "../img/pinea.png";
import MediaQuery from 'react-responsive';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import img1 from '../img/clients/1.png';
import img2 from '../img/clients/2.png';

const baseURL = "https://progboard.app-med.com/api/clients";

const Clients = () => {

    const [clientsData, setClientsData] = useState([]);

    useEffect(() => {
        axios.get(baseURL)
            .then((response) => {
                const clientsInfo = response.data.clients;
                setClientsData(clientsInfo);
            })
            .catch((error) => {
                console.error('Error fetching service data:', error);
            });
    }, []);

    if (!clientsData) return null;

    const imageMapping = {
        1: img1,
        2: img2,
        // ... Add more mappings based on ID as needed
    };

    const renderColumns = () => {
        const maxColumns = 2;
        const rows = [];

        for (let i = 0; i < clientsData.length; i += maxColumns) {
            const row = clientsData.slice(i, i + maxColumns);
            rows.push(
                <div className="row" key={i}>
                    {row.map(item => (
                        <div class="col-lg-6 col-sm-6 col-xs-12 box-item" key={item.id}>
                            <div class="box-item">
                                <span class="icon">
                                    {/* <img src={`https://progboard.app-med.com/storage/${item.image}`} alt={item.title} className='clientLogo' /> */}
                                    {/* <img src={`../img/${item.id}.png`} alt={item.title} className='clientLogo' /> */}
                                    <img src={imageMapping[item.id] || `../img/clients/${item.id}.png`} alt={item.title} className='clientLogo' />
                                </span>
                                <div class="text">
                                    <p>{item.description}</p>

                                    <ul>
                                        {item.contact.split('\n').map((desc, index) => (
                                            <li key={index}>{desc.trim()}</li>
                                        ))}
                                    </ul>

                                </div>
                            </div>
                        </div>
                    ))}





                </div>
            );
        }

        return rows;
    };

    return (
        <div className="clients" id="clientsId">
            <MediaQuery minDeviceWidth={768}>
                <div className='desktopClients'>
                    <div className='clientsContainer'>
                        <h2>Our Clients</h2>
                        <div className="logoContainer">
                            <img src={medLogo} alt="medLogo" className='medLogo' />
                        </div>
                    </div>
                    <div className="clientRow">
                        {renderColumns()}
                    </div>
                </div>
            </MediaQuery >
            <MediaQuery maxDeviceWidth={767}>
                <div className='mobileClients'>
                    <div className='clientsContainer'>
                        <h2>Our Clients</h2>
                        <div className="logoContainer">
                            <img src={medLogo} alt="medLogo" className='medLogo' />
                        </div>
                    </div>
                    <div className="clientRow">
                        {renderColumns()}
                    </div>
                </div>
            </MediaQuery>
        </div>
    )
}

export default Clients;
