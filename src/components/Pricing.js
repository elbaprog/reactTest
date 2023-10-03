import React, { useState, useRef, useEffect } from 'react';
import '../style/Pricing.css'
import MediaQuery from 'react-responsive';
const Pricing = () => {
    const [data, setData] = useState([]);
    const [selectedPlan, setSelectedPlan] = useState('monthly');
    const [clickedFeature, setClickedFeature] = useState(null);
    const featureRef = useRef([]);

    const baseURL = "https://progboard.app-med.com/api/pricings";


    useEffect(() => {
        fetch(baseURL)
            .then(response => response.json())
            .then(result => {
                if (result.status) {
                    setData(result.pricings);
                }
            })
            .catch(err => console.error(err));
    }, []);

    const handleFeatureClick = (planIndex, featureIndex) => {
        const key = `${planIndex}-${featureIndex}`;
        if (clickedFeature === key) {
            setClickedFeature(null);
        } else {
            setClickedFeature(key);
        }
    }


    const plansToRender = data.filter(plan => plan.plan.toLowerCase() === selectedPlan);

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
                                            <div className={`pricing-details ${plan.title.toLowerCase()}`}>
                                                <h3>{plan.title}</h3>
                                                <p className='descriptionP'>{plan.description}.</p>
                                                <h1 data-before={`${plan.pricing}€`}></h1>
                                                <div className='subscriptionP'>
                                                    {plan.subscription.split("\n").map((line, idx) => (
                                                        <p key={idx}>{line}</p>
                                                    ))}
                                                </div>

                                                <div className={`plan-button ${plan.title.toLowerCase()}-button`}>
                                                    <a href="#contactId" className="btn btn-common">
                                                        Get Plan
                                                    </a>
                                                </div>
                                                <span>Top Features</span>
                                                <ul>
                                                    {plan.pricefeature.map((feature, featureIndex) => (
                                                        <li key={featureIndex} className="check-icon" ref={el => featureRef.current[`${index}-${featureIndex}`] = el}>
                                                            {feature.fp_title}

                                                            {feature.fp_description !== "No Description" && (
                                                                <button className='descButton'
                                                                    onClick={() => handleFeatureClick(index, featureIndex)}
                                                                >
                                                                    ?
                                                                </button>
                                                            )}

                                                            {clickedFeature === `${index}-${featureIndex}` && (
                                                                <div className="feature-popup show-popup">
                                                                    {feature.fp_description}
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
                                            <div className={`pricing-details ${plan.title.toLowerCase()}`}>
                                                <h3>{plan.title}</h3>
                                                <p className='descriptionP'>{plan.description}.</p>
                                                <h1 data-before={`${plan.pricing}€`}></h1>
                                                <div className='subscriptionP'>
                                                    {plan.subscription.split("\n").map((line, idx) => (
                                                        <p key={idx}>{line}</p>
                                                    ))}
                                                </div>

                                                <div className={`plan-button ${plan.title.toLowerCase()}-button`}>
                                                    <a href="#" className="btn btn-common">
                                                        Get Plan
                                                    </a>
                                                </div>
                                                <span>Top Features</span>
                                                <ul>
                                                    {plan.pricefeature.map((feature, featureIndex) => (
                                                        <li key={featureIndex} className="check-icon" ref={el => featureRef.current[`${index}-${featureIndex}`] = el}>
                                                            {feature.fp_title}

                                                            {feature.fp_description !== "No Description" && (
                                                                <button className='descButton'
                                                                    onClick={() => handleFeatureClick(index, featureIndex)}
                                                                >
                                                                    ?
                                                                </button>
                                                            )}

                                                            {clickedFeature === `${index}-${featureIndex}` && (
                                                                <div className="feature-popup show-popup">
                                                                    {feature.fp_description}
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
            </MediaQuery>
        </div>
    )
}
export default Pricing;