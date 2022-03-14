import React from 'react'
import punkLogo from '../assets/header/cryptopunk-logo.png'
import searchIcon from '../assets/header/search.png'
import themeSwitchIcon from '../assets/header/theme-switch.png'

const Header = () => {
  return (
   <div className='header'>
     <div className='logo-container'>
        <img src={punkLogo} className='punkLogo' alt='' />
     </div>
     <div className='searchBar'>
        <div className='searchIconContainer'>
            <img src={searchIcon} />
        </div>
        <input className='searchInput' placeholder='Collection, user, or NFT'/>
     </div>
    <div className='headerItems'>
        <p> Drops </p>
        <p> Marketplace </p>
        <p> Create </p>
    </div>
    <div className='headerActions'>
        <div className='themeSwitcher'> 
            <img src={themeSwitchIcon} alt='' />
        </div>
    </div>
    <div className='loginButton'> LOGIN </div>

   </div>
  )
}

export default Header