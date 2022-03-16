// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const phonologyApi = createApi({
  reducerPath: "phonologyApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://localhost:3000/" }),
  endpoints: (builder) => ({
    getTestData: builder.query({
      query: () => "test_data",
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetTestDataQuery } = phonologyApi;
