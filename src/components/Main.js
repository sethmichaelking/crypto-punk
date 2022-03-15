import React from 'react'
import PunkList from './PunkList'

const Main = () => {
  return (
    <div className='main'>
        <div className='mainContent'>
            <div className='punkHighlight'>
                <div className='punkContainer'>
                    <img 
                    // src={activePunk.image_original_url} 
                    alt='' 
                    className='selectedPunk'> </img>
                </div>
            </div>
            <div className='punkDetail'>
                <div className='title'>
                         Bandana Punk
                    <span className='itemNumber'> </span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Main