import React from 'react'
import './style.css'
import Vector1 from '../../../assets/Vector1.png';
import Vector2 from '../../../assets/Vector2.png';

const HomeHeader = () => {
  return (
      <div className='section1'>
        <h1 className='title'>Discover & Collect Extraordinary NFTs</h1>
        <p className='description'>
          Enter the world of digital art and collections. Explore unique NFTs created by artists worldwide
        </p>
        <div className='btnBox'>
          <div className='btn1'>
            <img src={Vector1} alt="Start Creating" />
            <p>Start Creating</p>
          </div>
          <button className='btn2'>
            <img src={Vector2} alt="Watch Demo" />
            <p>Watch Demo</p>
          </button>
        </div>
     </div>
  )
}

export default HomeHeader