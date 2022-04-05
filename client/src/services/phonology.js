// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const phonologyApi = createApi({
  reducerPath: "phonologyApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000/",
    credentials: "include",
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
    getSpeechTherapists: builder.query({
      query: () => "/speech_therapists",
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
    getPhonologicalProcesses: builder.query({
      query: () => "/phonological_processes",
      // credentials: "include",
    }),
    getAvatars: builder.query({
      query: () => "/avatars",
    }),
    getTargetPhoneme: builder.query({
      query: (phoneme_id) => `/target_phonemes/${phoneme_id}`,
      // Consider randomizing the array here

      //   //   Credit to W3 Docs for this version of the Fisher-Yates shuffle algorithm
      //   https://www.w3docs.com/snippets/javascript/how-to-randomize-shuffle-a-javascript-array.html
      //   function shuffleArray(arr) {
      //     for (let i = arr.length - 1; i > 0; i--) {
      //       const j = Math.floor(Math.random() * (i + 1));
      //       [arr[i], arr[j]] = [arr[j], arr[i]];
      //     }
      //     console.log(arr);
      //   }

      //   const randomMinimalPairs = shuffleArray(minimalPairs);
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useGetCurrentUserQuery,
  usePostLoginMutation,
  useGetSpeechTherapistsQuery,
  useCreateNewSpeechTherapistMutation,
  useCreateNewStudentMutation,
  useGetPhonologicalProcessesQuery,
  useGetAvatarsQuery,
  useGetTargetPhonemeQuery,
} = phonologyApi;
