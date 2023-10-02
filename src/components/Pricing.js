import React, { useState, useRef, useEffect } from 'react';
import '../style/Pricing.css'
import MediaQuery from 'react-responsive';
const Pricing = () => {
    const [selectedPlan, setSelectedPlan] = useState('monthly');
    const [clickedFeature, setClickedFeature] = useState(null);
    const featureRef = useRef([]);


    // const handleFeatureClick = (index) => {
    //     if (clickedFeature === index) {
    //         setClickedFeature(null);
    //     } else {
    //         setClickedFeature(index);
    //     }
    // }

    const handleFeatureClick = (planIndex, featureIndex) => {
        const key = `${planIndex}-${featureIndex}`;
        if (clickedFeature === key) {
            setClickedFeature(null);
        } else {
            setClickedFeature(key);
        }
    }
    const monthlyPlans = [
        {
            name: 'HEALTHLITE',
            price: '249.90€',
            description: 'This package is designed for smaller healthcare facilities and laboratories looking to streamline their operations and enhance efficiency. It provides essential features for managing patient data, appointments, and basic automation.',
            features: [
                {
                    name: 'Consectetur adipiscing',
                    description: 'Detailed description of Consectetur adipiscing.'
                },
                {
                    name: 'Nunc luctus nulla et tellus',
                    description: 'Detailed description of Nunc luctus nulla et tellus.'
                },
                {
                    name: 'Suspendisse quis metus',
                    description: 'Detailed description of Consectetur adipiscing.'
                },
                {
                    name: 'Vestibul varius fermentum erat',
                    description: 'Detailed description of Nunc luctus nulla et tellus.'
                },

            ],
        },

        {
            name: 'HealthPro',
            price: '349.90€',
            description: 'This package is suitable for medium-sized healthcare facilities and laboratories that require advanced automation and equipment integrations. It offers robust features to optimize processes and improve patient care.',
            features: [
                {
                    name: 'Consectetur adipiscing',
                    description: 'Detailed description of Consectetur adipiscing.'
                },
                {
                    name: 'Nunc luctus nulla et tellus',
                    description: 'Detailed description of Nunc luctus nulla et tellus.'
                },
                {
                    name: 'Suspendisse quis metus',
                    description: 'Detailed description of Consectetur adipiscing.'
                },
                {
                    name: 'Vestibul varius fermentum erat',
                    description: 'Detailed description of Nunc luctus nulla et tellus.'
                },

            ],
        },
        {
            name: 'HEALTHPLUS',
            price: '599.90€',
            description: 'This package is suitable to elevate your healthcare practice, a comprehensive solution offering an array of advanced features tailored to meet the demanding needs of modern medical facilities. Unlock the full potential of healthcare management with enhanced services in patient, clinical, laboratory, and departmental management.',
            features: [
                {
                    name: 'Consectetur adipiscing',
                    description: 'Detailed description of Consectetur adipiscing.'
                },
                {
                    name: 'Nunc luctus nulla et tellus',
                    description: 'Detailed description of Nunc luctus nulla et tellus.'
                },
                {
                    name: 'Suspendisse quis metus',
                    description: 'Detailed description of Consectetur adipiscing.'
                },
                {
                    name: 'Vestibul varius fermentum erat',
                    description: 'Detailed description of Nunc luctus nulla et tellus.'
                },

            ],
        },
    ];

    const yearlyPlans = [
        {
            name: 'HEALTHLITE',
            price: '1249.90€',
            features: [
                'Consectetur adipiscing',
                'Nunc luctus nulla et tellus',
                'Suspendisse quis metus',
                'Vestibul varius fermentum erat',
            ],
        },
        // Add more yearly plans as needed
    ];


    const plansToRender = selectedPlan === 'monthly' ? monthlyPlans : yearlyPlans;

    const togglePlan = (planType) => {
        setSelectedPlan(planType);
    };

    useEffect(() => {
        function handleClickOutside(event) {
            if (clickedFeature !== null && !featureRef.current[clickedFeature].contains(event.target)) {
                setClickedFeature(null);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [clickedFeature]);


    return (
        <div className="pricing" id="pricingId">
            <MediaQuery minDeviceWidth={768}>
                <div className='desktopPricing'>
                    <div id="pricing" className="section pricing-section">
                        <div className="container">
                            <div className="container1">
                                <div className="row">
                                    <div className="col-md-8">
                                        <div className="section-header">
                                            <p className="section-subtitle">Choose A Plan That's Right For You.</p>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="toggle-buttons decidePlan">
                                            <button
                                                className={`toggle-button ${selectedPlan === 'monthly' ? 'active' : ''} monthly`}
                                                onClick={() => togglePlan('monthly')}
                                            >
                                                Monthly
                                            </button>
                                            <button
                                                className={`toggle-button ${selectedPlan === 'yearly' ? 'active' : ''} yearly`}
                                                onClick={() => togglePlan('yearly')}
                                            >
                                                Yearly
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className="row pricing-tables">
                                {plansToRender.map((plan, index) => (
                                    <div key={index} className="col-md-4 col-sm-6 col-xs-12">
                                        <div className="pricing-table">
                                            <div className={`pricing-details ${plan.name.toLowerCase()}`}>
                                                <h3>{plan.name}</h3>
                                                <p>{plan.description}.</p>
                                                <h1 data-before={plan.price}></h1>
                                                <div className={`plan-button ${plan.name.toLowerCase()}-button`}>
                                                    <a href="#" className="btn btn-common">
                                                        Get Plan
                                                    </a>
                                                </div>
                                                <span>Top Features</span>
                                                <ul>
                                                    {plan.features.map((feature, featureIndex) => (
                                                        <li key={featureIndex} className="check-icon" ref={el => featureRef.current[`${index}-${featureIndex}`] = el}>
                                                            {feature.name}
                                                            <button className='descButton'
                                                                onClick={() => handleFeatureClick(index, featureIndex)}
                                                            >
                                                                ?
                                                            </button>
                                                            {clickedFeature === `${index}-${featureIndex}` && (
                                                                <div className="feature-popup show-popup">
                                                                    {feature.description}
                                                                </div>
                                                            )}
                                                        </li>
                                                    ))}
                                                </ul>

                                            </div>
                                        </div>
                                    </div>
                                ))}
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