import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Button,
  TextField,
  Grid,
  Box,
  Typography,
  Container,
  MenuItem,
  InputLabel,
  Select,
} from "@mui/material";
import DateAdapter from "@mui/lab/AdapterDateFns";
import { LocalizationProvider, DesktopDatePicker } from "@mui/lab";
import FunologyHeader from "../components/FunologyHeader";

const defaultFormData = {
  role: "",
  fullName: "",
  dateOfBirth: new Date(),
  username: "",
  email: "",
  password: "",
  passwordConfirmation: "",
  speechTherapistId: "",
};

const StudentSignUpForm = ({ createUser }) => {
  const [formData, setFormData] = useState(defaultFormData);
  // const [errors, setErrors] = useState(null);

  function handleChange(event) {
    let updatedFormData;

    if (event.target === undefined) {
      updatedFormData = {
        ...formData,
        dateOfBirth: event,
      };
    } else {
      updatedFormData = {
        ...formData,
        [event.target.name]: event.target.value,
      };
    }

    setFormData(updatedFormData);
  }

  function handleSubmit(e) {
    e.preventDefault();

    // access RTK query POST method here?
    // User....CreateStudentUser(formData);

    setFormData(defaultFormData);
  }

  const speechTherapists = [
    { id: 1, full_name: "first slp" },
    { id: 2, full_name: "second slp" },
  ];

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
              <InputLabel id="speech-therapist-id-label">
                My speech teacher is...
              </InputLabel>
              <Select
                labelid="speech-therapist-label"
                id="speechTherapistId"
                name="speechTherapistId"
                onChange={handleChange}
                value={formData["speechTherapistId"]}
                fullWidth
              >
                <MenuItem value={speechTherapists[0].id}>
                  {speechTherapists[0].full_name}
                </MenuItem>
                <MenuItem value={speechTherapists[1].id}>
                  {speechTherapists[1].full_name}
                </MenuItem>
              </Select>
            </Grid>
            <Grid item xs={12}>
              <LocalizationProvider dateAdapter={DateAdapter}>
                <DesktopDatePicker
                  label="Date of Birth"
                  inputFormat="MM/dd/yyyy"
                  name="dateOfBirth"
                  value={formData["dateOfBirth"]}
                  onChange={handleChange}
                  renderInput={(params) => <TextField {...params} />}
                />
              </LocalizationProvider>
            </Grid>
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

export default StudentSignUpForm;
