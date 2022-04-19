// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const phonologyApi = createApi({
  reducerPath: "phonologyApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000/",
    // Add this line for auth to work
    credentials: "include",
  }),
  tagTypes: ["Current User"],
  endpoints: (builder) => ({
    getCurrentUser: builder.query({
      query: () => "/me",
      providesTags: ["Current User"],
    }),
    postLogin: builder.mutation({
      query: (loginInfo) => ({
        url: "/login",
        method: "POST",
        body: loginInfo,
      }),
      invalidatesTags: ["Current User"],
    }),
    postLogout: builder.mutation({
      query: () => ({
        url: "/logout",
        method: "DELETE",
      }),
      invalidatesTags: ["Current User"],
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
    getStudents: builder.query({
      query: () => "/students",
    }),
    getAlphabetizedStudents: builder.query({
      query: () => "/students/alphabetical",
    }),
    getStudent: builder.query({
      query: (id) => `/students/${id}`,
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
    createPracticeSession: builder.mutation({
      query: (newPracticeSession) => ({
        url: "/practice_sessions",
        method: "POST",
        body: { ...newPracticeSession, current: true },
      }),
    }),
    createPracticeSessionMinimalPair: builder.mutation({
      query: (newPracticeSessionMinimalPair) => ({
        url: "/practice_session_minimal_pairs",
        method: "POST",
        body: newPracticeSessionMinimalPair,
      }),
    }),
    getCurrentPracticeSession: builder.query({
      query: () => "/practice_sessions/current",
    }),
    updatePracticeSession: builder.mutation({
      query: (updatedPracticeSession) => ({
        url: `/practice_sessions/${updatedPracticeSession.id}`,
        method: "PATCH",
        body: updatedPracticeSession,
      }),
    }),
  }),
});

export const {
  useGetCurrentUserQuery,
  usePostLoginMutation,
  usePostLogoutMutation,

  useGetSpeechTherapistsQuery,
  useCreateNewSpeechTherapistMutation,

  useGetStudentsQuery,
  useGetAlphabetizedStudentsQuery,
  useGetStudentQuery,
  useCreateNewStudentMutation,

  useGetPhonologicalProcessesQuery,
  useGetAvatarsQuery,
  useGetTargetPhonemeQuery,

  useCreatePracticeSessionMutation,
  useCreatePracticeSessionMinimalPairMutation,
  useGetCurrentPracticeSessionQuery,
  useUpdatePracticeSessionMutation,
  useCalculatePracticeSessionScoreMutation,
} = phonologyApi;
