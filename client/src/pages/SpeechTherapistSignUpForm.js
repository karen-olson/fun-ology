import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Button,
  TextField,
  Grid,
  Box,
  Typography,
  Container,
} from "@mui/material";
import FunologyHeader from "../Components/FunologyHeader";

const defaultFormData = {
  role: "",
  fullName: "",
  dateOfBirth: null,
  username: "",
  email: "",
  password: "",
  passwordConfirmation: "",
  speechTherapistId: null,
};

const SpeechTherapistSignUpForm = ({ createUser }) => {
  const [formData, setFormData] = useState(defaultFormData);
  // const [errors, setErrors] = useState(null);

  function handleChange(event) {
    const updatedFormData = {
      ...formData,
      [event.target.name]: event.target.value,
    };

    setFormData(updatedFormData);
  }

  function handleSubmit(e) {
    e.preventDefault();

    // access RTK query POST method here?
    // Use>....CreateSpeechTherapist(......);

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
            {/* <Grid item xs={12}>
              <InputLabel id="role-label">I am a...</InputLabel>
              <Select
                labelid="role-label"
                id="role"
                name="role"
                onChange={handleChange}
                value={formData["role"]}
                fullWidth
              >
                <MenuItem value="SpeechTherapist">Speech Therapist</MenuItem>
                <MenuItem value="Student">Student</MenuItem>
              </Select>
            </Grid> */}
            <Grid item xs={12}>
              <TextField
                id="fullName"
                name="fullName"
                label="Full Name"
                type="text"
                value={formData["fullName"]}
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
                id="passwordConfirmation"
                name="passwordConfirmation"
                label="Password Confirmation"
                type="password"
                value={formData["passwordConfirmation"]}
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
