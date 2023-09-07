import React from 'react';
import '../style/Contact.css';
import ContactForm from './ContactForm';
import ContactBar from './ContactBar';
import BarElement from './BarElement';
const Contact = () => {
    return (
        <div className="contact" id="contactId">
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
    )
}
export default Contact;