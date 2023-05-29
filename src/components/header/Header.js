import React from 'react'
import "./Header.css"
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';

function Header() {
  return (
    <div className='header'>
      
      <div className='logo'>
        < StorefrontOutlinedIcon className='storeFront'/>
        <h1>NFT market place</h1>
      </div>
          
        <div className='halfHead'>
          <div className='marketPlace'>
            Marketplace
          </div>

          <div className='Rankings'>
            Rankings
          </div>

          <div className='marketPlace'>
            Connect a wallet
          </div>
        <button className='signUp'>
        
          < PersonOutlinedIcon className='userIcon'/>
              Sign Up
            </button>
        </div> 
         </div>




            
  )
}

export default Header;
