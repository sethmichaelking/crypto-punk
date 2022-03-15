import React from 'react'
import CollectionCard from './CollectionCard'

const PunkList = ({ punkListData }) => {
  console.log('inside punkList comp >', punkListData)
  return (
    <div className='punkList'>
        {punkListData.map(punk => (
            <div key={punk.token_id}> 
               <CollectionCard punk={punk} /> 
            </div>
        ))}
    </div>
  )
}

export default PunkList