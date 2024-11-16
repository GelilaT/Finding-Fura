import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type {Blog} from "../../lib/types/blog"

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://api.findingfura.com' }), 
  endpoints: (builder) => ({
    subscribe: builder.mutation<void, { firstName: string; lastName: string; email: string; phoneNumber?: string }>({
      query: (data) => ({
        url: '/subscriptions/create/',
        method: 'POST',
        body: data,
      }),
    }),
    getOpinionsBlogs: builder.query<Blog[], void>({
        query: () => '/blogs/opinions/',
    }),
    getIndepthBlogs: builder.query<Blog[], void>({
        query: () => '/blogs/indepth/',
    }),
    getBusinessBlogs: builder.query<Blog[], void>({
        query: () => '/blogs/business/',
    }),
    getCultureBlogs: builder.query<Blog[], void>({
        query: () => '/blogs/culture/',
    }),
    getStemBlogs: builder.query<Blog[], void>({
        query: () => '/blogs/stem/',
    }),
    getPoliticsBlogs: builder.query<Blog[], void>({
        query: () => '/blogs/politics/',
    }),
    getBlogById: builder.query<Blog, { id: string; type: string }>({
        query: ({ id, type }) =>{
            console.log(`/blogs/${type}/${id}/`)
            return `/blogs/${type}/${id}/` 
        } ,
    }),
  }),
});

export const { 
    useGetBlogByIdQuery,
    useGetBusinessBlogsQuery,
    useGetCultureBlogsQuery,
    useGetIndepthBlogsQuery,
    useGetOpinionsBlogsQuery,
    useGetPoliticsBlogsQuery,
    useGetStemBlogsQuery,
    useSubscribeMutation } = api;