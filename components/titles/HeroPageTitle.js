import React from 'react'

const HeroPageTitle = (props) => {
  const {title, description} = props;

  return (
    <div className="fancy-hero-one">
        <div className="container">
            <div className="row">
                <div className="col-xl-10 m-auto">
                    <h2 className="font-rubik">{title}</h2>
                </div>
                <div className="col-xl-9 m-auto">
                    <p className="font-rubik">{description}</p>
                </div>
            </div>
        </div>
        <div className="bubble-one"></div>
        <div className="bubble-two"></div>
        <div className="bubble-three"></div>
        <div className="bubble-four"></div>
        <div className="bubble-five"></div>
        <div className="bubble-six"></div>
    </div> 
  )
}

export default HeroPageTitle