import Image from "next/image"
import SmallCarousel from "../carousels/SmallCarousel"
import {TECHNOLOGIES} from '../../constants/technologies';

const HeroBanner = () => {
  return (
    <div className="hero-banner-seven lg-container">
        <div className="container">
            <div className="illustration-container">
                <Image src="/assets/images/assets/ils_20.svg" width={660} height={660} />
            </div>
            <div className="row">
                <div className="col-lg-6">
                    <h1 className="hero-heading"><span>Capture</span> Idea & find it later.</h1>
                    <p className="hero-sub-heading">Deski delivered blazing fast, striking soludtion</p>
                    <form action="#">
                        <input type="email" placeholder="ihidago@ujufidnan.gov" />
                        <button>Try free demo</button>
                    </form>
                    <p className="term-text">For teams & individuals — web, mobile, Mac, Windows</p>
                    <div className="dropdown download-btn">
                        <button className="dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Download
                        </button>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <a className="dropdown-item d-flex align-items-center" href="#">
                                <img src="/assets/images/icon/103.svg" alt="" />
                                <span>IOS & Android</span>
                            </a>
                            <a className="dropdown-item d-flex align-items-center" href="#">
                                <img src="/assets/images/icon/104.svg" alt="" />
                                <span>Mac & Windows</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <SmallCarousel 
            description='Folosim cele mai noi tehnologii pentru dezvoltare de software.'
            images={TECHNOLOGIES}
        />
    </div>
  )
}

export default HeroBanner