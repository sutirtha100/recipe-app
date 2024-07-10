import React from 'react'

export default function Hero() {
  return (
    <>
    <div className="hero-section-main">
      <div className="hero-section-container">
      <div className="hero-left-heading">
        <div className="heading quote">
        <span className="heading-span">We do not cook</span>
        <br/>
        <span className="heading-span">We create your</span>
        <br/>
        <span className="heading-span">emotions!</span>
        <br/>
        <span style={{color: "#ADDDD0"}}>Welcome to Pott's kitchen, where every dish is crafted with love and passion. Indulge in our culinary delights and savor the taste of unforgettable moments. Your satisfaction is our highest reward.</span>
        </div>
        <div className="buttons-left-sec">
          <span className="our-menu-btn">Our Menu</span>
          <span className="about-us-btn">About Us</span>
        </div>
      </div>
      <div className="hero-right-images">
        <div className="flot-img-1 bowl-img"> <img alt="holaaaa" src="https://miller.bslthemes.com/starbelly-demo/img/illustrations/1.png"/> </div>
        <div className="flot-img-2 bowl-img"><img alt="holaaaa" src="https://miller.bslthemes.com/starbelly-demo/img/illustrations/1.png"/> </div>
        <div className="flot-img-3 bowl-img"><img alt="holaaaa" src="https://miller.bslthemes.com/starbelly-demo/img/illustrations/1.png"/> </div>
      </div>
      </div>
    </div>
    </>
  )
}
