import {fetchBaseQuery, createApi} from '@reduxjs/toolkit/query/react'
const backendDomen = "http://localhost:9000"

const baseQuery = fetchBaseQuery({
  baseUrl: backendDomen,
  credentials: 'include'
})

export const apiSlice = createApi({
  baseQuery,
  tagTypes: ['Nft'],
  endpoints: () => ({})
})