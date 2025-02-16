const nftModel = require('../models/nftModel.js')

// CREATE NFT
const createNft = async(req, res) => {
  try{
    const {name, description, imageUrl} = req.body

    if(!name || !description || !imageUrl){
       return res.status(400).json({message: "Please fill all the inputs"})
    }

    const newNft = new nftModel({
      name: name.trim(),
      description: description.trim(),
      imageUrl: imageUrl
    })

    await newNft.save()

    res.status(201).json({
       _id: newNft.id,
       name: newNft.name,
       description: newNft.description,
       imageUrl: newNft.imageUrl
    })

  }catch(error){
    console.error(error.message);
    res.status(500).json({
      message: 'An error occurred while creating nft'
    })
  }
}

// GET ALL NFTS
const getAllNft = async(req, res) => {
  try{
     const allNfts = await nftModel.find({});
     res.json(allNfts)
  }catch(error){
    console.error(error.message);
    res.status(500).json({
      message: 'An error occurred while getting all nft data'
    })
  }
}

// GET CURRENT NFT
const getCurrentNft = async(req, res) => {
  try{
    const nft = await nftModel.findById(req.params.id);
    if(nft){
       res.json({
        _id: nft.id,
        name: nft.name,
        description: nft.description,
        imageUrl: nft.imageUrl
       })
    }
    else{
      res.status(404)
      throw new Error("Nft not found")
    }
  }
  catch(error){
    console.error(error.message);
    res.status(500).json({
     message: 'An error occurred while getting nft details'
   })
  }
 
}

// GET NFT DETAILS
const getNftDetails = async (req, res) => {
  try {
    const nft = await nftModel.findById(req.params.id); // Correctly fetch the NFT by ID
    console.log('NFT from database:', nft);
    if (nft) {
      res.json({
        _id: nft._id,
        name: nft.name,
        description: nft.description,
        imageUrl: nft.imageUrl
      });
    } else {
      res.status(404).json({ message: 'NFT not found' });
    }
  } catch (error) {
    console.error(error.message);
    res.status(500).json({
      message: 'An error occurred while getting NFT data',
    });
  }
};

module.exports = {
  createNft,
  getAllNft,
  getCurrentNft,
  getNftDetails
}