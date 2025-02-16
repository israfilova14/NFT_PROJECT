import { apiSlice } from "./apiSlice";
import SummaryApi from "../../common";

export const nftApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createNft: builder.mutation({
      query: (data) => ({
        url: SummaryApi.createNft.url,
        method: SummaryApi.createNft.method,
        body: data
      }),
    }),

    getAllNft: builder.query({
      query: () => ({
        url: SummaryApi.getAllNft.url,
        method: SummaryApi.getAllNft.method
      }),
      providesTags: ['Nft'],
      keepUnusedDataFor: 5
    }),

    getNft: builder.query({
      query: (nftId) => ({
        url: `${SummaryApi.getNft.url}/${nftId}`,
        method: SummaryApi.getNft.method
      })
    }),

    getNftDetails: builder.query({
       query: ({nftId}) => ({
         url: `${SummaryApi.nftDetails.url}/${nftId}`,
         method: SummaryApi.nftDetails.method
       })
    })
  })
});

export const {
  useCreateNftMutation,
  useGetAllNftQuery,
  useGetNftQuery,
  useGetNftDetailsQuery
} = nftApiSlice;
