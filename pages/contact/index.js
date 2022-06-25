import React from 'react'
import ContactVersionOne from '../../components/contact/ContactVersionOne'
import HeroPageTitle from '../../components/titles/HeroPageTitle'

const Contact = () => {
  return (
    <>
        <HeroPageTitle
          title='Contact'
          description='Un nou proiect? Un nou inceput? Intra in legatura cu noi.'
        />
        <ContactVersionOne />
    </>
  )
}

export default Contact