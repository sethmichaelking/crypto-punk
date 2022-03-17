import React from 'react'
import PunkList from './PunkList'
import twitter from '../assets/twitter.png'
import instagram from '../assets/instagram.png'
import facebook from '../assets/fb7.png'
import './Main.css'


const Main = () => {
  return (
    <div className='main'>
        <div className='mainContent'>
            <div className='punkHighlight'>
                <div className='punkContainer'>
                    <img 
                    className='selectedPunk'
                    src='https://lh3.googleusercontent.com/kdJ9IQOACVGusCeV9T11lBIckFHkvPkmYwEkC5T5cx6RAzwA4YplqS5ZLqLDKDWf_SyTchS0vHo-1sibRlFVcuT7n4_UQMQffelv=w600' alt='' className='selectedPunk'/> 
                </div>
            </div>

            <div className='punkDetail'>
                <div className='title'> Bandana Punk </div>
                    <span className='itemNumber'> *#3</span>
            </div>
           <div className='owner'>
                <div className='ownerImagecontainer'>
                    {/* for line 28, the profile picture image, its displaying the top left corner of the image shown Tao Lin x Countere Mag, but the pic isn't being displayed properly */}
                    <img src='https://lh3.googleusercontent.com/kdJ9IQOACVGusCeV9T11lBIckFHkvPkmYwEkC5T5cx6RAzwA4YplqS5ZLqLDKDWf_SyTchS0vHo-1sibRlFVcuT7n4_UQMQffelv=w600' alt=''/>
                </div>
             <div className='ownerDetails'>
                 {/* not sure why this isn't working so I just weant ahead and commented it out and now the dev enviorment looks good
                 
                 <div className='ownerNameAndHandle'>
                    <div className='ownerLink'>
                        <div> 0xCb7a625840500505DE25267948942027F9448322 </div> */}
                            <div className='ownerHandle'> </div>
                                <div className='ownerLinkImage'> 
                                    <img src={twitter} alt='' />
                                </div>
                                <div className='ownerLinkImage'> 
                                    <img src={instagram} alt=''/>
                                </div>
                                <div className='ownerLinkImage'> 
                                    <img src={facebook} alt=''/>
                                </div>
                    </div>
                 </div>
             </div>
           </div> 
    //     </div>
    // </div>
  )
}

export default Main