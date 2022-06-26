import React from 'react'
import HeroPageTitle from '../../components/titles/HeroPageTitle'
import PortofolioOne from '../../components/portofolios/PortofolioOne'

const Projects = () => {
  return (
    <>
        <HeroPageTitle 
          title='Proiecte'
          description='Ne bizuim pe experienta! Vezi ultimele proiecte realizate.'
        />
        <PortofolioOne />
    </>
  )
}

export default Projects