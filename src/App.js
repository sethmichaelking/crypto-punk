import './App.css';
import Header from './components/Header.js';
import HeaderStyle from './components/Header.css';
import CollectionCard from './components/CollectionCard';
import { useState, useEffect } from 'react';
import axios from 'axios';
import PunkList from './components/PunkList';
import Main from './components/Main';


function App() {
 const [punkListData, setPunkListData] = useState([])
 const [selectedPunk, setSelectedPunk] = useState(0)

 useEffect(() => {
  const getMyNFTs = async () => {
    const openseaData = await axios.get(
      'https://testnets-api.opensea.io/assets?asset_contract_address=0xCb7a625840500505DE25267948942027F9448322'
      )
      setPunkListData(openseaData.data.assets)
  }
  return getMyNFTs()
 }, []);

  return (
  <div className='app' >
    <Header />
    <Main punkListData={punkListData} selectedPunk={selectedPunk}/>
    <PunkList punkListData={punkListData}  setSelectedPunk={setSelectedPunk} />
    {/* <Main /> */}
  </div>
  )
}

export default App;
