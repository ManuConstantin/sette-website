import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const SmallCarousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1
    };

  return (
    <div className="partner-slider-two mt-130 md-mt-80">
        <div className="container">
            <p className="text-center">Over <span>32K+</span> software businesses growing with Deski.</p>
            
            <div className="partnerSliderTwo">
            <Slider {...settings}>
                <div className="item">
                    <div className="img-meta d-flex align-items-center justify-content-center"><img src="/assets/images/logo/logo-21.png" alt="" /></div>
                </div>
                <div className="item">
                    <div className="img-meta d-flex align-items-center justify-content-center"><img src="/assets/images/logo/logo-22.png" alt="" /></div>
                </div>
                <div className="item">
                    <div className="img-meta d-flex align-items-center justify-content-center"><img src="/assets/images/logo/logo-23.png" alt="" /></div>
                </div>
                <div className="item">
                    <div className="img-meta d-flex align-items-center justify-content-center"><img src="/assets/images/logo/logo-24.png" alt="" /></div>
                </div>
                <div className="item">
                    <div className="img-meta d-flex align-items-center justify-content-center"><img src="/assets/images/logo/logo-25.png" alt="" /></div>
                </div>
                <div className="item">
                    <div className="img-meta d-flex align-items-center justify-content-center"><img src="/assets/images/logo/logo-22.png" alt="" /></div>
                </div>
                <div className="item">
                    <div className="img-meta d-flex align-items-center justify-content-center"><img src="/assets/images/logo/logo-24.png" alt="" /></div>
                </div>
            </Slider>
            </div>
        </div>
    </div>
  )
}

export default SmallCarousel