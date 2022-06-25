import React from 'react'

const BlogArticle = () => {
  return (
    <div className="blog-page-bg">
        <div className="shapes shape-one"></div>
        <div className="shapes shape-two"></div>
        <div className="shapes shape-three"></div>
        <div className="container">
            <div className="row">
                <div className="col-lg-8 feature-blog-one width-lg blog-details-post-v1">
                    <div className="post-meta">
                        <img src="/assets/images/blog/media_28.png" alt="" className="image-meta" />
                        <div className="tag">23 Apr. 2020</div>
                        <h3 className="title">Quis Nostr Exercitation Ullamco Laboris nisi ut Aliquip exeal nothing.</h3>
                        <p>Tomfoolery crikey bits and bobs brilliant bamboozled down the pub amongst brolly hanky panky, cack bonnet arse over tit burke bugger all mate bodge. cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Suspendisse interdum consectetur libero id faucibu nisl. Lacus vel facilisis volutpat est velit egestas.</p>
                        <p>Tempus imperdiet nulla malesuada pellentesque elit eget gravida cum. Sit amet ris nullam eget felis. Enim praesent elementum facilisis leo. Ultricies leo integer.</p>
                        <img src="/assets/images/blog/media_29.png" alt="" className="image-meta mt-35" />
                        <div className="mark-text">This response is important for our ability to from mistakes but it alsogives rise to self-criticism.</div>
                        <p>One touch of a red-hot stove is usually all we need to avoid that kind of discomfort in the future. The same is true as we experienc the emotional sensation of stress from our first instances. We quickly learn to fear and thus automatically. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <h4>Work Harder & Gain Succsess.</h4>
                        <p>One touch of a red-hot stove is usually all we need to avoid that kind of discomfort in que future. The same Duis aute irure dolor in reprehenderit .</p>
                        <p>is true as we experience the emotional sensation of stress from our firs social rejection ridicule.We quickly learn to fear and thus automatically. potentially stressful situation of all kinds, including the most common of all.</p>
                        <div className="d-sm-flex align-items-center justify-content-between share-area">
                            <ul className="tag-feature d-flex">
                                <li>Tag: &nbsp;</li>
                                <li><a href="#">business,</a></li>
                                <li><a href="#">makreting,</a></li>
                                <li><a href="#">tips</a></li>
                            </ul>
                            <ul className="share-option d-flex align-items-center">
                                <li>Share</li>
                                <li><a href="#" style={{backgroundClip: '#F6616F'}}><i className="fa fa-google-plus" aria-hidden="true"></i></a></li>
                                <li><a href="#" style={{backgroundClip: '#41CFED'}}><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                                <li><a href="#" style={{backgroundClip: '#588DE7'}}><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                            </ul>
                        </div>
                    </div> 

                    <div className="comment-area">
                        <h3 className="title">2 Comments</h3>
                        <div className="single-comment">
                            <div className="d-flex">
                                <img src="/assets/images/blog/media_30.png" alt="" className="user-img" />
                                <div className="comment">
                                    <h6 className="name">Al Hasani</h6>
                                    <div className="time">13 June, 2018, 7:30pm</div>
                                    <p>One touch of a red-hot stove is usually all we need to avoid that kind of discomfort in future. The same true we experience </p>
                                    <button className="reply">Reply</button>
                                </div>
                            </div>
                        </div>
                        <div className="single-comment">
                            <div className="d-flex">
                                <img src="/assets/images/blog/media_31.png" alt="" className="user-img" />
                                <div className="comment">
                                    <h6 className="name">Rashed ka.</h6>
                                    <div className="time">13 June, 2018, 7:30pm</div>
                                    <p>One touch of a red-hot stove is usually all we need to avoid that kind of discomfort in future. The same true we experience </p>
                                    <button className="reply">Reply</button>
                                </div>
                            </div>
                        </div>
                    </div> 

                    <div className="comment-form-section">
                        <h3 className="title">Leave A Comment</h3>
                        <p><a href="login.html">Sign in</a> to post your comment or singup if you dont have any account.</p>
                        <div className="form-style-light">
                            <form action="#">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="input-group-meta mb-35">
                                            <label>Name</label>
                                            <input type="text" placeholder="Michel" />
                                            <span className="placeholder_icon valid-sign"><img src="/assets/images/icon/18.svg" alt="" /></span>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="input-group-meta mb-35">
                                            <label>Your Email</label>
                                            <input type="email" placeholder="gobapubo@jogi.net" />
                                            <span className="placeholder_icon valid-sign"><img src="/assets/images/icon/18.svg" alt="" /></span>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="input-group-meta lg mb-35">
                                            <label>Your Message</label>
                                            <textarea placeholder="Write your message here..."></textarea>
                                        </div>
                                    </div>
                                    <div className="col-12"><button className="theme-btn-one btn-lg">Post Comment</button></div>
                                </div>
                            </form>
                        </div> 
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="blog-sidebar-one">
                        <div className="sidebar-search-form mb-85">
                            <form action="#">
                                <input type="text" placeholder="Search" />
                                <button><img src="/assets/images/icon/50.svg" alt="" /></button>
                            </form>
                        </div> 
                        <div className="sidebar-categories mb-85">
                            <h4 className="sidebar-title">Categories</h4>
                            <ul>
                                <li><a href="#">Web Design <span>(09)</span></a></li>
                                <li><a href="#">Graphics <span>(13)</span></a></li>
                                <li><a href="#">Web Development <span>(05)</span></a></li>
                                <li><a href="#">IOS/Android Development <span>(24)</span></a></li>
                                <li><a href="#">Others <span>(08)</span></a></li>
                            </ul>
                        </div>
                        <div className="sidebar-recent-news mb-85">
                            <h4 className="sidebar-title">Recent News</h4>
                            <ul>
                                <li><a href="#">
                                    <span className="title">10 days quick challange for boost visitors.</span>
                                    <span className="date">23 July, 2018</span>
                                </a></li>
                                <li><a href="#">
                                    <span className="title">10 days quick challange for boost visitors.</span>
                                    <span className="date">23 July, 2018</span>
                                </a></li>
                                <li><a href="#">
                                    <span className="title">10 days quick challange for boost visitors.</span>
                                    <span className="date">23 July, 2018</span>
                                </a></li>
                            </ul>
                        </div> 
                        <div className="sidebar-keyword">
                            <h4 className="sidebar-title">Keywords</h4>
                            <ul className="cleafix">
                                <li><a href="#">Ideas</a></li>
                                <li><a href="#">Education</a></li>
                                <li><a href="#">Design</a></li>
                                <li><a href="#">Development</a></li>
                                <li><a href="#">Branding</a></li>
                            </ul>
                        </div> 
                    </div> 
                </div>
            </div>
        </div>
    </div>
  )
}

export default BlogArticle