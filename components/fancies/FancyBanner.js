import React from 'react'

const FancyBanner = () => {
  return (
    <div className="fancy-short-banner-eight mt-170 md-mt-80">
        <div className="container">
            <div className="row">
                <div className="col-xl-8 col-lg-11 m-auto" data-aos="fade-up" data-aos-duration="1200">
                    <div className="title-style-seven text-center">
                        <h2><span>200k+</span> Customers have our deski.Try it now!</h2>
                        <p>Try it risk free — we don’t charge cancellation fees.</p>
                    </div>
                </div>
            </div>
            <div data-aos="fade-up" data-aos-duration="1200" data-aos-delay="150">
                <div className="download-btn">
                    <button type="button" id="dropdownMenuButton">
                        Get Deski app
                    </button>
                </div>
            </div>
        </div>
        <img src="/assets/images/shape/171.svg" alt="" className="shapes shape-one" />
        <img src="/assets/images/shape/172.svg" alt="" className="shapes shape-two" />
    </div>
  )
}

export default FancyBanner