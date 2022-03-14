import './App.css';
import Header from './components/Header.js';
import HeaderStyle from './components/Header.css';
import CollectionCard from './components/CollectionCard';
import { useState, useEffect } from 'react'
import axios from 'axios'
import PunkList from './components/PunkList';
import Main from './components/Main';


function App() {
 const [punkListData, setPunkListData] = useState([])
 
 useEffect(() => {
  const getMyNFTs = async() => {
    const openseaData = await axios.get(
      'https://testnets-api.opensea.io/assets?asset_contract_address=0xCb7a625840500505DE25267948942027F9448322'
      )
      setPunkListData(openseaData.data.assets)
  }
  return getMyNFTs()
 }, [])

  return (
  <div className='app' >
    <Header />   
    <Main />
    <CollectionCard 
      id={0} 
      name={'Zero HP Lovecraft'} 
      traits={[7]} 
      image='https://lh3.googleusercontent.com/Z55uIhQfc3Daf--lk4XpWyF7TqxQtE7WjA0Z-At96jLRQWjB09KxMO_bv-bhgVPLha4N3LX0cnzZT8nyk5UbCFJGJ3yzPDGVeT3eHrU=w600'
      />
  </div>
  )
}

export default App;
