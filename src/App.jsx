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
function App() {

  return (
    <>
    <CounterProvider>
    <BrowserRouter>
    <ScrollToTop/>
      <Routes>
        <Route path="/" element={<Landing/>}/>
        <Route path="/products" element={<ProductListing/>}/>
        <Route path="/product-details/:id" element={<ProductDetails/>}/>
        <Route path="/blog" element={<BlogPage/>}/>
        <Route path="/environmental" element={<Env/>}/>
        <Route path="/order" element={<Order/>}/>
        <Route path="/about" element={<About/>}/>
      </Routes>
    </BrowserRouter>
    </CounterProvider>
    </>
  )
}

export default App
