import React from 'react'
import "./index.scss"
import HeaderSlider from './HeaderSlider'


const Header = () => {
  return (
    <header>
        <HeaderSlider/>
        <div className='film-festival-start'>
        <h3>Film festival 2022 starts april</h3>
        <img src="https://coppola.qodeinteractive.com/wp-content/uploads/2021/11/h4-rev-border-img.png" alt="" />
        <p>Rome / 3 Locations / Seven days</p>
        </div>
    </header>
  )
}

export default Header