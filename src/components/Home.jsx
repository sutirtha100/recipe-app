import React from 'react'
import Navbar from './Navbar'
import PopularSlider from './PopularSlider'
import TredingSlider from './TredingSlider'
import Hero from './Hero'


const Home = () => {
  return (
    <>
      <div className="main">
        <Navbar />
        <Hero/>
        <PopularSlider />
        <TredingSlider />
        
      </div>
    </>
  )
}

export default Home