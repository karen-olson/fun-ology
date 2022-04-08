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
  const [currentPracticeSession, setCurrentPracticeSession] = useState(null);

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
            element={
              <PracticeSessionStartPage
                setCurrentPracticeSession={setCurrentPracticeSession}
              />
            }
          />
          <Route
            path="/:phonological_process_name/phonemes/:phoneme_id/minimal_pairs/:minimal_pair_id"
            element={
              <PracticeSessionPage
                currentPracticeSession={currentPracticeSession}
              />
            }
          />
          <Route
            path="/:phonological_process_name/phonemes/:phoneme_id/done"
            element={
              <PracticeSessionEndPage
                currentPracticeSession={currentPracticeSession}
              />
            }
          />
        </Routes>
      </>
    );
  }
}
