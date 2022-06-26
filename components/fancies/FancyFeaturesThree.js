import React from 'react'

const FancyFeaturesThree = (props) => {
  const {content} = props;
//   const icons = ['']
  return (
    <div className="fancy-feature-seventeen mt-150 md-mt-90" id="product">
        <div className="bg-wrapper">
            <div className="container">
                <div className="row">
                    {
                        content.map(item => (
                            <div className="col-lg-4 col-sm-6" data-aos="fade-up" data-aos-duration="1200">
                                <div className="block-meta">
                                    <div className="icon d-flex align-items-end"><img src={item.icon} alt="" /></div>
                                    <h4>{item.title}</h4>
                                    <p>{item.description}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    </div>
  )
}

export default FancyFeaturesThree