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

    postLogin(formData)
      .unwrap()
      .then(() => {
        navigate("/phonological_processes");
      });

    setFormData(defaultFormData);
  }

  let errorDisplay;

  if (isError) {
    errorDisplay = error.data.errors;
  } else {
    errorDisplay = null;
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
          Don't have an account?
          <Link to="/signup">Sign Up</Link>
        </Typography>
      </Box>
    </Container>
  );
};

export default LoginForm;
