import React from 'react'

const BasicContactForm = () => {
  return (
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
  )
}

export default BasicContactForm