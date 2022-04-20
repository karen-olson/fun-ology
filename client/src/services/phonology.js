// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const phonologyApi = createApi({
  reducerPath: "phonologyApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000/",
    // Add this line for auth to work
    credentials: "include",
  }),
  tagTypes: ["Current User", "Student", "Practice Session"],
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
      providesTags: ["Student"],
    }),
    getAlphabetizedStudents: builder.query({
      query: () => "/students/alphabetical",
      providesTags: ["Student"],
    }),
    getStudent: builder.query({
      query: (id) => `/students/${id}`,
      providesTags: ["Student"],
    }),
    createNewStudent: builder.mutation({
      query: (newStudent) => ({
        url: "/signup/student",
        method: "POST",
        body: newStudent,
      }),
      invalidatesTags: ["Student"],
    }),
    editStudent: builder.mutation({
      query: (updatedStudent) => ({
        url: `/students/${updatedStudent.id}`,
        method: "PATCH",
        body: updatedStudent,
      }),
      invalidatesTags: ["Student"],
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
      invalidatesTags: ["Practice Session"],
    }),
    getCurrentPracticeSession: builder.query({
      query: () => "/practice_sessions/current",
      providesTags: ["Practice Session"],
    }),
    getPracticeSessionsForStudent: builder.query({
      query: (id) => `/practice_sessions/students/${id}`,
      providesTags: ["Practice Session"],
    }),
    updatePracticeSession: builder.mutation({
      query: (updatedPracticeSession) => ({
        url: `/practice_sessions/${updatedPracticeSession.id}`,
        method: "PATCH",
        body: updatedPracticeSession,
      }),
      invalidatesTags: ["Practice Session"],
    }),
    deletePracticeSessions: builder.mutation({
      // ids must be in an array
      query: (ids) => ({
        url: "/practice_sessions",
        method: "DELETE",
        body: ids,
      }),
      invalidatesTags: ["Practice Session"],
    }),
    createPracticeSessionMinimalPair: builder.mutation({
      query: (newPracticeSessionMinimalPair) => ({
        url: "/practice_session_minimal_pairs",
        method: "POST",
        body: newPracticeSessionMinimalPair,
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
  useEditStudentMutation,

  useGetPhonologicalProcessesQuery,
  useGetAvatarsQuery,
  useGetTargetPhonemeQuery,

  useCreatePracticeSessionMutation,
  useGetCurrentPracticeSessionQuery,
  useGetPracticeSessionsForStudentQuery,
  useUpdatePracticeSessionMutation,
  useCalculatePracticeSessionScoreMutation,
  useDeletePracticeSessionsMutation,

  useCreatePracticeSessionMinimalPairMutation,
} = phonologyApi;
