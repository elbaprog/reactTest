
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const baseUrl = 'https://progboard.app-med.com/api/contact';
const ContactForm = () => {

    const initialFormData = {
        name: '',
        phone: '',
        email: '',
        message: '',
        domain: window.location.hostname
    };

    const [formData, setFormData] = useState(initialFormData);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(baseUrl, formData);

            console.log('Data sent successfully', response.data);
            alert('Thank you for contacting us!');
            setFormData(initialFormData);
        } catch (error) {
            console.error('Error sending data', error);
            alert('Could not send your message. Try again!')
        }
    };


    return (
        <div className="contact-block">
            <form id="contactForm" onSubmit={handleSubmit}>
                <div className="row contact">
                    <div className="col-md-12">
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control rounded-input"
                                id="name"
                                name="name"
                                placeholder="Your Name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                            <div className="help-block with-errors"></div>
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="form-group">
                            <input
                                type="tel"
                                className="form-control rounded-input"
                                id="phone"
                                name="phone"
                                placeholder="Your Phone"
                                value={formData.phone}
                                onChange={handleChange}
                                required
                            />
                            <div className="help-block with-errors"></div>
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="form-group">
                            <input
                                type="email"
                                className="form-control rounded-input"
                                id="email"
                                name="email"
                                placeholder="Your Email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                            <div className="help-block with-errors"></div>
                        </div>
                    </div>

                    <div className="col-md-12">
                        <div className="form-group">
                            <textarea
                                className="form-control rounded-textarea"
                                id="message"
                                name="message"
                                placeholder="Your Message"
                                rows="8"
                                value={formData.message}
                                onChange={handleChange}
                                required
                            ></textarea>
                            <div className="help-block with-errors"></div>
                        </div>
                        <div className="submit-button">
                            <button className="btn btn-common rounded-button" id="submit" type="submit">
                                SEND
                            </button>
                            <div id="msgSubmit" className="h3 text-center hidden"></div>
                            <div className="clearfix"></div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default ContactForm;
