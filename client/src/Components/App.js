import { useState } from "react";
import { useGetCurrentUserQuery } from "../services/phonology";
import { Routes, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import LoginForm from "../features/logIn/LoginForm";
import StudentSignUpForm from "../features/signUp/StudentSignUpForm";
import SpeechTherapistSignUpForm from "../features/signUp/SpeechTherapistSignUpForm";
import SignUpPage from "../features/signUp/SignUpPage";
import SignUpConfirmation from "../features/signUp/SignUpConfirmation";
import StudentsList from "../features/student/StudentsList";
import PhonologicalProcessList from "../features/phonologicalProcesses/PhonologicalProcessList";
import PhonemesList from "../features/phonemes/PhonemesList";
import PracticeSessionStartPage from "../features/practiceSessions/PracticeSessionStartPage";
import PracticeSessionPage from "../features/practiceSessions/PracticeSessionPage";
import PracticeSessionEndPage from "../features/practiceSessions/PracticeSessionEndPage";
import Loading from "./Loading";

export default function App() {
  // PROBLEM: How to store value of currentPracticeSession, have it be accesible anywhere in the app, and persist across
  //          a refresh.

  // ATTEMPTS

  //    USESTATE
  //        Define state in App, pass props (value, setter function)
  //    DIDN'T WORK
  //        Value resets on a refresh (not sure how to tell it to persist)

  //    PERSIST CURRENTSESSION IN BACKEND:
  //        Create a currentPracticeSession table in DB that can only hold one entry at a time per student
  //          automatically over-writes old currentPracticeSession if a new one is added before the old
  //          one is deleted
  //        POST currentPracticeSession on start page
  //        GET currentPracticeSession
  //        DELETE currentPracticeSession on end page
  //    CONS
  //        Not the most efficient way to do things
  //    ALTERNATE OPTION
  //        Add "current" column to PracticeSessions, and index it for efficiency

  //    PERSIST CURRENTSESSIONID IN URL:
  //        Store the practice session ID in the URL
  //    NOT IDEAL
  //        Seems logistically tricky becuase it would have to be added to multiple paths and
  //        not at the base of the URL

  //    REDUX SLICE (NO API INTERACTION): TRIED, DIDN'T WORK
  //        Store it in Redux without making any calls to backend by creating a currentPracticeSessionSlice
  //          how long does it persist for? will it disappear when I refresh my app?
  //    DIDN'T WORK
  //        All of Redux data resets on a refresh (is this how it's supposed to work? )
  //    COULD TRY REDUX-PERSIST
  //        Seems over-complicated

  // SOLUTION

  const {
    data: currentUser,
    isLoading,
    isError,
    error,
  } = useGetCurrentUserQuery();

  const unauthorizedError = error ? error.status === 401 : null;
  const notLoggedIn = !currentUser || unauthorizedError;

  if (isLoading) {
    return <Loading />;
  } else if (notLoggedIn) {
    return (
      <>
        <Routes>
          <Route path="*" element={<Home />} />
          <Route path="login" element={<LoginForm />} />
          <Route path="signup" element={<SignUpPage />} />
          <Route
            path="signup/speech_therapist"
            element={<SpeechTherapistSignUpForm />}
          />
          <Route path="signup/student" element={<StudentSignUpForm />} />
          <Route path="signup/confirmation" element={<SignUpConfirmation />} />
        </Routes>
      </>
    );
  } else if (currentUser) {
    return (
      <>
        <NavBar />
        <Routes>
          <Route path="students" element={<StudentsList />} />
          <Route
            path="phonological_processes"
            element={<PhonologicalProcessList />}
          />
          <Route
            path="/:phonological_process_name/phonemes"
            element={<PhonemesList />}
          />
          <Route
            path="/:phonological_process_name/phonemes/:phoneme_id"
            element={<PracticeSessionStartPage />}
          />
          <Route
            path="/:phonological_process_name/phonemes/:phoneme_id/minimal_pairs/:minimal_pair_id"
            element={<PracticeSessionPage />}
          />
          <Route
            path="/:phonological_process_name/phonemes/:phoneme_id/done"
            element={<PracticeSessionEndPage />}
          />
        </Routes>
      </>
    );
  }
}
