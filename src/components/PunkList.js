import React from 'react'
import CollectionCard from './CollectionCard'
import './PunkList.css'

const PunkList = ({ punkListData, setSelectedPunk }) => {
  console.log('inside punkList comp >', punkListData)
  return (
    <div className='punkList'>
        {punkListData.map(punk => (
            <div onClick={() => setSelectedPunk(punk.token_id)} key={punk.token_id}> 
               <CollectionCard punk={punk} /> 
            </div>
        ))}
    </div>
  )
}

export default PunkList