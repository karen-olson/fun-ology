// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const phonologyApi = createApi({
  reducerPath: "phonologyApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000/",
    // credentials: "include",
  }),
  tagTypes: ["Login"],
  endpoints: (builder) => ({
    getCurrentUser: builder.query({
      query: () => "/me",
      providesTags: ["Login"],
    }),
    postLogin: builder.mutation({
      query: (loginInfo) => ({
        url: "/login",
        method: "POST",
        body: loginInfo,
      }),
      invalidatesTags: ["Login"],
      // example:
      // invalidatesTags: (result, error, arg) => [{type: 'User Info', id: arg.id}|]
    }),
    createNewSpeechTherapist: builder.mutation({
      query: (newSpeechTherapist) => ({
        url: "/signup/speech_therapist",
        method: "POST",
        body: newSpeechTherapist,
      }),
    }),
    createNewStudent: builder.mutation({
      query: (newStudent) => ({
        url: "/signup/student",
        method: "POST",
        body: newStudent,
      }),
    }),
    // getSpeechTherapists: builder.query({

    // })
    // how is data stored? do I need to set up a slice and define initial state and stuff?
    // Need to store currentUser for the entire app
    // For other sections of the app, I need access to:
    //    - list of students
    //    - individual students
    //    - list of speech therapists
    //    - individual speech therapists (?)

    // Make endpoints for:
    //    - creating a student (mutation)
    //    - creating a speech therapist (mutation)
    //    - logging in (mutation)
    //    - logging out (mutation)
    //    - staying logged in (query)
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useGetCurrentUserQuery,
  usePostLoginMutation,
  useCreateNewSpeechTherapistMutation,
  useCreateNewStudentMutation,
} = phonologyApi;
