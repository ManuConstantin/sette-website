import React from 'react'

const SimpleContentTwo = () => {
  return (
    <div className="block-style-eighteen mt-200 pt-50 md-mt-80">
        <div className="row align-items-center">
            <div className="col-lg-5 order-lg-last" data-aos="fade-left" data-aos-duration="1200">
                <div className="text-wrapper">
                    <h6>Scanning & Doc</h6>
                    <h3 className="title">Web doc <br/> file <span>Scanning.</span></h3>
                    <p>Go paperless. Back up important documents to all your devices, and keep the information not the clutter.</p>
                    <a href="#" className="d-flex align-items-center learn-more">
                        <span>Learn More</span>
                        <img src="/assets/images/icon/93.svg" alt="" />
                    </a>
                </div> 
            </div>
            <div className="col-lg-7 order-lg-first" data-aos="fade-right" data-aos-duration="1200">
                <div className="screen-holder-two">
                    <img src="/assets/images/assets/screen_12.png" alt="" />
                    <img src="/assets/images/assets/screen_13.png" alt="" className="shapes screen-one" />
                </div>
            </div>
        </div>
    </div> 
  )
}

export default SimpleContentTwo