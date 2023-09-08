import React from 'react';
import '../style/Contact.css';
import ContactForm from './ContactForm';
import ContactBar from './ContactBar';
import BarElement from './BarElement';
import MediaQuery from 'react-responsive';
import AppMed from '../img/appmed.png'

const Contact = () => {
    return (
        <div className="contact" id="contactId">
            <MediaQuery minDeviceWidth={768}>
                <div className='desktopContact'>
                    <div class="contact-form">

                        <div class="row">
                            <div class="col-md-4 col-sm-6 column">
                                <ContactBar />
                            </div>
                            <div class="col-md-4 col-sm-6 column">
                                <BarElement />
                            </div>
                            <div class="col-md-4 col-sm-6 column">
                                <div class="contact-block">
                                    <ContactForm />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </MediaQuery>
            <MediaQuery maxDeviceWidth={767}>
                <div className='mobileContact'>
                    <div class="contact-form">

                        <div class="row">
                            {/* <div class="col-md-4 col-sm-6 column">
                                <ContactBar />
                            </div> */}
                            <div className='row appLogo'>
                                <img src={AppMed} alt="AppMed" />
                            </div>
                            <div class="col-md-4 col-sm-6 column">
                                <div class="contact-block">
                                    <ContactForm />
                                </div>
                            </div>
                            <div className='list'>

                                <h3> Privacy and Settings</h3>
                                <h3>      FAQs</h3>
                            </div>
                        </div>

                    </div>
                </div>
            </MediaQuery>
        </div>
    )
}
export default Contact;