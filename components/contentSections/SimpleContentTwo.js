import React from 'react'
import Link from 'next/link';

const SimpleContentTwo = (props) => {
 const {title, subtitle, description, link, images} = props;

  return (
    <div className="block-style-eighteen mt-200 pt-50 md-mt-80">
        <div className="row align-items-center">
            <div className="col-lg-5 order-lg-last" data-aos="fade-left" data-aos-duration="1200">
                <div className="text-wrapper">
                    <h6>{subtitle}</h6>
                    <h3 className="title">{title}</h3>
                    {/* <h3 className="title">Web doc <br/> file <span>Scanning.</span></h3> */}
                    <p>{description}</p>
                    <Link href={link}>
                        <a href="#" className="d-flex align-items-center learn-more">
                            <span>Detalii</span>
                            <img src="/assets/images/icon/93.svg" alt="" />
                        </a>
                    </Link>
                </div> 
            </div>
            <div className="col-lg-7 order-lg-first" data-aos="fade-right" data-aos-duration="1200">
                <div className="screen-holder-two">
                    {
                        images.map((image, index) => (
                            <img src={image.src} alt={image.name} className={index == 1 ? 'shapes screen-one' : ''} />
                        ))
                    }
                    {/* <img src={images[0].src} alt="" />
                    <img src={images[1].src} alt=""  /> */}
                </div>
            </div>
        </div>
    </div> 
  )
}

export default SimpleContentTwo