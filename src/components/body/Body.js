import React from 'react'
import "./Body.css"
import RocketLaunchOutlinedIcon from '@mui/icons-material/RocketLaunchOutlined';

function Body() {
  return (
      <div className='body'>
          <div className='firstHalf'>
              <div className='discoverDigital'>
                  <h2>
              Discover Digital Art & Collect NFTs
              </h2>
              NFT Market Place UI Created With Anime For Figma. Collect, Buy And Sell Art From More Than 20k NFT Artists.
              </div>
              <button className='getStarted'>
                 < RocketLaunchOutlinedIcon className='rocketIcon'/> Get Started
              </button>
          </div>
      
          <div className='secondHalf'>
              <img src='Image Placeholder (1).png' alt='' />
              <div className='spaceWalk'>
                  Space Walking
              </div>
          </div>
    </div>
  )
}

export default Body
