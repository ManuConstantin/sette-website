import React from 'react'

const FancyContentOne = () => {
  return (
    <div className="container">
            <div className="row align-items-center block-style-two pb-250 md-pb-90">
                <div className="col-lg-7 col-md-8 m-auto">
                    <div data-aos="fade-right" data-aos-duration="1200">
                        <div className="img-holder img-holder-one">
                            <div className="cs-screen progress-line-one" data-aos="fade-right" data-aos-duration="1200"></div>
                            <div className="cs-screen progress-line-two" data-aos="fade-right" data-aos-duration="1200"></div>
                            <img src="/assets/images/assets/feature-img-05.png" alt="" />
                            <img src="/assets/images/shape/1.svg" alt="" className="cs-screen screen-one" />
                            <img src="/assets/images/shape/2.svg" alt="" className="cs-screen dot-shape" />
                            <div className="bubble-one"></div>
                            <div className="bubble-two"></div>
                            <div className="bubble-three"></div>
                            <div className="bubble-four"></div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-5">
                    <div className="text-wrapper" data-aos="fade-left" data-aos-duration="1200">
                        <h6 className="font-rubik" style={{color: '#FF5291'}}>FLEXIBILITY</h6>
                        <h3 className="font-gilroy-bold">Get instant visibility into all your team work.</h3>
                        <p>Don’t waste time on tedious manual tasks. Let Automation do it for you. Simplify workflows, reduce errors, and save time for solving more important problems.</p>
                        <a href="#">Learn about flexibility</a>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default FancyContentOne