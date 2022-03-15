import React from 'react'
import weth from '../assets/weth.png'
import './CollectionCard.css'

const CollectionCard = ({ punk }) => {
  return (
   <div className='collectionCard'> 
        <img src={punk.image_original_url} alt=''/>
        <div className='detail'>
        <div className='name'>
            {punk.name} <div className='id'> •#{punk.token_id}  </div>
        </div>

         <div className='priceContainer'>
                <img src={weth} className='wethImage' alt='nick'/>
                <div className='price'> {punk.traits[0].price} </div>
         </div>
     </div>
   </div>
  )
}

export default CollectionCard