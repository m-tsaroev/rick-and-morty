import { apiSlice } from '../api/apiSlice'

const mainApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // Characters

    getCharacters: builder.query({
      query: (page = 1) => `/character/?page=${page}`,
      providesTags: ['Character'],
    }),
    getCharacterById: builder.query({
      query: (characterId) => `/character/${characterId}`,
      providesTags: ['Character'],
    }),

    // Episodes

    getEpisodes: builder.query({
      query: (page = 1) => `/episode/?page=${page}`,
      providesTags: ['Episode'],
    }),
    getEpisodesById: builder.query({
      query: (episodesIds = 3) => `/episode/${episodesIds}`,
      providesTags: ['Episode'],
    }),

  }),
})

export const {
  useGetCharactersQuery,
  useGetCharacterByIdQuery,
  useGetEpisodesQuery,
  useGetEpisodesByIdQuery
} = mainApiSlice