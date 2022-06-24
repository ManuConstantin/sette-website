import Script from "next/script";

const Scripts = () => {
  return (
    <>
        <Script src="/assets/vendor/jquery.min.js"/>
        <Script src="/assets/vendor/popper.js/popper.min.js"/>
        <Script src="/assets/vendor/bootstrap/js/bootstrap.min.js"/>
        <Script src="/assets/vendor/mega-menu/assets/js/custom.js"/>
        <Script src="/assets/vendor/aos-next/dist/aos.js"/>
        <Script src="/assets/vendor/jquery.appear.js"/>
        <Script src="/assets/vendor/jquery.countTo.js"/>
        {/* <Script src="/assets/vendor/slick/slick.min.js"/> */}
        <Script src="/assets/vendor/fancybox/dist/jquery.fancybox.min.js"/>
        <Script src="/assets/js/theme.js"/>
    </>
  )
}

export default Scripts