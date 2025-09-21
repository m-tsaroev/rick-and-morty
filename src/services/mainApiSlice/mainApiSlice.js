import { apiSlice } from '../api/apiSlice'

const mainApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getCharacters: builder.query({
      query: (page = 1) => `/character/?page=${page}`,
      providesTags: ['Character'],
    }),
    getCharacterById: builder.query({
      query: (characterId) => `/character/${characterId}`,
      providesTags: ['Character'],
    }),
  }),
})

export const {
  useGetCharactersQuery,
  useGetCharacterByIdQuery
} = mainApiSlice