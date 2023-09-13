import React, { useState } from 'react';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
        phone: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here, e.g., send data to a server or display a confirmation message
        console.log(formData);
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
