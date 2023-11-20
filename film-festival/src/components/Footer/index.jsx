import React from 'react'
import "./index.scss"

const Footer = () => {
  return (
    < >
    <section id='footer'>

        <div className="top-footer">
        <img src="https://coppola.qodeinteractive.com/wp-content/uploads/2021/11/footer-img.png" alt="" />
        <div>
        <ul>
            <li><a href="">What we do</a></li>
            <li><a href="">About Us</a></li>
            <li><a href="">Help and FAQ</a></li>
        </ul>
        <ul>
            <li><a href="">Team</a></li>
            <li><a href="">Contact Us</a></li>
            <li><a href="">Speakers</a></li>
        </ul>
        <ul>
            <li><a href="">Program</a></li>
            <li><a href="">Shop</a></li>
            <li><a href="">Blog</a></li>
        </ul>
        </div>
        </div>
        <div className="bottom-footer">
    <div className="footer-content">
        <p>© 2022 QODE INTERACTIVE, ALL RIGHTS RESERVED</p>
    </div>
    <div className="footer-adress">
    <p>1316 Via del Parione
Florence CA 90291, Italy</p>
    </div>
    <div className="footer-newsletter">
        <input type="text" placeholder='Sign up to Newsletter' />
    </div>
        </div>
    </section>

    </>
  )
}

export default Footer