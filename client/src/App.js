import * as React from "react";
import { useGetTestDataQuery } from "./services/phonology";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import LoginForm from "./pages/LoginForm";
import StudentSignUpForm from "./pages/StudentSignUpForm";
import SpeechTherapistSignUpForm from "./pages/SpeechTherapistSignUpForm";
import SignUpPage from "./pages/SignUpPage";

export default function App() {
  // Using a query hook automatically fetches data and returns query values
  const { data, error, isLoading } = useGetTestDataQuery();

  console.log({ data });
  console.log({ error });
  console.log({ isLoading });
  // Individual hooks are also accessible under the generated endpoints:
  // const { data, error, isLoading } = pokemonApi.endpoints.getPokemonByName.useQuery('bulbasaur')

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<LoginForm />} />
        <Route path="signup" element={<SignUpPage />} />
        <Route
          path="signup/speech-therapist"
          element={<SpeechTherapistSignUpForm />}
        />
        <Route path="signup/student" element={<StudentSignUpForm />} />
      </Routes>

      {/* {error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <>Loading...</>
      ) : data ? (
          <h3>{data}</h3>
      ) : null} */}
    </div>
  );
}
