import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Box,
  Grid,
  Typography,
  TextField,
  Button,
} from "@mui/material";
import FunologyHeader from "../../components/FunologyHeader";

const defaultFormData = {
  username: "",
  password: "",
};

const LoginForm = ({ onLogin }) => {
  const [formData, setFormData] = useState(defaultFormData);
  const [errors, setErrors] = useState(null);

  function handleChange(e) {
    setErrors(null);

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

    const configObj = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    };

    fetch("/login", configObj).then((resp) => {
      if (resp.ok) {
        resp.json().then((user) => onLogin(user));
      } else {
        resp.json().then((err) => setErrors(err.errors));
      }
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
          <Typography sx={{ color: "orange", fontStyle: "italic" }}>
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
