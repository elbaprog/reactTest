import React, { useState } from 'react';
import { Link } from 'react-scroll';
import '../style/Navbar.css';
import MediaQuery from 'react-responsive';
import logoWhite from "../img/logoWhite.png";
import AppMed from "../img/appmed.png";

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

    return (
        <div className="navBar">
            <MediaQuery minDeviceWidth={768}>
                <div className='logoOfNav'>
                    <img src={AppMed} alt="logo" className='navLogo' />
                </div>
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
                            to="benefitsId"
                            spy={true}
                            smooth={true}
                            duration={500}>
                            Benefits
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
                        <Link
                            activeClass="active"
                            to="contactId"
                            spy={true}
                            smooth={true}
                            duration={500}>
                            Contact
                        </Link>
                    </li>
                    <li>
                        <button className='btn btn-common demo-button'>Appmed Demo</button>
                    </li>
                </ul>
            </MediaQuery>

            <MediaQuery maxDeviceWidth={767}>

                <button className={`mobileMenuButton ${isMobileMenuOpen ? 'active' : ''}`} onClick={toggleMobileMenu}>
                    <div className={`hamburger-icon line-1 ${isMobileMenuOpen ? 'active' : ''}`} />
                    <div className={`hamburger-icon line-2 ${isMobileMenuOpen ? 'active' : ''}`} />
                    <div className={`hamburger-icon line-3 ${isMobileMenuOpen ? 'active' : ''}`} />
                    {/* {isMobileMenuOpen ? 'Close Menu' : 'Open Menu'} */}
                </button>

                <ul className={`mobileMenu ${isMobileMenuOpen ? 'active' : ''}`}>
                    <img src={logoWhite} alt="logoWhite" className='logoWhite' />
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
                            to="benefitsId"
                            spy={true}
                            smooth={true}
                            duration={500}>
                            Benefits
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
                        <Link
                            activeClass="active"
                            to="contactId"
                            spy={true}
                            smooth={true}
                            duration={500}>
                            Contact
                        </Link>
                    </li>
                    <li>
                        <button className='btn btn-common demo-button'>Appmed Demo</button>
                    </li>
                    <button onClick={closeMobileMenu} className='close'>X</button>
                </ul>
            </MediaQuery>
        </div>
    );
};
export default Navbar;