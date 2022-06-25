import React from 'react'
import HeroPageTitle from '../../components/titles/HeroPageTitle'
import PortofolioOne from '../../components/portofolios/PortofolioOne'

const Portofoliu = () => {
  return (
    <>
        <HeroPageTitle 
          title='Portofoliu proiecte'
          description='Ne bizuim pe experienta! Vezi ultimele proiecte realizate.'
        />
        <PortofolioOne />
    </>
  )
}

export default Portofoliu