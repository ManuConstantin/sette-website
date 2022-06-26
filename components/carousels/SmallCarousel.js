import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const SmallCarousel = (props) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5
    };

    const {description, images} = props;

    // console.log('images', images)

  return (
    <div className="partner-slider-two mt-130 md-mt-80">
        <div className="container">
            <p className="text-center">{description}</p>
            
            <div className="partnerSliderTwo">
            <Slider {...settings}>

                {
                    images.map(image => (
                        <div className="item" key={image.name}>
                            <div className="img-meta d-flex align-items-center justify-content-center"><img src={`${image.src}`} alt={image.name} /></div>
                        </div>
                    ))
                }
                
            
            </Slider>
            </div>
        </div>
    </div>
  )
}

export default SmallCarousel