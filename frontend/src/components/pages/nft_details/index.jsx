import React from 'react'
import './style.css'
import {useParams} from 'react-router-dom'
import { useGetNftQuery } from '../../../redux/api/nftApiSlice';

const NftDetails = () => {

  const {id:nftId} = useParams();
  const {data:nft, isLoading, error, refetch} = useGetNftQuery(nftId)
  console.log(nft);
  
  return (
    <div className='container'>
         <div className='wrapper'>
          <div className='title'>
            <h2>Your Nft Details</h2>
          </div>
          <div className='nft'>
             <img src={nft?.imageUrl} className='nftImage'/>
             <div className='about'>
                <h2 className='nftName'>{nft?.name}</h2>
                <p className='nftDescription'>{nft?.description}</p>
             </div>
          </div>
         </div>
    </div>
  )
}

export default NftDetails