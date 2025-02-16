const mongoose = require('mongoose');

const nftSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  description: {
    type: String,
    required: true,
  },

  imageUrl: {
    type: String,
    required: true
  },

  // walletAddress: {
  //   type: String,
  //   required: true
  // }
},
{
  timestamps: true
})

const nftModel = mongoose.model('Nft', nftSchema);
module.exports = nftModel