import React from 'react'

const FancyContentTwo = () => {
  return (
    <div className="container">
        <div className="row align-items-center block-style-two pb-250 md-pb-90">
            <div className="col-lg-6 col-md-8 m-auto order-lg-last">
                <div data-aos="fade-left" data-aos-duration="1200">
                    <div className="img-holder img-holder-two">
                        <img src="/assets/images/assets/feature-img-06.png" alt="" />
                        <img src="/assets/images/assets/feature-img-06-01.png" alt="" className="cs-screen screen-one" />
                        <img src="/assets/images/shape/3.svg" alt="" className="cs-screen screen-two" />
                        <img src="/assets/images/shape/4.svg" alt="" className="cs-screen dot-shape" />
                        <div className="bubble-one"></div>
                        <div className="bubble-two"></div>
                        <div className="bubble-three"></div>
                        <div className="bubble-four"></div>
                    </div>
                </div>
            </div>
            <div className="col-lg-6 order-lg-first">
                <div className="text-wrapper pl-5 pr-5" data-aos="fade-right" data-aos-duration="1200">
                    <h6 className="font-rubik" style={{color: '#AA4CFF'}}>QUICK & FAST</h6>
                    <h3 className="font-gilroy-bold">Fast App response time</h3>
                    <p>deski is 5x as fast to load than other popular tools, quick to configure.</p>
                    <div className="quote">
                        <blockquote>“Our team really feel great to use the deski app specially their faster load & server speed”</blockquote>
                        <div className="d-flex align-items-center">
                            <img src="/assets/images/media/img_01.png" alt="" />
                            <div className="info-meta">
                                <h5>Micle Duke, Product Manager</h5>
                                <span className="font-rubik">Uber Inc.</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default FancyContentTwo