import React, { useState } from 'react'
import "./index.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'


const Navbar = () => {
    const [isNavOpen, setIsNavOpen] = useState(false)
    const toggleNav = ()=>{
        setIsNavOpen(!isNavOpen)
    }
  return (
    <nav>
         <button onClick={toggleNav}><FontAwesomeIcon icon={faBars}  /></button>
    <div className='sub-menu'>
    <ul className={ isNavOpen? "open-nav": ""}>
        <li>Home</li>
        <li>Pages</li>
        <li>Portfolio</li>
        <li>Blog</li>
        <li>Shop</li>
        <li>Landing</li>
    </ul>
    </div>
    </nav>
  )
}

export default Navbar