import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Button,
  TextField,
  Grid,
  Box,
  Typography,
  Container,
  ImageList,
  ImageListItem,
} from "@mui/material";
import FunologyHeader from "../../components/FunologyHeader";
import {
  useGetAvatarsQuery,
  useCreateNewSpeechTherapistMutation,
} from "../../services/phonology";

const defaultFormData = {
  full_name: "",
  username: "",
  email: "",
  password: "",
  password_confirmation: "",
  avatar_id: "",
};

const SpeechTherapistSignUpForm = () => {
  const [formData, setFormData] = useState(defaultFormData);
  const [selectedTherapistAvatarId, setSelectedTherapistAvatarId] =
    useState(null);

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
    console.error(getAvatarsError);
  } else {
    avatarElements = avatars.map((avatar) => {
      if (avatar.id === selectedTherapistAvatarId) {
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

  const [
    createNewSpeechTherapist,
    {
      isError: isCreateSpeechTherapistError,
      error: createSpeechTherapistError,
    },
  ] = useCreateNewSpeechTherapistMutation();

  function handleChange(event) {
    let updatedFormData;

    if (event.target.name.includes("avatar_id")) {
      const avatar_id = parseInt(event.target.name);
      updatedFormData = {
        ...formData,
        avatar_id,
      };
      setSelectedTherapistAvatarId(avatar_id);
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

    createNewSpeechTherapist(formData)
      .unwrap()
      .then(() => {
        navigate("/signup/confirmation");
      });

    setFormData(defaultFormData);
    setSelectedTherapistAvatarId(null);
  }

  let createSpeechTherapistErrorDisplay;

  if (isCreateSpeechTherapistError) {
    createSpeechTherapistErrorDisplay =
      createSpeechTherapistError.data.errors.map(
        (createSpeechTherapistError) => (
          <Typography>{createSpeechTherapistError}</Typography>
        )
      );
  } else {
    createSpeechTherapistErrorDisplay = null;
  }

  console.log(formData);

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
            {createSpeechTherapistErrorDisplay}
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
