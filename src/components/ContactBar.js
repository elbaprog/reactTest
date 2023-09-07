import React, { useState } from 'react';
import { Link } from 'react-scroll';
const ContactBar = () => {
    return (
        <div class="contact-us">

            <div className="bar">
                <ul>
                    <li>
                        <Link
                            activeClass="active"
                            to="homeId"
                            spy={true}
                            smooth={true}
                            duration={500}>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            activeClass="active"
                            to="aboutId"
                            spy={true}
                            smooth={true}
                            duration={500}>
                            About Us
                        </Link>
                    </li>
                    <li>
                        <Link
                            activeClass="active"
                            to="featuresId"
                            spy={true}
                            smooth={true}
                            duration={500}>
                            Features
                        </Link>
                    </li>
                    <li>
                        <Link
                            activeClass="active"
                            to="servicesId"
                            spy={true}
                            smooth={true}
                            duration={500}>
                            Services
                        </Link>
                    </li>
                    <li>
                        <Link
                            activeClass="active"
                            to="clientsId"
                            spy={true}
                            smooth={true}
                            duration={500}>
                            Clients
                        </Link>
                    </li>
                    <li>
                        <Link
                            activeClass="active"
                            to="pricingId"
                            spy={true}
                            smooth={true}
                            duration={500}>
                            Pricing
                        </Link>
                    </li>
                    <li>
                        <Link
                            activeClass="active"
                            to="demoId"
                            spy={true}
                            smooth={true}
                            duration={500}>
                            Demo
                        </Link>
                    </li>
                    <li>
                        Copyright © Appmed. 2023. All rights reserved.
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default ContactBar;