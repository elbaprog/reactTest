import React from 'react';
import '../style/Demo.css';
import Laptop from "../img/laptopi.png";
import DemoIcon from "../img/demo.png";
const Demo = () => {
    return (
        <div className="demo" id="demoId">
            <div className='row'>
                <div className="col-md-4 col-sm-6"><img src={DemoIcon} alt="DemoIcon" className='demoIcon' /> </div>
                <div className="col-md-4 col-sm-6"> <h2> Appmed Demo </h2> </div>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <img src={Laptop} alt="Laptop" />
        </div>
    )
}
export default Demo;