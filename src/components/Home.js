import React from 'react';
import banner from "../img/banner.png";
import '../style/Home.css';
import { TypeAnimation } from 'react-type-animation';

const Home = () => {
    return (
        <div className="home" id="homeId">
            <div className='text'>
                <h2>Software of your healthcare company is our</h2>
                <h1>  <TypeAnimation
                    sequence={[
                        "Responsibility",
                        1000,
                        'Purpose',
                        1000,
                        'Ambition',
                        1000
                    ]}
                    wrapper="span"
                    speed={50}

                    repeat={Infinity}
                /></h1>
            </div>
            <div className='banner'>
                <img src={banner} alt="girl" />
            </div>
        </div>
    )
}

export default Home;

