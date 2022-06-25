import Link from 'next/link'
import React from 'react'

const BlogVersionOne = () => {
  return (
    <div className="feature-blog-one blog-page-bg">
        <div className="shapes shape-one"></div>
        <div className="shapes shape-two"></div>
        <div className="shapes shape-three"></div>
        <div className="container">
            <div className="row">
                <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-duration="1200">
                    <div className="post-meta">
                        <img src="/assets/images/blog/media_01.png" alt="" className="image-meta" />
                        <div className="tag">Technology</div>
                        <h3><a className="title">A Discount Cartridge Is Better Ever.</a></h3>

                        <Link href='/blog/articol'>
                            <a className="read-more d-flex justify-content-between align-items-center">
                                <span>Read More</span>
                                <i className="flaticon-right-arrow"></i>
                            </a>
                        </Link>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="50">
                    <div className="post-meta">
                        <img src="/assets/images/blog/media_02.png" alt="" className="image-meta" />
                        <div className="tag">Software</div>
                        <h3><a className="title">Quis Nostr Exercitation Ullamco Laboris nisi ut Aliquip exea.</a></h3>
                        <Link href='/blog/articol'>
                            <a className="read-more d-flex justify-content-between align-items-center">
                                <span>Read More</span>
                                <i className="flaticon-right-arrow"></i>
                            </a>
                        </Link>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="100">
                    <div className="post-meta">
                        <img src="/assets/images/blog/media_03.png" alt="" className="image-meta" />
                        <div className="tag">Blog</div>
                        <h3><a className="title">Excepteur sint occaat cupidatat proidet nisi sunt in culpa ,</a></h3>
                        <Link href='/blog/articol'>
                            <a className="read-more d-flex justify-content-between align-items-center">
                                <span>Read More</span>
                                <i className="flaticon-right-arrow"></i>
                            </a>
                        </Link>
                    </div>
                </div>
            </div>

            <div className="text-center mt-30 md-mt-10" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="50"><a href="#" className="theme-btn-one">Show More</a></div>
        </div>
    </div> 
  )
}

export default BlogVersionOne