import { useGetCurrentUserQuery } from "./services/phonology";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import LoginForm from "./features/logIn/LoginForm";
import StudentSignUpForm from "./features/signUp/StudentSignUpForm";
import SpeechTherapistSignUpForm from "./features/signUp/SpeechTherapistSignUpForm";
import SignUpPage from "./features/signUp/SignUpPage";
import SignUpConfirmation from "./features/signUp/SignUpConfirmation";
import StudentsList from "./features/student/StudentsList";
import StudentDataPage from "./features/student/StudentDataPage";
import EditStudentForm from "./features/student/EditStudentForm";
import PhonologicalProcessList from "./features/phonologicalProcesses/PhonologicalProcessList";
import PhonemesList from "./features/phonemes/PhonemesList";
import PracticeSessionStartPage from "./features/practiceSessions/PracticeSessionStartPage";
import PracticeSessionPage from "./features/practiceSessions/PracticeSessionPage";
import PracticeSessionEndPage from "./features/practiceSessions/PracticeSessionEndPage";
import Loading from "./components/Loading";

function App() {
  const { data: currentUser, isLoading, error } = useGetCurrentUserQuery();

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
          <Route path="students/:id" element={<StudentDataPage />} />
          <Route path="students/:id/edit" element={<EditStudentForm />} />
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

export default App;
