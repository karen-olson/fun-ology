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
  ImageList,
  ImageListItem,
} from "@mui/material";
import DateAdapter from "@mui/lab/AdapterDateFns";
import { LocalizationProvider, DesktopDatePicker } from "@mui/lab";
import FunologyHeader from "../../components/FunologyHeader";
import Loading from "../../components/Loading";
import {
  useGetSpeechTherapistsQuery,
  useCreateNewStudentMutation,
  useGetAvatarsQuery,
} from "../../services/phonology";

const defaultFormData = {
  full_name: "",
  date_of_birth: new Date(),
  username: "",
  email: "",
  password: "",
  password_confirmation: "",
  speech_therapist_id: "",
  avatar_id: "",
};

const StudentSignUpForm = () => {
  const [formData, setFormData] = useState(defaultFormData);

  const navigate = useNavigate();

  const {
    data: avatars,
    isLoading: isGetAvatarsLoading,
    isError: isGetAvatarsError,
    error: getAvatarsError,
  } = useGetAvatarsQuery();

  let avatarElements;

  if (isGetAvatarsLoading) {
    avatarElements = null;
  } else if (isGetAvatarsError) {
    avatarElements = null;
  } else {
    avatarElements = avatars.map((avatar) => (
      <Button key={avatar.id} onClick={handleChange}>
        <ImageListItem>
          <img
            src={`${avatar.image_url}?w=164&h=164&fit=crop&auto=format`}
            srcSet={`${avatar.image_url}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            alt={avatar.name}
            loading="lazy"
            id="avatar_id"
            name={avatar.id + ": avatar_id"}
          />
        </ImageListItem>
      </Button>
    ));
  }

  console.log(formData);

  const {
    data: speechTherapists,
    isLoading: isGetSpeechTherapistsLoading,
    isError: isGetSpeechTherapistsError,
    error: getSpeechTherapistsError,
  } = useGetSpeechTherapistsQuery();

  let speechTherapistMenuItems;

  if (isGetSpeechTherapistsLoading) {
    speechTherapistMenuItems = null;
  } else if (isGetSpeechTherapistsError) {
    speechTherapistMenuItems = null;
    console.error(getSpeechTherapistsError);
  } else {
    speechTherapistMenuItems = speechTherapists.map((speechTherapist) => {
      return (
        <MenuItem name="speech_therapist_id" value={speechTherapist.id}>
          {speechTherapist.full_name}
        </MenuItem>
      );
    });
  }

  const [
    createNewStudent,
    { isError: isCreateStudentError, error: createStudentError },
  ] = useCreateNewStudentMutation();

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
    } else if (event.target.name.includes("avatar_id")) {
      const avatar_id = parseInt(event.target.name);
      updatedFormData = {
        ...formData,
        avatar_id,
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

  let createStudentErrorDisplay;

  if (isCreateStudentError) {
    createStudentErrorDisplay = createStudentError.data.errors.map(
      (createStudentError) => <Typography>{createStudentError}</Typography>
    );
  } else {
    createStudentErrorDisplay = null;
  }

  if (isGetSpeechTherapistsLoading) {
    return <Loading />;
  } else {
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
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
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
                  {speechTherapistMenuItems}
                </Select>
              </Grid>
              <Grid item xs={12}>
                <Typography>Choose an avatar:</Typography>
                <ImageList
                  sx={{ width: "auto", height: 60 }}
                  cols={7}
                  rowHeight={40}
                >
                  {avatarElements}
                </ImageList>
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
              {createStudentErrorDisplay}
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
  }
};

export default StudentSignUpForm;
