import React from 'react'
import Link from 'next/link'
import {navigationData} from '../constants/navigation';


const Navigation = () => {
  

  return (
    <div className="theme-main-menu sticky-menu theme-menu-five">
        <div className="d-flex align-items-center justify-content-center">
            <div className="logo">
                <Link href='/'>
                    <a><img src="/assets/images/logo/deski_06.svg" alt="" /></a>
                </Link>
            </div>

            <nav id="mega-menu-holder" className="navbar navbar-expand-lg">
                <div  className="nav-container">
                    <button className="navbar-toggler">
                        <span></span>
                    </button>
                    <div className="navbar-collapse collapse" id="navbarSupportedContent">
                        <div className="d-lg-flex justify-content-between align-items-center">
                            <ul className="navbar-nav main-side-nav font-gordita" id="one-page-nav">
                                {/* <li className="nav-item">
                                    <Link href={{ pathname: '/about', slug: 'despre-noi', as:'despre-noi'}}>
                                        <a className="nav-link">Despre noi</a>
                                    </Link>
                                </li> */}

                                {
                                    navigationData.map(item => (
                                        <li className={`nav-item ${item?.subitems?.length > 0 ? 'dropdown' : ''}`} key={item.name}>
                                            <Link href={item.href}>
                                                <a className={`nav-link ${item?.subitems?.length > 0 ? 'dropdown-toggle' : ''}`}>{item.name}</a>
                                            </Link>
                                            {
                                              
                                                item?.subitems?.length > 0 ?
                                                <ul className="dropdown-menu">
                                                    {console.log('item?.subitems', item?.subitems)}
                                                    {item.subitems.map(subitem => (
                                                        <li key={subitem.name}>
                                                            <Link href={subitem.href}>
                                                                <a className="dropdown-item">{subitem.title}</a>
                                                            </Link>
                                                        </li>
                                                    ))}
                                                </ul> : ''
                                            }
                                        </li>
                                    ))
                                }
                                {/* <li className="nav-item">
                                    <Link href="/">
                                        <a className="nav-link">Acasa</a>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link href='/despre-noi'>
                                        <a className="nav-link">Despre noi</a>
                                    </Link>
                                </li>

                                <li className="nav-item dropdown">
                                    <Link href='/servicii'>
                                        <a className="nav-link dropdown-toggle" data-toggle="dropdown">Servicii</a>
                                    </Link>
                                        <ul className="dropdown-menu">
                                            <li>
                                                <a href="portfolio-V1.html" className="dropdown-item">Aplicatii web</a>
                                            </li>
                                            <li>
                                                <a href="portfolio-V2.html" className="dropdown-item">Aplicatii mobile</a>
                                            </li>
                                            <li>
                                                <a href="portfolio-V3.html" className="dropdown-item">Site de prezentare</a>
                                            </li>
                                        </ul>
                                    </li>

                                <li className="nav-item">
                                    <Link href='/portofoliu'>
                                        <a className="nav-link">Portofoliu</a>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link href='/blog'>
                                        <a className="nav-link">Blog</a>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link href='/contact'>
                                        <a className="nav-link">Contact</a>
                                    </Link>
                                </li> */}
                            </ul>
                        </div>
                    </div>
                </div> 
            </nav>
            <div className="right-widget">
                <ul  className="d-flex align-items-center pr-feature">
                    <li>
                        <Link href="/contact">
                            <a className="theme-btn-eight">
                                Cere oferta
                            </a>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Navigation