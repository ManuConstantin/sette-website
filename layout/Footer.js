import Image from "next/image"


const Footer = () => {
  return (
    <footer className="theme-footer-seven mt-120 md-mt-100">
		<div className="lg-container">
			<div className="container">
				<div className="row">
					<div className="col-xl-3 col-lg-2 mb-40" data-aos="fade-up" data-aos-duration="1200">
						<div className="logo">
							<a href="index.html">
								{/* <img src="images/logo/deski_06.svg" alt="" /> */}
								<Image src="/assets/images/logo/deski_06.svg" width={160} height={60} />
							</a>
						</div>
					</div>
					<div className="col-lg-2 col-md-6 mb-40" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="100">
						<h5 className="title">Links</h5>
						<ul className="footer-list">
							<li><a href="#">Home</a></li>
							<li><a href="#">Pricing</a></li>
							<li><a href="#">About us</a></li>
							<li><a href="#">Careers</a></li>
							<li><a href="#">Features</a></li>
							<li><a href="#">Blog</a></li>
						</ul>
					</div>
					<div className="col-lg-3 col-md-6 mb-40" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="150">
						<h5 className="title">Legal</h5>
						<ul className="footer-list">
							<li><a href="#">Terms of use</a></li>
							<li><a href="#">Terms & conditions</a></li>
							<li><a href="#">Privacy policy</a></li>
							<li><a href="#">Cookie policy</a></li>
						</ul>
					</div>
					<div className="col-xl-4 col-lg-5 mb-40" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="200">
						<div className="newsletter">
							<h5 className="title">Newslettert</h5>
							<p>Join over 68,000 people getting our emails</p>
							<form action="#">
								<input type="email" placeholder="Enter your email" />
								<button>Sign Up</button>
							</form>
							<div className="info">We only send interesting and relevant emails.</div>
						</div> 
					</div>
				</div>
			</div>

			<div className="container">
				<div className="bottom-footer">
					<div className="row">
						<div className="col-lg-4 order-lg-1 mb-20">
							<ul className="d-flex justify-content-center justify-content-lg-start footer-nav">
								<li><a href="#">Privacy & Terms.</a></li>
								<li><a href="#">Contact Us</a></li>
							</ul>
						</div>
						<div className="col-lg-4 order-lg-3 mb-20">
							<ul className="d-flex justify-content-center justify-content-lg-end social-icon">
								<li><a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
								<li><a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
								<li><a href="#"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
							</ul>
						</div>
						<div className="col-lg-4 order-lg-2 mb-20">
							<p className="copyright text-center">Copyright @2022 deski inc.</p>
						</div>
					</div>
				</div>
			</div>
		</div> 
		
	</footer> 
  )
}

export default Footer