import React from 'react';
import '../style/Features.css';
import EHR from "../img/EHR.png";
import AppSchedule from "../img/AppSchedule.png";
import Billing from "../img/Billing.png";
import Data from "../img/Data.png";
import Security from "../img/Security.png";
import Twentyfour from "../img/24h.png";
import MediaQuery from 'react-responsive';


const Features = () => {
    return (
        <div className="features" id="featuresId">
            <MediaQuery minDeviceWidth={768}>
                <div className='desktopFeatures'>
                    <div className="featuresContent">
                        <div className="row">
                            <div className="col-md-4 col-sm-6">
                                <div className="item-boxes wow fadeInDown" data-wow-delay="0.2s">
                                    <div className="icon">
                                        <img src={EHR} alt="EHR" />
                                    </div>
                                    <h4>Electronic Health Records (EHR)</h4>
                                    <p>Efficiently store and manage patient records digitally.
                                        Easy access to patient medical history, treatments, and medications.
                                        Streamlined data entry and retrieval.</p>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-6">
                                <div className="item-boxes wow fadeInDown" data-wow-delay="0.8s">
                                    <div className="icon">
                                        <img src={AppSchedule} alt="AppSchedule" />
                                    </div>
                                    <h4>Appointment Scheduling</h4>
                                    <p>Online booking for patients and efficient calendar management for healthcare providers.
                                        Automated reminders for upcoming appointments via email or SMS.Reduced no-show rates with timely reminders.</p>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-6">
                                <div className="item-boxes wow fadeInDown" data-wow-delay="1.2s">
                                    <div className="icon">
                                        <img src={Billing} alt="billing" />
                                    </div>
                                    <h4>Billing and Claims Processing</h4>
                                    <p>Seamless billing and invoicing for patients and insurance companies.Integration with insurance providers for quicker claims processing.
                                        Transparency in financial transactions for patients.</p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4 col-sm-6">
                                <div className="item-boxes wow fadeInDown" data-wow-delay="0.2s">
                                    <div className="icon">
                                        <img src={Data} alt="data" />
                                    </div>
                                    <h4>Data Analytics and Reporting</h4>
                                    <p>Generate insights from patient data for informed decision-making.
                                        Identify trends, patient outcomes and areas for improvement.
                                        Compliance with industry standards for data reporting.</p>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-6">
                                <div className="item-boxes wow fadeInDown" data-wow-delay="0.8s">
                                    <div className="icon">
                                        <img src={Security} alt="security" />
                                    </div>
                                    <h4>Security and Compliance</h4>
                                    <p>Robust data encryption and storage to ensure patient data security.
                                        Compliance with regulations such as HIPAA, GDPR,and other data protection standards.
                                        Regular security audits and updates.</p>
                                </div>
                            </div >
                            <div className="col-md-4 col-sm-6">
                                <div className="item-boxes wow fadeInDown" data-wow-delay="1.2s">
                                    <div className="icon">
                                        <img src={Twentyfour} alt="24h" />
                                    </div>
                                    <h4>24 Hours Service</h4>
                                    <p>Our software enables you to reach out to healthcare professionals without delay. Whether it's the middle of the night or a busy workday, help is just a click away.</p>
                                </div>
                            </div >
                        </div >
                    </div>
                </div>
            </MediaQuery >
            <MediaQuery maxDeviceWidth={767}>
                <div className='mobileFeatures'>
                    <div className="featuresContent">
                        <div className="row">
                            <div className="col-md-4 col-sm-6">
                                <div className="item-boxes wow fadeInDown" data-wow-delay="0.2s">
                                    <div className="icon">
                                        <img src={EHR} alt="EHR" />
                                    </div>
                                    <h4>Electronic Health Records (EHR)</h4>
                                    <p>Efficiently store and manage patient records digitally.
                                        Easy access to patient medical history, treatments, and medications.
                                        Streamlined data entry and retrieval.</p>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-6">
                                <div className="item-boxes wow fadeInDown" data-wow-delay="0.8s">
                                    <div className="icon">
                                        <img src={AppSchedule} alt="AppSchedule" />
                                    </div>
                                    <h4>Appointment Scheduling</h4>
                                    <p>Online booking for patients and efficient calendar management for healthcare providers.
                                        Automated reminders for upcoming appointments via email or SMS.Reduced no-show rates with timely reminders.</p>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-6">
                                <div className="item-boxes wow fadeInDown" data-wow-delay="1.2s">
                                    <div className="icon">
                                        <img src={Billing} alt="billing" />
                                    </div>
                                    <h4>Billing and Claims Processing</h4>
                                    <p>Seamless billing and invoicing for patients and insurance companies.Integration with insurance providers for quicker claims processing.
                                        Transparency in financial transactions for patients.</p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4 col-sm-6">
                                <div className="item-boxes wow fadeInDown" data-wow-delay="0.2s">
                                    <div className="icon">
                                        <img src={Data} alt="data" />
                                    </div>
                                    <h4>Data Analytics and Reporting</h4>
                                    <p>Generate insights from patient data for informed decision-making.
                                        Identify trends, patient outcomes and areas for improvement.
                                        Compliance with industry standards for data reporting.</p>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-6">
                                <div className="item-boxes wow fadeInDown" data-wow-delay="0.8s">
                                    <div className="icon">
                                        <img src={Security} alt="security" />
                                    </div>
                                    <h4>Security and Compliance</h4>
                                    <p>Robust data encryption and storage to ensure patient data security.
                                        Compliance with regulations such as HIPAA, GDPR,and other data protection standards.
                                        Regular security audits and updates.</p>
                                </div>
                            </div >
                            <div className="col-md-4 col-sm-6">
                                <div className="item-boxes wow fadeInDown" data-wow-delay="1.2s">
                                    <div className="icon">
                                        <img src={Twentyfour} alt="24h" />
                                    </div>
                                    <h4>24 Hours Service</h4>
                                    <p>Our software enables you to reach out to healthcare professionals without delay. Whether it's the middle of the night or a busy workday, help is just a click away.</p>
                                </div>
                            </div >
                        </div >
                    </div>
                </div>
            </MediaQuery>
        </div >
    )
}
export default Features; 