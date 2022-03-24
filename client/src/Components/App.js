import { useGetCurrentUserQuery } from "../services/phonology";
import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import NavBar from "../NavBar";
import Home from "./Home";
import LoginForm from "../features/logIn/LoginForm";
import StudentSignUpForm from "../features/signUp/StudentSignUpForm";
import SpeechTherapistSignUpForm from "../features/signUp/SpeechTherapistSignUpForm";
import SignUpPage from "../features/signUp/SignUpPage";
import SignUpConfirmation from "../features/signUp/SignUpConfirmation";
import StudentsList from "../features/student/StudentsList";

export default function App() {
  const [currentUser, setCurrentUser] = useState(null);
  // Using a query hook automatically fetches data and returns query values

  useEffect(() => {
    fetch("/me")
      .then((resp) => resp.json())
      .then((currentUser) => console.log(currentUser));
  }, []);

  // const {
  //   data: currentUser,
  //   isLoading,
  //   isSuccess,
  //   isError,
  //   error,
  // } = useGetCurrentUserQuery();

  // console.log({ currentUser });
  // // debugger;
  // console.log("hello from app");

  // console.log({ error });
  // console.log({ isLoading });
  // console.log({ isSuccess });
  // console.log({ isError });
  // Individual hooks are also accessible under the generated endpoints:
  // const { data, error, isLoading } = pokemonApi.endpoints.getPokemonByName.useQuery('bulbasaur')

  if (!currentUser) {
    return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="login"
          element={<LoginForm setCurrentUser={setCurrentUser} />}
        />
        <Route path="signup" element={<SignUpPage />} />
        <Route
          path="signup/speech-therapist"
          element={<SpeechTherapistSignUpForm />}
        />
        <Route path="signup/student" element={<StudentSignUpForm />} />
        <Route path="signup/confirmation" element={<SignUpConfirmation />} />
      </Routes>
    );
  } else {
    return (
      <div className="App">
        <NavBar setCurrentUser={setCurrentUser} />
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}

          <Route path="students" element={<StudentsList />} />
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
}
