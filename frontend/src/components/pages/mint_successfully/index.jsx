import React from 'react';
import './style.css';
import success from '../../../assets/success.png';
import share from '../../../assets/share.png';
import frame from '../../../assets/Frame2.png'
const MintSuccessfully = ({ nftDetails }) => {
  console.log(nftDetails)
  return (
    <div className='section4'>
      <div className='container'>
        <div className='circule'>
          <img src={success} alt="Success" />
        </div>
        <p className='title1'>NFT Minted Successfully!</p>
        <p className='title2'>Your NFT has been created and added to your collection</p>
        <div className='card'>
          <img src={nftDetails?.imageUrl} alt={nftDetails?.name} />
          <div className='cardDetails'>
            <p>NFT Name</p>
            <p>{nftDetails?.name}</p>
            <p>Description</p>
            <p>{nftDetails?.description}</p>
            <p>NFT ID</p>
            <p>{nftDetails?._id}</p>
          </div>
        </div>
        <div className='btnBox'>
           <div className='btn1'>
              <img src={share}/>
              <p>Share</p>
            </div>
           <div className='btn2'>
            <img src={frame} />
            <p> Mint Another</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default MintSuccessfully;
