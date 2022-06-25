import React from 'react'
import ContentVersionTwo from '../../components/contentSections/ContentVersionTwo'
import HeroPageTitle from '../../components/titles/HeroPageTitle'
import CounterInfo from '../../components/counters/CounterInfo' 
import ContentVersionThree from '../../components/contentSections/ContentVersionThree'
import ContentTable from '../../components/contentSections/ContentTable'
import ContentFeedback from '../../components/contentSections/ContentFeedback'
import FancyBanner from '../../components/fancies/FancyBanner'

const About = () => {
  return (
    <>
        <HeroPageTitle
          title='Despre noi'
          description='Cum a inceput totul? Cu ce ne ocupam? Afla-ne povestea!'
        />
        <ContentVersionTwo />
        <CounterInfo />
        <ContentVersionThree />
        <ContentTable />
        <ContentFeedback />
        <FancyBanner />
    </>
  )
}

export default About