import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const categoryApi = createApi({
   reducerPath: 'categoryApi',
   baseQuery: fetchBaseQuery({ baseUrl: 'https://apistaging.inclass.app/api/v1' }),
   endpoints: (builder) => ({
      fetchCategories: builder.query({
         query: () => `/classes/80/subjects`,
         transformResponse: (response) => response.data.subjects,
      }),

      fetchCourses: builder.query({
         query: (subjectId) =>
            `/courses_filtering?page[number]=1&page[size]=10&filter[subject_id]=${subjectId}`,
            transformResponse: (response) => response.data.courses,
      }),
   }),
});

export const { useFetchCategoriesQuery, useLazyFetchCoursesQuery } = categoryApi;
