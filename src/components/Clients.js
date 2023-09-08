import React from 'react';
import '../style/Client.css';
import medLogo from "../img/medLogo.png";
import Avicena from "../img/avicena.png";
import Pinea from "../img/pinea.png";
import MediaQuery from 'react-responsive';
const Clients = () => {
    return (
        <div className="clients" id="clientsId">
            <MediaQuery minDeviceWidth={768}>
                <div className='desktopClients'>
                    <div className='clientsContainer'>
                        <h2>Our Clients</h2>
                        <div className="logoContainer">
                            <img src={medLogo} alt="medLogo" className='medLogo' />
                        </div>
                    </div>
                    <div className="clientRow">
                        <div class="box-item">
                            <span class="icon">
                                <img src={Avicena} alt="Avicena" className='AvicenaImg' />
                            </span>
                            <div class="text">
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>

                                <ul>
                                    <li>Me gjithsej 26 lokacionenë Kosovë</li>
                                    <li>0800 25 555</li>
                                    <li>info@avicena-ks.org</li>
                                </ul>

                            </div>
                        </div>
                        <div class="box-item">
                            <span class="icon">
                                <img src={Pinea} alt="Pinea" className='pineaImg' />
                            </span>
                            <div class="text">
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>

                                <ul>
                                    <li>Holger Petersen, H-89, lok 77, Pristina, Kosovo</li>
                                    <li>048 185 185</li>
                                    <li>info@pineagroup.com</li>

                                </ul>

                            </div>
                        </div>
                    </div>
                </div>
            </MediaQuery >
            <MediaQuery maxDeviceWidth={767}>
                <div className='mobileClients'>
                    <div className='clientsContainer'>
                        <h2>Our Clients</h2>
                        <div className="logoContainer">
                            <img src={medLogo} alt="medLogo" className='medLogo' />
                        </div>
                    </div>
                    <div className="clientRow">
                        <div class="box-item">
                            <span class="icon">
                                <img src={Avicena} alt="Avicena" className='AvicenaImg' />
                            </span>
                            <div class="text">
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>

                                <ul>
                                    <li>Me gjithsej 26 lokacionenë Kosovë</li>
                                    <li>0800 25 555</li>
                                    <li>info@avicena-ks.org</li>
                                </ul>

                            </div>
                        </div>
                        <div class="box-item">
                            <span class="icon">
                                <img src={Pinea} alt="Pinea" className='pineaImg' />
                            </span>
                            <div class="text">
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>

                                <ul>
                                    <li>Holger Petersen, H-89, lok 77, Pristina, Kosovo</li>
                                    <li>048 185 185</li>
                                    <li>info@pineagroup.com</li>

                                </ul>

                            </div>
                        </div>
                    </div>
                </div>
            </MediaQuery>
        </div>
    )
}

export default Clients;
