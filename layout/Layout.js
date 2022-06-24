import React from 'react'
import Footer from './Footer'
import Navigation from './Navigation'
import Scripts from './Scripts'

const Layout = ({children}) => {
  return (
    <div data-spy="scroll" data-target="#one-page-nav" data-offset="120">
		<div className="main-page-wrapper font-gordita"></div>
        <Navigation />
        <main>{children}</main>
        <Footer />
        <Scripts />
    </div>
  )
}

export default Layout