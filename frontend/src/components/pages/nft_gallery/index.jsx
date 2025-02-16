import React from 'react'
import './style.css'
import {useGetAllNftQuery} from '../../../redux/api/nftApiSlice';
import { Link } from 'react-router-dom';

const NftGallery = () => {
  const {data:nftData, refetch, error} = useGetAllNftQuery();
  
  return (
      
    <div className='section3'>
    <div className='gallery'>
      <h2 className='title'>Your NFT Gallery</h2>
      <div className='nftBoxes'>
        {
          nftData?.map((nft) => (
            <Link to={`/nft/${nft._id}`}>
              <div key={nft._id} className='nftBox'>
                  <img src={nft?.imageUrl}/>
                  <div className='about'>
                    <p className='nftName'>{nft?.name}</p>
                    <p className='nftDescription'>{nft?.description}</p>
                  </div>
              </div>
            </Link>
             
            )
          )
        }
      </div>
    </div>
  </div>
  )
}

export default NftGallery