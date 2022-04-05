import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Container,
  Box,
  Grid,
  Typography,
  TextField,
  Button,
} from "@mui/material";
import FunologyHeader from "../../components/FunologyHeader";
import { usePostLoginMutation } from "../../services/phonology";

const defaultFormData = {
  username: "",
  password: "",
};

const LoginForm = () => {
  const [formData, setFormData] = useState(defaultFormData);
  const [errors, setErrors] = useState(null);

  // Not using RTK Query for login POST request because it's not correctly setting cookies.
  // https://github.com/reduxjs/redux-toolkit/issues/2095
  // Tried adding credentials: include to fetchBaseQuery but it didn't help (and it made it so the other requests didn't work).
  // The issue is resolved when I make a request using the fetch API instead.

  const [postLogin, { isLoading, isFetching, isError, error }] =
    usePostLoginMutation();

  const navigate = useNavigate();

  function handleChange(e) {
    const key = e.target.name;
    const value = e.target.value;

    const updatedFormData = {
      ...formData,
      [key]: value,
    };

    setFormData(updatedFormData);
  }

  function handleSubmit(e) {
    e.preventDefault();

    postLogin(formData);

    // const configObj = {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(formData),
    // };

    // fetch("/login", configObj).then((resp) => {
    //   if (resp.ok) {
    //     resp.json().then((currentUser) => setCurrentUser(currentUser));
    //     navigate("/phonological_processes");
    //   } else {
    //     resp.json().then((err) => setErrors(err.errors));
    //   }
    // });

    if (isError) {
      setErrors(error.data.errors);
    } else {
      navigate("/phonological_processes");
    }

    setFormData(defaultFormData);
  }

  return (
    <Container component="main" maxWidth="xs">
      <FunologyHeader />
      <Box
        sx={{
          marginTop: 4,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography
          component="h1"
          variant="h4"
          color="primary.dark"
          fontFamily="monospace"
        >
          Log In
        </Typography>
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                id="username"
                name="username"
                label="Username"
                type="text"
                value={formData["username"]}
                onChange={handleChange}
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="password"
                name="password"
                label="Password"
                type="password"
                value={formData["password"]}
                onChange={handleChange}
                fullWidth
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 2, mb: 2 }}
          >
            Log In
          </Button>
          <Typography sx={{ color: "#d36d3a", fontStyle: "italic" }}>
            {errors}
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          marginTop: 4,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography>
          Don't have an account?
          <Link to="/signup">Sign Up</Link>
        </Typography>
      </Box>
    </Container>
  );
};

export default LoginForm;
