import React from 'react'
import HeroPageTitle from '../../components/titles/HeroPageTitle'
import FancyFeaturesTwo from '../../components/fancies/FancyFeaturesTwo'
import FancyBanner from '../../components/fancies/FancyBanner'
import FaqClassic from '../../components/faq/FaqClassic'
import ContentFancyTwo from '../../components/contentSections/ContentFancyTwo'
import SmallCarousel from '../../components/carousels/SmallCarousel'

const Service = () => {
  return (
    <>
      <HeroPageTitle
          title='Aplicatii mobile'
          description='Dezvoltam aplicatii mobile: Android & IOS'
      />
      <FancyFeaturesTwo />
      <ContentFancyTwo />
      <SmallCarousel />
      <FaqClassic />
      <FancyBanner />
    </>
  )
}

export default Service