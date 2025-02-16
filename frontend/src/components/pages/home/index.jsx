import React, { useState } from 'react';
import './style.css';
import HomeHeader from '../home_header';
import HomeForm from '../home_form';
import NftGallery from '../nft_gallery';
import MintSuccessfully from '../mint_successfully';

const Home = () => {

  const [nftCreated, setNftCreated] = useState(false)
  
  const handleNftCreation = () => {
     setNftCreated(true)

     setTimeout(() => {
      setNftCreated(false)
     }, 5000)
  }

  return (
    <div className='homeWrapper'>
         <HomeHeader/>
         {
          nftCreated ? (
            <MintSuccessfully/>
          )
          :
          (
            <HomeForm onNftCreate={handleNftCreation}/>
          )
         }
         <NftGallery/>
    </div>
  );
};

export default Home;
