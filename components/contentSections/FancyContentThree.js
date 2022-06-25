import React from 'react'

const FancyContentThree = () => {
  return (
    <div className="container">
        <div className="row align-items-center block-style-two pb-170 md-pb-50">
            <div className="col-lg-7 col-md-7 m-auto">
                <div data-aos="fade-right" data-aos-duration="1200">
                    <div className="img-holder img-holder-three">
                        <img src="/assets/images/assets/feature-img-07.png" alt="" />
                        <img src="/assets/images/assets/feature-img-07-01.png" alt="" className="cs-screen screen-one" />
                        <img src="/assets/images/shape/5.svg" alt="" className="cs-screen screen-two" />
                        <img src="/assets/images/shape/6.svg" alt="" className="cs-screen dot-shape" />
                        <div className="bubble-one"></div>
                        <div className="bubble-two"></div>
                        <div className="bubble-three"></div>
                        <div className="bubble-four"></div>
                    </div>
                </div>
            </div>
            <div className="col-lg-5">
                <div className="text-wrapper" data-aos="fade-left" data-aos-duration="1200">
                    <h6 className="font-rubik" style={{color: '#03DDD5'}}>PROJECT STATUS</h6>
                    <h3 className="font-gilroy-bold">Real time project status monitoring.</h3>
                    <p>Don’t waste time on tedious manual tasks. Let Automation do it for you. Simplify workflows, reduce errors, and save time for solving more important problems.</p>
                </div>
            </div>
        </div> 
    </div>
  )
}

export default FancyContentThree