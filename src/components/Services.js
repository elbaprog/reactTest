import React from 'react';
import '../style/Services.css';
import Telemedicine from "../img/telemedicine.png";
import Prescription from "../img/prescription.png";
import Mobile from "../img/mobile.png";
import Scalability from "../img/scalability.png";
import Integration from "../img/integration.png";
import Workflow from "../img/workflow.png";
import Portal from "../img/portal.png";
import MediaQuery from 'react-responsive';
const Services = () => {
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
                        <div class="col-lg-6 col-sm-6 col-xs-12 box-item">
                            <span class="icon">
                                <img src={Telemedicine} alt="Telemedicine" />
                            </span>
                            <div class="text">
                                <h4>Telemedicine Integration</h4>
                                <p><ul><li>Secure video conferencing for virtual consultations between doctors and patients.</li>
                                    <li>Remote monitoring and diagnosis for ongoing care.</li>
                                    <li>Accessibility for patients in remote or underserved areas.</li></ul></p>
                            </div>
                        </div>
                        <div class="col-lg-6 col-sm-6 col-xs-12 box-item">
                            <span class="icon">
                                <img src={Prescription} alt="Prescription" />
                            </span>
                            <div class="text">
                                <h4>Prescription Management</h4>
                                <p><ul><li>Electronic prescription generation and transmission to pharmacies.</li>
                                    <li>Drug interaction checks and allergy alerts for patient safety.</li>
                                    <li>Efficient medication management and refills. </li></ul></p>
                            </div>
                        </div>
                        <div class="col-lg-6 col-sm-6 col-xs-12 box-item">
                            <span class="icon">
                                <img src={Portal} alt="Portal" />
                            </span>
                            <div class="text">
                                <h4>Patient Portal</h4>
                                <p><ul><li>Secure online platform for patients to access their medical records.</li>
                                    <li>Communication with healthcare providers through secure messaging.</li>
                                    <li>Ability to view test results and treatment plans.</li></ul></p>
                            </div>
                        </div>
                        <div class="col-lg-6 col-sm-6 col-xs-12 box-item">
                            <span class="icon">
                                <img src={Workflow} alt="Workflow" />
                            </span>
                            <div class="text">
                                <h4>Workflow Automation</h4>
                                <p><ul><li>Streamlined administrative tasks for healthcare providers.</li>
                                    <li>Automated reminders for follow-ups, vaccinations, and screenings.</li>
                                    <li>More time for personalized patient care.</li></ul></p>
                            </div>
                        </div>
                        <div class="col-lg-6 col-sm-6 col-xs-12 box-item">
                            <span class="icon">
                                <img src={Integration} alt="Integration" />
                            </span>
                            <div class="text">
                                <h4>Integration Capabilities</h4>
                                <p><ul><li>Seamless integration with existing hospital or clinic systems.</li>
                                    <li>Compatibility with medical devices for data input (blood pressure monitors, glucose meters, etc.).</li>
                                    <li>Enhances interoperability and data exchange.</li></ul></p>
                            </div>
                        </div>
                        <div class="col-lg-6 col-sm-6 col-xs-12 box-item">
                            <span class="icon">
                                <img src={Scalability} alt="Scalability" />
                            </span>
                            <div class="text">
                                <h4>Customization and Scalability</h4>
                                <p><ul>
                                    <li>Tailor the software to fit the specific needs of different healthcare providers.</li>
                                    <li>Ability to scale as the practice or facility grows.</li>
                                    <li>Flexibility to adapt to changing workflows and requirements.</li></ul></p>
                            </div>
                        </div>
                        <div class="col-lg-6 col-sm-6 col-xs-12 box-item">
                            <span class="icon">
                                <img src={Mobile} alt="Mobile" />
                            </span>
                            <div class="text">
                                <h4>Mobile Accessibility</h4>
                                <p><ul>
                                    <li>Mobile app for healthcare providers and patients to access information on the go.</li>
                                    <li>View patient records, schedule appointments, and communicate remotely.</li></ul></p>
                            </div>
                        </div>
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
                        <div class="col-lg-6 col-sm-6 col-xs-12 box-item">
                            <span class="icon">
                                <img src={Telemedicine} alt="Telemedicine" />
                            </span>
                            <div class="text">
                                <h4>Telemedicine Integration</h4>
                                <p><ul><li>Secure video conferencing for virtual consultations between doctors and patients.</li>
                                    <li>Remote monitoring and diagnosis for ongoing care.</li>
                                    <li>Accessibility for patients in remote or underserved areas.</li></ul></p>
                            </div>
                        </div>
                        <div class="col-lg-6 col-sm-6 col-xs-12 box-item">
                            <span class="icon">
                                <img src={Prescription} alt="Prescription" />
                            </span>
                            <div class="text">
                                <h4>Prescription Management</h4>
                                <p><ul><li>Electronic prescription generation and transmission to pharmacies.</li>
                                    <li>Drug interaction checks and allergy alerts for patient safety.</li>
                                    <li>Efficient medication management and refills. </li></ul></p>
                            </div>
                        </div>
                        <div class="col-lg-6 col-sm-6 col-xs-12 box-item">
                            <span class="icon">
                                <img src={Portal} alt="Portal" />
                            </span>
                            <div class="text">
                                <h4>Patient Portal</h4>
                                <p><ul><li>Secure online platform for patients to access their medical records.</li>
                                    <li>Communication with healthcare providers through secure messaging.</li>
                                    <li>Ability to view test results and treatment plans.</li></ul></p>
                            </div>
                        </div>
                        <div class="col-lg-6 col-sm-6 col-xs-12 box-item">
                            <span class="icon">
                                <img src={Workflow} alt="Workflow" />
                            </span>
                            <div class="text">
                                <h4>Workflow Automation</h4>
                                <p><ul><li>Streamlined administrative tasks for healthcare providers.</li>
                                    <li>Automated reminders for follow-ups, vaccinations, and screenings.</li>
                                    <li>More time for personalized patient care.</li></ul></p>
                            </div>
                        </div>
                        <div class="col-lg-6 col-sm-6 col-xs-12 box-item">
                            <span class="icon">
                                <img src={Integration} alt="Integration" />
                            </span>
                            <div class="text">
                                <h4>Integration Capabilities</h4>
                                <p><ul><li>Seamless integration with existing hospital or clinic systems.</li>
                                    <li>Compatibility with medical devices for data input (blood pressure monitors, glucose meters, etc.).</li>
                                    <li>Enhances interoperability and data exchange.</li></ul></p>
                            </div>
                        </div>
                        <div class="col-lg-6 col-sm-6 col-xs-12 box-item">
                            <span class="icon">
                                <img src={Scalability} alt="Scalability" />
                            </span>
                            <div class="text">
                                <h4>Customization and Scalability</h4>
                                <p><ul>
                                    <li>Tailor the software to fit the specific needs of different healthcare providers.</li>
                                    <li>Ability to scale as the practice or facility grows.</li>
                                    <li>Flexibility to adapt to changing workflows and requirements.</li></ul></p>
                            </div>
                        </div>
                        <div class="col-lg-6 col-sm-6 col-xs-12 box-item">
                            <span class="icon">
                                <img src={Mobile} alt="Mobile" />
                            </span>
                            <div class="text">
                                <h4>Mobile Accessibility</h4>
                                <p><ul>
                                    <li>Mobile app for healthcare providers and patients to access information on the go.</li>
                                    <li>View patient records, schedule appointments, and communicate remotely.</li></ul></p>
                            </div>
                        </div>
                    </div>
                </div>
            </MediaQuery>
        </div >
    )
}
export default Services;