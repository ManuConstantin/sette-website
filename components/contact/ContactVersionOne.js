import React from 'react'
import BasicContactForm from '../forms/BasicContactForm'

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

            <BasicContactForm />
        </div>
    </div>
  )
}

export default ContactVersionOne