import React, { useState, useEffect } from 'react'; import '../style/Client.css';
import '../style/Demo.css';
import Laptop from "../img/laptopi.png";
import DemoIcon from "../img/demo.png";
import MediaQuery from 'react-responsive';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const baseURL = "https://progboard.app-med.com/api/infos";

const Demo = () => {

    const [demoData, setDemoData] = useState([]);

    useEffect(() => {
        axios.get(baseURL)
            .then((response) => {
                const demoInfo = response.data.infos;
                setDemoData(demoInfo);
            })
            .catch((error) => {
                console.error('Error fetching service data:', error);
            });
    }, []);

    if (!demoData) return null;

    return (
        <div className="demo" id="demoId">
            <MediaQuery minDeviceWidth={768}>
                <div className='desktopDemo'>
                    <div className='row'>
                        {/* <div className="col-md-6 col-sm-6"><img src={`https://progboard.app-med.com/storage/${demoData.icon}`} alt="DemoIcon" className='demoIcon' /> </div> */}
                        <div className="col-12"> <h2> {demoData.demo_title} </h2> </div>
                    </div>
                    <p>{demoData.demo_description}</p>
                    <img src={`https://progboard.app-med.com/storage/${demoData.image}`} alt="Laptop" />
                </div>
            </MediaQuery >
            <MediaQuery maxDeviceWidth={767}>
                <div className='mobileDemo'>
                    <div className='row'>
                        <div className="col-md-4 col-sm-6"><img src={`https://progboard.app-med.com/storage/${demoData.icon}`} alt="DemoIcon" className='demoIcon' /> </div>
                        <div className="col-md-4 col-sm-6"> <h2> {demoData.demo_title} </h2> </div>
                    </div>
                    <p>{demoData.demo_description}</p>
                    <img src={`https://progboard.app-med.com/storage/${demoData.image}`} alt="Laptop" />
                </div>
            </MediaQuery>
        </div>
    )
}
export default Demo;