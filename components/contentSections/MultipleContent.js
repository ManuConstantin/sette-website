import React from 'react'
import SimpleContentOne from './SimpleContentOne'
import SimpleContentTwo from './SimpleContentTwo'
import SimpleContentThree from './SimpleContentThree'

const MultipleContent = () => {
  return (
    <div className="fancy-feature-sixteen mt-200 md-mt-100" id="feature">
        <div className="container">
             <SimpleContentOne />
             <SimpleContentTwo />
             <SimpleContentThree />
        </div>
    </div>
  )
}

export default MultipleContent