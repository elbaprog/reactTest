import React from 'react';
import '../style/Pricing.css'
// import PricingTable from '@aiherrera/react-pricing-table'
// import { IoCheckmark } from 'react-icons/io5'
import MediaQuery from 'react-responsive';
const Pricing = () => {
    return (
        <div className="pricing" id="pricingId">
            <MediaQuery minDeviceWidth={768}>
                <div className='desktopPricing'>
                    <div id="pricing" className="section pricing-section">
                        <div className="container">
                            <div className="section-header">

                                <p className="section-subtitle">Choose A Plan That's
                                    Right For You.</p>
                            </div>

                            <div className="row pricing-tables">
                                <div className="col-md-4 col-sm-6 col-xs-12">
                                    <div className="pricing-table">
                                        <div className="pricing-details">
                                            <h3>HEALTHLITE</h3>
                                            <p>This package is designed for smaller healthcare facilities and laboratories looking to streamline their operations and enhance efficiency. It provides essential features for managing patient data, appointments, and basic
                                                automation.</p>
                                            <h1 data-before="249.90€"></h1>
                                            <div className="plan-button">
                                                <a href="#" class="btn btn-common">Get Plan</a>
                                            </div>
                                            <span>Top Features</span>
                                            <ul>
                                                <li class="check-icon">Consectetur adipiscing</li>
                                                <li class="check-icon">Nunc luctus nulla et tellus</li>
                                                <li class="check-icon">Suspendisse quis metus</li>
                                                <li class="check-icon">Vestibul varius fermentum erat</li>
                                            </ul>

                                            {/* <h3>200$</h3>
                                            <span>BASIC</span>
                                            <ul>
                                                <li>Consectetur adipiscing</li>
                                                <li>Nunc luctus nulla et tellus</li>
                                                <li>Suspendisse quis metus</li>
                                                <li>Vestibul varius fermentum erat</li>
                                            </ul>
                                        </div>
                                        <div className="plan-button">
                                    <a href="#" class="btn btn-common">Get Plan</a> */}
                                        </div>
                                    </div>
                                </div>

                                <div class="col-md-4 col-sm-6 col-xs-12">
                                    <div class="pricing-table">
                                        <div class="pricing-details">
                                            <h3>500$</h3>
                                            <span>ADVANCED</span>
                                            <ul>
                                                <li>Consectetur adipiscing</li>
                                                <li>Nunc luctus nulla et tellus</li>
                                                <li>Suspendisse quis metus</li>
                                                <li>Vestibul varius fermentum erat</li>
                                            </ul>
                                        </div>
                                        {/* <div class="plan-button">
                                    <a href="#" class="btn btn-common">Buy Now</a>
                                </div> */}
                                    </div>
                                </div>

                                <div class="col-md-4 col-sm-6 col-xs-12">
                                    <div class="pricing-table">
                                        <div class="pricing-details">
                                            <h3>800$</h3>
                                            <span>Team</span>
                                            <ul>
                                                <li>Consectetur adipiscing</li>
                                                <li>Nunc luctus nulla et tellus</li>
                                                <li>Suspendisse quis metus</li>
                                                <li>Vestibul varius fermentum erat</li>
                                            </ul>
                                        </div>
                                        {/* <div class="plan-button">
                                    <a href="#" class="btn btn-common">Buy Now</a>
                                </div> */}
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </MediaQuery >
            <MediaQuery maxDeviceWidth={767}>
                <div className='mobilePricing'>
                    <div id="pricing" className="section pricing-section">
                        <div className="container">
                            <div className="section-header">
                                <h2 className="section-title">Pricing Table</h2>

                                <p className="section-subtitle">Choose A Plan That's
                                    Right For You.</p>
                            </div>

                            <div className="row pricing-tables">
                                <div className="col-md-4 col-sm-6 col-xs-12">
                                    <div className="pricing-table">
                                        <div className="pricing-details">
                                            <h3>200$</h3>
                                            <span>BASIC</span>
                                            <ul>
                                                <li>Consectetur adipiscing</li>
                                                <li>Nunc luctus nulla et tellus</li>
                                                <li>Suspendisse quis metus</li>
                                                <li>Vestibul varius fermentum erat</li>
                                            </ul>
                                        </div>
                                        {/* <div className="plan-button">
                                    <a href="#" class="btn btn-common">Get Plan</a>
                                </div> */}
                                    </div>
                                </div>

                                <div class="col-md-4 col-sm-6 col-xs-12">
                                    <div class="pricing-table">
                                        <div class="pricing-details">
                                            <h3>500$</h3>
                                            <span>ADVANCED</span>
                                            <ul>
                                                <li>Consectetur adipiscing</li>
                                                <li>Nunc luctus nulla et tellus</li>
                                                <li>Suspendisse quis metus</li>
                                                <li>Vestibul varius fermentum erat</li>
                                            </ul>
                                        </div>
                                        {/* <div class="plan-button">
                                    <a href="#" class="btn btn-common">Buy Now</a>
                                </div> */}
                                    </div>
                                </div>

                                <div class="col-md-4 col-sm-6 col-xs-12">
                                    <div class="pricing-table">
                                        <div class="pricing-details">
                                            <h3>800$</h3>
                                            <span>Team</span>
                                            <ul>
                                                <li>Consectetur adipiscing</li>
                                                <li>Nunc luctus nulla et tellus</li>
                                                <li>Suspendisse quis metus</li>
                                                <li>Vestibul varius fermentum erat</li>
                                            </ul>
                                        </div>
                                        {/* <div class="plan-button">
                                    <a href="#" class="btn btn-common">Buy Now</a>
                                </div> */}
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </MediaQuery>
        </div>
    )
}
export default Pricing;