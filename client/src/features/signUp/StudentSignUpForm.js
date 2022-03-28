import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
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
import FunologyHeader from "../../components/FunologyHeader";
import { useCreateNewStudentMutation } from "../../services/phonology";

const defaultFormData = {
  full_name: "",
  date_of_birth: new Date(),
  username: "",
  email: "",
  password: "",
  password_confirmation: "",
  speech_therapist_id: "",
};

const StudentSignUpForm = () => {
  const [formData, setFormData] = useState(defaultFormData);

  const [createNewStudent, { isError, error }] = useCreateNewStudentMutation();

  const navigate = useNavigate();

  let errorDisplay;

  if (isError) {
    errorDisplay = error.data.errors.map((error) => (
      <Typography>{error}</Typography>
    ));
  } else {
    errorDisplay = null;
  }

  function handleChange(event) {
    let updatedFormData;

    if (event === null) {
      updatedFormData = {
        ...formData,
        date_of_birth: "",
      };
    } else if (event.target === undefined) {
      updatedFormData = {
        ...formData,
        date_of_birth: event,
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

    createNewStudent(formData)
      .unwrap()
      .then(() => navigate("/signup/confirmation"));

    setFormData(defaultFormData);
  }

  // Change this when changing SLP ids by reseeding the database
  const speechTherapists = [
    { id: 51, full_name: "first slp" },
    { id: 52, full_name: "second slp" },
    { id: 56, full_name: "third slp" },
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
            <Grid item xs={12}>
              <InputLabel id="speech-therapist-id-label">
                My speech teacher is...
              </InputLabel>
              <Select
                labelid="speech-therapist-label"
                id="speech_therapist_id"
                name="speech_therapist_id"
                onChange={handleChange}
                value={formData["speech_therapist_id"]}
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
                  name="date_of_birth"
                  value={formData["date_of_birth"]}
                  onChange={handleChange}
                  renderInput={(params) => <TextField {...params} />}
                />
              </LocalizationProvider>
            </Grid>
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

export default StudentSignUpForm;
