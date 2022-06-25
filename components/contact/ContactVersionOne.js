import React from 'react'

const ContactVersionOne = () => {
  return (
    <div className="contact-us-light pt-140 pb-200 md-pt-90 md-pb-80">
        <div className="bubble-one"></div>
        <div className="bubble-two"></div>
        <div className="bubble-three"></div>
        <div className="bubble-four"></div>
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-4 col-sm-6">
                    <div className="address-info">
                        <div className="icon"><img src="/assets/images/icon/15.svg" alt="" /></div>
                        <div className="title">Location</div>
                        <p className="font-rubik">Dhaka, Kawran Bazar <br /> 1201 Metro</p>
                    </div>
                </div>
                <div className="col-md-4 col-sm-6">
                    <div className="address-info">
                        <div className="icon"><img src="/assets/images/icon/16.svg" alt="" /></div>
                        <div className="title">Contact</div>
                        <p className="font-rubik">bawejkor@duwvude.gov <br />(779) 564-1593</p>
                    </div>
                </div>
                <div className="col-md-4 col-sm-6">
                    <div className="address-info">
                        <div className="icon"><img src="/assets/images/icon/17.svg" alt="" /></div>
                        <div className="title">Social Media</div>
                        <p className="font-rubik">Follow on social media</p>
                        <ul className="d-flex justify-content-center">
                            <li><a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                            <li><a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                            <li><a href="#"><i className="fa fa-pinterest" aria-hidden="true"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="form-style-light">
                <form action="#" id="contact-form" action="" >
                    <div className="messages"></div>
                    <div className="row controls">
                        <div className="col-md-6">
                            <div className="input-group-meta form-group mb-35">
                                <label>First Name</label>
                                <input type="text" placeholder="Michel" name="Fname" required="required" data-error="Name is required." />
                                <span className="placeholder_icon valid-sign"><img src="/assets/images/icon/18.svg" alt="" /></span>
                                <div className="help-block with-errors"></div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="input-group-meta form-group mb-35">
                                <label>Last Name</label>
                                <input type="text" placeholder="Simon" name="Lname" required="required" data-error="Name is required." />
                                <span className="placeholder_icon valid-sign"><img src="/assets/images/icon/18.svg" alt="" /></span>
                                <div className="help-block with-errors"></div>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="input-group-meta form-group mb-35">
                                <label>Your Email</label>
                                <input type="email" placeholder="gobapubo@jogi.net" name="email" required="required" data-error="Valid email is required." />
                                <span className="placeholder_icon valid-sign"><img src="/assets/images/icon/18.svg" alt="" /></span>
                                <div className="help-block with-errors"></div>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="input-group-meta form-group lg mb-35">
                                <label>Your Message</label>
                                <textarea placeholder="Write your message here..." name="message" required="required" data-error="Please,leave us a message."></textarea>
                                <div className="help-block with-errors"></div>
                            </div>
                        </div>
                        <div className="col-12"><button className="theme-btn-one btn-lg">Send Message</button></div>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default ContactVersionOne