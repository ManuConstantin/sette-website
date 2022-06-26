import Link from 'next/link';
import React from 'react'

const ContentVideoBtn = (props) => {
  const {title, description, link, youtube_link, image} = props;

  return (
    <>
        <div className="fancy-text-block-twentyTwo lg-container mt-250 md-mt-120" id="whyUs">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-xl-5 col-lg-6 order-lg-last" data-aos="fade-left" data-aos-duration="1200">
                        <div className="text-wrapper">
                            <a className="fancybox mb-20 md-mb-10" data-fancybox="" href={youtube_link}>
                                <img src={image.src} alt={image.name} className="icon" />
                            </a>
                            <div className="title-style-seven">
                                <h2>{title}</h2>
                                {/* <h2>Why you should <span>choose</span> Deski?</h2> */}
                            </div>
                            <p>{description}</p>
                            <Link href={link}>
                                <a href="#" className="theme-btn-eight">Detalii</a>
                            </Link>
                        </div>
                    </div>
                    <div className="col-xl-7 col-lg-6 col-md-8 m-auto order-lg-first" data-aos="fade-right" data-aos-duration="1200">
                        <div className="illustration-holder">
                            <img src="/assets/images/assets/ils_21.svg" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div> 

    </>
  )
}

export default ContentVideoBtn