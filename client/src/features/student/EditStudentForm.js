import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
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
import Loading from "../../components/Loading";
import {
  useGetSpeechTherapistsQuery,
  useGetAvatarsQuery,
  useGetStudentQuery,
  useEditStudentMutation,
} from "../../services/phonology";

const EditStudentForm = () => {
  const params = useParams();
  const navigate = useNavigate();

  const {
    data: student,
    isLoading: isGetStudentLoading,
    isError: isGetStudentError,
    error: getStudentError,
  } = useGetStudentQuery(params.id);

  const [selectedStudentAvatarId, setSelectedStudentAvatarId] = useState(null);

  let defaultFormData;

  if (isGetStudentLoading) {
    defaultFormData = {
      full_name: "",
      date_of_birth: "",
      username: "",
      email: "",
      speech_therapist_id: "",
      avatar_id: "",
      password: "",
    };
  } else if (isGetStudentError) {
    defaultFormData = null;
    console.error(getStudentError);
  }

  const [formData, setFormData] = useState(defaultFormData);

  const {
    data: avatars,
    isLoading: isGetAvatarsLoading,
    isError: isGetAvatarsError,
    error: getAvatarsError,
  } = useGetAvatarsQuery();

  useEffect(() => {
    if (student && student.avatar) {
      setSelectedStudentAvatarId(student.avatar.id);

      defaultFormData = {
        id: student.id,
        full_name: student.full_name,
        date_of_birth: student.date_of_birth,
        username: student.username,
        email: student.email,
        speech_therapist_id: student.speech_therapist_id,
        avatar_id: student.avatar.id,
        password: "",
      };

      setFormData(defaultFormData);
    }
  }, [student, avatars]);

  console.log({ formData });

  let avatarElements;

  if (isGetAvatarsLoading) {
    avatarElements = null;
  } else if (isGetAvatarsError) {
    avatarElements = null;
    console.error(getAvatarsError);
  } else {
    avatarElements = avatars.map((avatar) => {
      if (avatar.id === selectedStudentAvatarId) {
        return (
          <Button
            variant="outlined"
            sx={{ color: "black" }}
            key={avatar.id}
            onClick={handleChange}
          >
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
        );
      } else {
        return (
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
        );
      }
    });
  }

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
        <MenuItem
          name="speech_therapist_id"
          value={speechTherapist.id}
          key={speechTherapist.id}
        >
          {speechTherapist.full_name}
        </MenuItem>
      );
    });
  }

  const [
    editStudent,
    { isError: isEditStudentError, error: editStudentError },
  ] = useEditStudentMutation();

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
      setSelectedStudentAvatarId(avatar_id);
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

    editStudent(formData)
      .unwrap()
      .then(() => navigate(`/students/${student.id}`));

    setSelectedStudentAvatarId(null);
  }

  let editStudentErrorDisplay;

  if (isEditStudentError) {
    if (editStudentError.data.error) {
      editStudentErrorDisplay = (
        <>
          <Typography key={editStudentError}>
            {editStudentError.data.status}: {editStudentError.data.error}
          </Typography>
          <Typography>Exception: {editStudentError.data.exception}</Typography>
        </>
      );
    } else if (editStudentError.data.errors) {
      editStudentErrorDisplay = editStudentError.data.errors.map((error) => (
        <Typography key={error}>{error}</Typography>
      ));
    } else {
      editStudentErrorDisplay = null;
    }
  }

  if (
    isGetSpeechTherapistsLoading ||
    isGetStudentLoading ||
    isGetAvatarsLoading
  ) {
    return <Loading />;
  } else {
    return (
      <Container component="main" maxWidth="xs">
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
            Edit Student
          </Typography>
          <Typography
            component="h1"
            variant="h5"
            color="primary.dark"
            fontFamily="monospace"
          >
            {student ? student.full_name : null}
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
                  Speech Therapist:
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
                <Typography>Avatar:</Typography>
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
            </Grid>
            <Button type="submit" fullWidth variant="contained" sx={{ my: 2 }}>
              Submit
            </Button>
            <Typography sx={{ color: "#d36d3a", fontStyle: "italic" }}>
              {editStudentErrorDisplay}
            </Typography>
          </Box>
        </Box>
      </Container>
    );
  }
};

export default EditStudentForm;
