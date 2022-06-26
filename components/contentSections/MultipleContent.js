import React from 'react'
import SimpleContentOne from './SimpleContentOne'
import SimpleContentTwo from './SimpleContentTwo'
import SimpleContentThree from './SimpleContentThree'

const MultipleContent = () => {
  return (
    <div className="fancy-feature-sixteen mt-200 md-mt-100" id="feature">
        <div className="container">
             <SimpleContentOne
              title="Mobil, Web sau microservicii"
              subtitle='Dezvoltare software'
              description='Dezvoltam orice tip de aplicatie in functie de necesitati.'
              link='/'
              logos={
                [
                  {
                      name: 'js',
                      src: '/assets/images/technologies/js.png'
                  },
                  {
                    name: 'java',
                    src: '/assets/images/technologies/java.png'
                  },
                  {
                      name: 'react',
                      src: '/assets/images/technologies/react.png'
                  },
                  {
                      name: 'node',
                      src: '/assets/images/technologies/node.png'
                  },
                  {
                      name: 'flutter',
                      src: '/assets/images/technologies/flutter.png'
                  }
                ]
              }
             />
             <SimpleContentTwo 
                title="Mobil, Web sau microservicii"
                subtitle='Dezvoltare software'
                description='Dezvoltam orice tip de aplicatie in functie de necesitati.'
                link='/'
                images={[
                  {
                    name: 'first',
                    src: '/assets/images/assets/screen_12.png'
                  },
                  {
                    name: 'second',
                    src: '/assets/images/assets/screen_13.png'
                  }
                ]}
             />

             <SimpleContentThree 
                title="Mobil, Web sau microservicii"
                subtitle='Dezvoltare software'
                description='Dezvoltam orice tip de aplicatie in functie de necesitati.'
                link='/'
                image={
                  {
                    name: 'name',
                    src: '/assets/images/assets/screen_14.png'
                  }
                }
             />
        </div>
    </div>
  )
}

export default MultipleContent