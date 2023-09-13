import React from 'react';
import '../style/Contact.css';
import ContactForm from './ContactForm';
import ContactBar from './ContactBar';
import MediaQuery from 'react-responsive';


const Contact = () => {
    return (
        <div className="contact" id="contactId">
            <MediaQuery minDeviceWidth={768}>
                <div className='desktopContact'>
                    {/* <div class="contact-form"> */}

                    <div class="row">
                        <div class="col-lg-6 col-sm-6 col-xs-12 column">
                            <ContactBar />
                        </div>
                        <div class="col-lg-5 col-sm-5 col-xs-12 column">
                            <div class="contact-block">
                                <ContactForm />
                            </div>
                        </div>
                    </div>

                    {/* </div> */}
                </div>
            </MediaQuery>
            <MediaQuery maxDeviceWidth={767}>
                <div className='mobileContact'>
                    {/* <div class="contact-form"> */}

                    <div class="row">
                        <div class="col-12">
                            <ContactBar />
                        </div>
                        <div class="col-12">
                            <div class="contact-block">
                                <ContactForm />
                            </div>
                        </div>
                    </div>

                    {/* </div> */}
                </div>
            </MediaQuery>
        </div>
    )
}
export default Contact;