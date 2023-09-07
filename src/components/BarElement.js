import React from 'react';
import AppMed from '../img/appmed.png'
const BarElement = () => {
    return (
        <div className="section" id="sectionId">
            <div className='row appLogo'>
                <img src={AppMed} alt="AppMed" />
            </div>
            <div className='row'>
                <ul>
                    <li>
                        Privacy and Settings
                    </li>
                    <li>
                        FAQs
                    </li>
                </ul>
            </div>
        </div>
    )
}
export default BarElement;