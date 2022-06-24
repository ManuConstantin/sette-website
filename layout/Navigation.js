import React from 'react'

const Navigation = () => {
  return (
    <div className="theme-main-menu sticky-menu theme-menu-five">
        <div className="d-flex align-items-center justify-content-center">
            <div className="logo"><a href="index.html"><img src="/assets/images/logo/deski_06.svg" alt="" /></a></div>

            <nav id="mega-menu-holder" className="navbar navbar-expand-lg">
                <div  className="nav-container">
                    <button className="navbar-toggler">
                        <span></span>
                    </button>
                    <div className="navbar-collapse collapse" id="navbarSupportedContent">
                        <div className="d-lg-flex justify-content-between align-items-center">
                            <ul className="navbar-nav main-side-nav font-gordita" id="one-page-nav">
                            <li className="nav-item">
                                    <a href="#product" className="nav-link">Acasa</a>
                                </li>
                                <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle" href="#" data-toggle="dropdown">Servicii</a>
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
                                    <a href="#product" className="nav-link">Portofoliu</a>
                                </li>
                                <li className="nav-item">
                                    <a href="#pricing" className="nav-link">Preturi</a>
                                </li>
                                <li className="nav-item">
                                    <a href="#feedback" className="nav-link">Contact</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div> 
            </nav>
            <div className="right-widget">
                <ul  className="d-flex align-items-center pr-feature">
                    <li>
                        <a href="#" className="theme-btn-eight">
                            Cere oferta
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Navigation