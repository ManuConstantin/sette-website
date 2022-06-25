import React from 'react'
import ContentFancyOne from '../components/contentSections/ContentFancyOne'
import ContentVersionOne from '../components/contentSections/ContentVersionOne'
import CounterInfo from '../components/counters/CounterInfo'
import FancyContact from '../components/fancies/FancyContact'
import FancyFeatures from '../components/fancies/FancyFeatures'
import HeroPageTitle from '../components/titles/HeroPageTitle'

const Services = () => {
  return (
    <>
        <HeroPageTitle 
          title='Servicii si produse'
          description='Aplicatii Android, IOS sau Web.'
        />
        <ContentFancyOne />
        <CounterInfo />
        <FancyFeatures />
        <ContentVersionOne />
        <FancyContact />
    </>
  )
}

export default Services