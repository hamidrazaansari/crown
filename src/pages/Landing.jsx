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

function Landing() {
  return (
    <>
        <NavBar/>
        <Hero/>
        <About/>
        <Category/>
        <Space/>
        <ProductSpotlight/>
        <Gallery/>
        <Blog/>
        <DetailsForm/>
        <Footer/>
        <FloatingButton/>
    </>
  )
}

export default Landing