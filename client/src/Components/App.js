import { useGetTestDataQuery } from "../services/phonology";
import { Routes, Route } from "react-router-dom";

import Home from "./Home";
import LoginForm from "../features/logIn/LoginForm";
import StudentSignUpForm from "../features/signUp/StudentSignUpForm";
import SpeechTherapistSignUpForm from "../features/signUp/SpeechTherapistSignUpForm";
import SignUpPage from "../features/signUp/SignUpPage";
import SignUpConfirmation from "../features/signUp/SignUpConfirmation";

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
        <Route path="signup/confirmation" element={<SignUpConfirmation />} />
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
