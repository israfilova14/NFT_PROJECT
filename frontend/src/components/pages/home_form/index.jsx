import React, { useState, useEffect } from 'react';
import './style.css';
import Frame2 from '../../../assets/Frame2.png';
import { useCreateNftMutation, useGetNftDetailsQuery } from '../../../redux/api/nftApiSlice';
import Loader from '../../helpers/loader';
import { toast } from 'react-toastify';

const HomeForm = ({ onNftCreate }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [nftId, setNftId] = useState(null);

  const [createNft, { isLoading }] = useCreateNftMutation();
  const { data: nftDetails, isLoading: nftDetailsLoading } = useGetNftDetailsQuery(nftId);

  useEffect(() => {
    if (nftDetails) {
      console.log('Fetched NFT details:', nftDetails);
    }
  }, [nftDetails]);

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await createNft({ name, description, imageUrl }).unwrap();
      toast.success('NFT created successfully');
      setNftId(res._id);  
      onNftCreate(res);  
      setName('');
      setDescription('');
      setImageUrl('');
    } catch (error) {
      console.error(error);
      toast.error(error?.data?.message || 'Error creating NFT');
    }
  };

  return (
    <div className='section2'>
      <div className='formWrapper'>
        <form action="#" onSubmit={submitHandler}>
          <h2>Mint Your NFT</h2>
          <div className='row1 row'>
            <label htmlFor="name">NFT name</label>
            <input
              type="text"
              id='name'
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder='Enter NFT name'
              required
            />
          </div>
          <div className='row2 row'>
            <label htmlFor='description'>Description</label>
            <textarea
              placeholder='Describe your NFT'
              name='description'
              value={description}
              required
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div className='row3 row'>
            <label htmlFor='imageUrl'>Image URL</label>
            <input
              type="text"
              id="imageUrl"
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
              placeholder='Enter image URL'
              required
            />
          </div>
          <button type="submit">
            <img src={Frame2} alt="Mint NFT" />
            <p>Mint NFT</p>
          </button>
          {isLoading && <Loader />}
        </form>
      </div>
    </div>
  );
};

export default HomeForm;
