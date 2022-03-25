import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Button,
  TextField,
  Grid,
  Box,
  Typography,
  Container,
} from "@mui/material";
import FunologyHeader from "../../components/FunologyHeader";
import { useCreateNewSpeechTherapistMutation } from "../../services/phonology";

const defaultFormData = {
  full_name: "",
  username: "",
  email: "",
  password: "",
  password_confirmation: "",
};

const SpeechTherapistSignUpForm = ({ createUser }) => {
  const [formData, setFormData] = useState(defaultFormData);

  const navigate = useNavigate();

  const [createNewSpeechTherapist, { isError, error }] =
    useCreateNewSpeechTherapistMutation();

  let errorDisplay;

  if (isError) {
    errorDisplay = error.data.errors.map((error) => (
      <Typography>{error}</Typography>
    ));
  } else {
    errorDisplay = null;
  }

  function handleChange(event) {
    const updatedFormData = {
      ...formData,
      [event.target.name]: event.target.value,
    };

    setFormData(updatedFormData);
  }

  function handleSubmit(e) {
    e.preventDefault();

    createNewSpeechTherapist(formData)
      .unwrap()
      .then(() => {
        navigate("/signup/confirmation");
      });

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
          Create an Account
        </Typography>
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                id="full_name"
                name="full_name"
                label="Full Name"
                type="text"
                value={formData["full_name"]}
                onChange={handleChange}
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="email"
                name="email"
                label="Email Address"
                type="email"
                value={formData["email"]}
                onChange={handleChange}
                fullWidth
              />
            </Grid>
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
            <Grid item xs={12}>
              <TextField
                id="password_confirmation"
                name="password_confirmation"
                label="Password Confirmation"
                type="password"
                value={formData["password_confirmation"]}
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
            Sign Up
          </Button>
          <Typography sx={{ color: "#d36d3a", fontStyle: "italic" }}>
            {errorDisplay}
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
          Already have an account?
          <Link to="/login">Log In</Link>
        </Typography>
      </Box>
    </Container>
  );
};

export default SpeechTherapistSignUpForm;
