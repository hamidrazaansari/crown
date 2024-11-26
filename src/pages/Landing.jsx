import React from 'react'
import NavBar from '../components/NavBar'
import Hero from '../components/Hero'
import About from '../components/About'
import Category from '../components/Category'
import Space from '../components/Space'
import Gallery from '../components/Gallery'
import Blog from '../components/Blog'
import DetailsForm from '../components/DetailsForm'
import Footer from '../components/Footer'
import ProductSpotlight from '../components/ProductSpotlight'
import FloatingButton from '../components/FloatingButton'
import HorizontalScroll from '../components/HorizontalScroll'
import Spotlights from '../components/Spotlights'
import VideoGallery from '../components/VideoGallery'
import VerticalScroll from '../components/VerticalScroll'
import NewFooter from '../components/NewFooter'
import Experience from '../components/Experience'

function Landing() {
  return (
    <>
        <NavBar/>
        <HorizontalScroll/>
        {/* <Hero/> */}
        <About/>
        <Category/>
        <Spotlights/>
        {/* <Space/> */}
        {/* <ProductSpotlight/> */}
        {/* <Gallery/> */}
        <Experience/>
        {/* <VideoGallery/> */}
        <Blog/>
        {/* <DetailsForm/> */}
        {/* <VerticalScroll/> */}
        <NewFooter/>
        {/* <Footer/> */}
        {/* <FloatingButton/> */}
    </>
  )
}

export default Landing