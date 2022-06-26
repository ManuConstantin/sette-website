import Link from 'next/link';
import React from 'react'

const SimpleContentThree = (props) => {
  const {title, subtitle, description, link, image} = props;
  return (
    <div className="block-style-eighteen mt-200 pt-50 md-mt-80">
        <div className="row align-items-center">
            <div className="col-lg-5" data-aos="fade-right" data-aos-duration="1200">
                <div className="text-wrapper">
                    <h6>{subtitle}</h6>
                    <h3 className="title">{title}</h3>
                    {/* <h3 className="title"><span>Clipper</span> & Rich notes</h3> */}
                    <p>{description}</p>
                    <Link href={link}>
                        <a href="#" className="d-flex align-items-center learn-more">
                            <span>Detalii</span>
                            <img src="/assets/images/icon/93.svg" alt="" />
                        </a>
                    </Link>
                </div> 
            </div>
            <div className="col-lg-7" data-aos="fade-left" data-aos-duration="1200">
                <div className="screen-holder-three d-flex align-items-center justify-content-center">
                    <img src={image.src} alt={image.name} />
                </div>
            </div>
        </div>
    </div> 
  )
}

export default SimpleContentThree