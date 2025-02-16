const express = require('express');

const {
  createNft,
  getAllNft,
  getCurrentNft,
  getNftDetails,
} = require('../controllers/nftController.js')

const router = express.Router();

// ROUTES
router.post('/create-nft', createNft);
router.get('/all-nfts', getAllNft);
router.get('/get-nft/:id', getCurrentNft);
router.get('/nft-details/:id', getNftDetails)

module.exports = router