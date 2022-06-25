import React from 'react'

const FaqClassic = () => {
  return (
    <div className="faq-classic pt-225 md-pt-120">
        <div className="container">
            <div className="row">
                <div className="col-lg-6">
                    <div className="title-style-seven">
                        <h6 className="font-rubik">Find your answers</h6>
                        <h2>Have any thought? Look here.</h2>
                    </div>
                    {/* <a href="faqs.html" className="theme-btn-one mt-50 md-mt-30">Go to Faq</a> */}
                </div>
                <div className="col-lg-6">
                   
                    <div id="accordion" className="md-mt-60">
                        <div className="card">
                            <div className="card-header" id="headingOne">
                            <h5 className="mb-0">
                                <button className="btn btn-link">
                                How the affiliate programe works?
                                </button>
                            </h5>
                            </div>
                            <div id="collapseOne" className="collapse">
                            <div className="card-body">
                                <p>mea case duis tollit et. Etiam nusquam set minium eu sea, ei tale paulo elab. Noluisse mnesarch Et is vero incorrupte eos deserunt quaeren.</p>
                            </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-header" id="headingTwo">
                            <h5 className="mb-0">
                                <button className="btn btn-link">
                                    How to create customer panel?
                                </button>
                            </h5>
                            </div>
                            <div id="collapseTwo" className="collapse show">
                            <div className="card-body">
                                <p>mea case duis tollit et. Etiam nusquam set minium eu sea, ei tale paulo elab. Noluisse mnesarch Et is vero incorrupte eos deserunt quaeren.</p>
                            </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-header" id="headingThree">
                            <h5 className="mb-0">
                                <button className="btn btn-link">
                                How delete my account?
                                </button>
                            </h5>
                            </div>
                            <div id="collapseThree" className="collapse">
                            <div className="card-body">
                                <p>mea case duis tollit et. Etiam nusquam set minium eu sea, ei tale paulo elab. Noluisse mnesarch Et is vero incorrupte eos deserunt quaeren.</p>
                            </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-header" id="headingFour">
                            <h5 className="mb-0">
                                <button className="btn btn-link">
                                Ho to invite people with refferel link?
                                </button>
                            </h5>
                            </div>
                            <div id="collapseFour" className="collapse">
                            <div className="card-body">
                                <p>mea case duis tollit et. Etiam nusquam set minium eu sea, ei tale paulo elab. Noluisse mnesarch Et is vero incorrupte eos deserunt quaeren.</p>
                            </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-header" id="headingFive">
                            <h5 className="mb-0">
                                <button className="btn btn-link">
                                Is ios app available for the iphone?
                                </button>
                            </h5>
                            </div>
                            <div id="collapseFive" className="collapse">
                            <div className="card-body">
                                <p>mea case duis tollit et. Etiam nusquam set minium eu sea, ei tale paulo elab. Noluisse mnesarch Et is vero incorrupte eos deserunt quaeren.</p>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default FaqClassic