import React from 'react'
import '../assets/css/footer.css'
import { Link } from 'react-router-dom'
function NewFooter() {
  return (
    <div className='pos'>
    <div className="crown">
    <h1>Crown</h1>
    </div>
    <div className='newFooter'>
        <div className="container">
            <div className="d-flex align-items-center justify-content-center">
                <Link><h2>About</h2></Link>
                <Link><h2>Contacts</h2></Link>
                <Link><h2>PRIVACY POLICY</h2></Link>
                <Link><h2>BLOG</h2></Link>
            </div>
           <p> <a href=''>crownlaminates@gmail.com</a></p>
           <p><a href="">+(91) 8564758228</a></p> 

        </div>
        <div className='line'></div>
        <div className="container">
        <div className="d-flex align-items-center justify-content-center">
                <Link><h2>Facebook</h2></Link>
                <Link><h2>Instagram</h2></Link>
                <Link><h2>Pinterest</h2></Link>
            </div> 
        </div>
    </div>
    </div>
  )
}

export default NewFooter