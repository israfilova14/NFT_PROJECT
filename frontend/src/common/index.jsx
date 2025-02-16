const backendDomen =  "http://localhost:9000"

const SummaryApi = {

  createNft: {
    url: `${backendDomen}/nft/create-nft`,
    method: "post"
  },

  getAllNft: {
    url: `${backendDomen}/nft/all-nfts`,
    method: "get"
  },

  getNft: {
    url: `${backendDomen}/nft/get-nft`,
    method: "get"
  },

  nftDetails: {
    url: `${backendDomen}/nft/nft-details`,
    method: 'get'
  }
}

export default SummaryApi