import React from "react"
import { BrowserRouter , Route , Routes } from "react-router-dom"
import Landing from "./pages/Landing"
import ProductListing from "./pages/ProductListing"
import ProductDetails from "./pages/ProductDetails"
import ScrollToTop from "./components/ScrollToTop"
import BlogPage from "./pages/BlogPage"
import Env from "./pages/Env"
import {CounterProvider} from '../src/context/CounterContext'
import Order from "./components/Order"
import About from "./pages/About"
import Certificate from "./pages/Certificate"
import ProductBanner from "./components/ProductBanner"
import NavModal from "./components/NavModal"
import BlogDetails from "./pages/BlogDetails"
import ThankYouPage from "./components/ThankYouPage"
import ContactUs from "./pages/ContactUs"
import Catalogue from "./pages/Catalogue"
import Application from "./components/Application"
import NewBlogDetails from "./pages/NewBlogDetails"
import ApplicationDetails from "./components/ApplicationDetails"
import LuxuryDetails from "./pages/LuxuryDetails"
import SustainableDetails from "./pages/SustainableDetails"
// import FullViewImg from "./components/FullViewImg"
function App() {

  return (
    <>
    <CounterProvider>
    <BrowserRouter>
    <ScrollToTop/>
      <Routes>

        <Route path="/" element={<Landing/>}/>
         {/* <Route path="/products" element={<ProductListing/>}/> */}
         <Route
              path="/:categorySlug/:subCategorySlug?"
              element={<ProductListing />}
            />
        <Route path="/product-details/:id" element={<ProductDetails/>}/>
        <Route path="/blog" element={<BlogPage/>}/>
        <Route path="/blog-details" element={<BlogDetails/>}/>
        <Route
              path="/application/:subCategorySlug"
              element={<Application/>}
            />
        <Route path="/application-details/:id" element={<ApplicationDetails/>}/>
        <Route path="/environmental" element={<Env/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/certification" element={<Certificate/>}/>
        <Route path="/contact" element={<ContactUs/>}/>
        <Route
              path="/catalouge"
              element={<Catalogue />}
            />
  <Route
              path="/new-blog"
              element={<NewBlogDetails/>}
            />
        <Route
              path="/luxury-details"
              element={<LuxuryDetails/>}
            />
        <Route
              path="/sustainabl-details"
              element={<SustainableDetails/>}
            /> 


       {/* 
        <Route path="/order" element={<Order/>}/>
        <Route path="/thank-you" element={<ThankYouPage/>}/>

      */}
      
      </Routes>
    </BrowserRouter>
    </CounterProvider>
    </>
  )
}

export default App
