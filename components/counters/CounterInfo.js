import React from 'react'

const CounterInfo = () => {
  return (
    <div className="pt-120 md-pt-100 pb-150 md-pb-100">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-4 col-sm-6" data-aos="fade-up" data-aos-duration="1200">
                    <div className="counter-box-two">
                        <h2 className="number"><span className="timer" data-from="0" data-to="1500" data-speed="1500" data-refresh-interval="5">0</span>+</h2>
                        <em>Positive Review</em>
                        <p className="font-rubik">A place to think and track ideas</p>
                    </div> 
                </div>
                <div className="col-lg-4 col-sm-6" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="100">
                    <div className="counter-box-two">
                        <h2 className="number"><span className="timer" data-from="0" data-to="200" data-speed="1200" data-refresh-interval="5">0</span>+</h2>
                        <em>Branches</em>
                        <p className="font-rubik">A home for your iqu team, best</p>
                    </div> 
                </div>
                <div className="col-lg-4 col-sm-6" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="200">
                    <div className="counter-box-two">
                        <h2 className="number"><span className="timer" data-from="0" data-to="2" data-speed="1200" data-refresh-interval="5">0</span>k</h2>
                        <em>Work Done</em>
                        <p className="font-rubik">Beautiful docs for your APIs, Products</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CounterInfo