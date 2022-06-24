import React from 'react'

const PricingSection = () => {
  return (
    <div className="pricing-section-six mt-200 md-mt-100" id="pricing">
        <div className="container">
            <div className="row">
                <div className="col-xl-10  m-auto">
                    <div className="title-style-seven text-center">
                        <h2>Solo, Agency or Team? We’ve got you <span>covered.</span></h2>
                    </div> 
                </div>
            </div>

           
            <ul className="nav nav-tabs justify-content-center pricing-nav-four">
                <li className="nav-item">
                    <a className="nav-link active" data-toggle="tab" href="#month">Monthly</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" data-toggle="tab" href="#year">Yearly</a>
                </li>
            </ul>
        </div>

        <div className="pricing-table-area-six">
            <div className="tab-content">
                <div className="tab-pane active" id="month">
                    <div className="row justify-content-center">
                        <div className="col-lg-4 col-sm-6" data-aos="fade-up" data-aos-duration="1200">
                            <div className="pr-table-wrapper">
                                <div className="pack-name" style={{backgroundColor: '#FFECEC'}}>Basic</div>
                                <div className="price">Free</div>
                                <div className="pack-details">TAKE GREAT NOTES</div>
                                <ul className="pr-feature">
                                    <li>Sync up to 2 devices </li>
                                    <li>Find notes fast with search</li>
                                    <li>and tags</li>
                                    <li>Clip web pages</li>
                                    <li>25MB maximum note </li>
                                    <li>60MB monthly upload limit</li>
                                </ul>
                                <a href="#" className="trial-button">Try it Free</a>
                                <div className="trial-text">No card required, cancel any time</div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="100">
                            <div className="pr-table-wrapper active">
                                <div className="pack-name" style={{backgroundColor: '#E3F8EF'}}>Reguler</div>
                                <div className="price">$8.99</div>
                                <div className="pack-details">BE MORE PRODUCTIVE</div>
                                <ul className="pr-feature">
                                    <li>Sync up to 2 devices </li>
                                    <li>Find notes fast with search</li>
                                    <li>and tags</li>
                                    <li>Apply rich formatting</li>
                                    <li>Clip web pages</li>
                                    <li>25MB maximum note size</li>
                                    <li>Access notes offline</li>
                                    <li>10GBmonthly upload limit</li>
                                    <li>Annotate PDFs</li>
                                </ul>
                                <a href="#" className="trial-button">Try it Free</a>
                                <div className="trial-text">No card required, cancel any time</div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="200">
                            <div className="pr-table-wrapper">
                                <div className="pack-name" style={{backgroundColor: '#FBF3E5'}}>Business</div>
                                <div className="price">$17.99</div>
                                <div className="pack-details">Get more with team</div>
                                <ul className="pr-feature">
                                    <li>Everthing is premium</li>
                                    <li>Find notes fast with search</li>
                                    <li>and tags</li>
                                    <li>Apply rich formatting</li>
                                    <li>Clip web pages</li>
                                    <li>25MB maximum note size</li>
                                    <li>Access notes offline</li>
                                    <li>18GB monthly upload limit</li>
                                </ul>
                                <a href="#" className="trial-button">Try it Free</a>
                                <div className="trial-text">No card required, cancel any time</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="tab-pane fade" id="year">
                    <div className="row justify-content-center">
                        <div className="col-lg-4 col-sm-6" data-aos="fade-up" data-aos-duration="1200">
                            <div className="pr-table-wrapper">
                                <div className="pack-name" style={{backgroundColor: '#FFECEC'}}>Basic</div>
                                <div className="price">Free</div>
                                <div className="pack-details">TAKE GREAT NOTES</div>
                                <ul className="pr-feature">
                                    <li>Sync up to 2 devices </li>
                                    <li>Find notes fast with search</li>
                                    <li>and tags</li>
                                    <li>Clip web pages</li>
                                    <li>25MB maximum note </li>
                                    <li>60MB monthly upload limit</li>
                                </ul>
                                <a href="#" className="trial-button">Try it Free</a>
                                <div className="trial-text">No card required, cancel any time</div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="100">
                            <div className="pr-table-wrapper active">
                                <div className="pack-name" style={{backgroundColor: '#E3F8EF'}}>Reguler</div>
                                <div className="price">$68.99</div>
                                <div className="pack-details">BE MORE PRODUCTIVE</div>
                                <ul className="pr-feature">
                                    <li>Sync up to 2 devices </li>
                                    <li>Find notes fast with search</li>
                                    <li>and tags</li>
                                    <li>Apply rich formatting</li>
                                    <li>Clip web pages</li>
                                    <li>25MB maximum note size</li>
                                    <li>Access notes offline</li>
                                    <li>10GBmonthly upload limit</li>
                                    <li>Annotate PDFs</li>
                                </ul>
                                <a href="#" className="trial-button">Try it Free</a>
                                <div className="trial-text">No card required, cancel any time</div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="200">
                            <div className="pr-table-wrapper">
                                <div className="pack-name" style={{backgroundColor: '#FBF3E5'}}>Business</div>
                                <div className="price">$189.99</div>
                                <div className="pack-details">Get more with team</div>
                                <ul className="pr-feature">
                                    <li>Everthing is premium</li>
                                    <li>Find notes fast with search</li>
                                    <li>and tags</li>
                                    <li>Apply rich formatting</li>
                                    <li>Clip web pages</li>
                                    <li>25MB maximum note size</li>
                                    <li>Access notes offline</li>
                                    <li>18GB monthly upload limit</li>
                                </ul>
                                <a href="#" className="trial-button">Try it Free</a>
                                <div className="trial-text">No card required, cancel any time</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default PricingSection