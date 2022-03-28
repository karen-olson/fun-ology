import { useGetCurrentUserQuery } from "../services/phonology";
import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
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

export default function App() {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    fetch("/me").then((resp) => {
      if (resp.ok) {
        resp.json().then((currentUser) => setCurrentUser(currentUser));
      } else {
        resp.json().then((err) => console.error(err));
      }
    });
  }, []);

  console.log({ currentUser });

  if (!currentUser) {
    return (
      <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="login"
            element={<LoginForm setCurrentUser={setCurrentUser} />}
          />
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
        <NavBar setCurrentUser={setCurrentUser} />
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
        </Routes>
      </>
    );
  } else {
    return <h1>Loading</h1>;
  }
}
