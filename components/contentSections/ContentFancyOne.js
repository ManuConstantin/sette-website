import React from 'react'
import FancyContentOne from './FancyContentOne'
import FancyContentTwo from './FancyContentTwo'
import FancyContentThree from './FancyContentThree'

const ContentFancyOne = () => {
  return (
    <div className="fancy-feature-two">
        <FancyContentOne />
        <FancyContentTwo />
        <FancyContentThree />
    </div>
  )
}

export default ContentFancyOne