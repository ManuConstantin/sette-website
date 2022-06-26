import React from 'react'
import Link from 'next/link';

const SimpleContentOne = (props) => {
  const {subtitle, title, description, link, logos} = props;
  const numbers = ['one', 'two', 'three', 'four', 'five', 'six'];

  return (
    <div className="block-style-eighteen">
        <div className="row align-items-center">
            <div className="col-lg-5" data-aos="fade-right" data-aos-duration="1200">
                <div className="text-wrapper">
                    <h6>{subtitle}</h6>
                    <h2 className="title">{title}</h2>
                    <p>{description}</p>
                    <Link href={link}>
                        <a href="" className="d-flex align-items-center learn-more">
                            <span>Detalii</span>
                            <img src="/assets/images/icon/93.svg" alt="" />
                        </a>
                    </Link>
                </div> 
            </div>
            <div className="col-lg-7" data-aos="fade-left" data-aos-duration="1200">
                <div className="screen-holder-one d-flex align-items-center justify-content-center">
                    {
                        logos.map((logo, index) => (
                            <div className={`round-bg d-flex align-items-center justify-content-center ${index > 0 ? `shapes logo-${numbers[index - 1]}` : ''}`} key={logo.name}>
                                <img src={logo.src} alt="" />
                            </div>
                        ))
                    }
                    <img src="/assets/images/shape/170.svg" alt="" className="shapes shape-one" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default SimpleContentOne