import FunologyHeader from "../../components/FunologyHeader";
import { Button, Typography, Container, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

const SignUpPage = () => {
  const navigate = useNavigate();

  function handleRoleClick(e) {
    navigate(`/signup/${e.target.name}`);
  }

  return (
    <Container component="main" maxWidth="xs">
      <FunologyHeader />
      <Box
        sx={{
          marginTop: 2,
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
        <Typography
          fontFamily="monospace"
          fontSize="x-large"
          color="primary.dark"
          sx={{ mt: 4 }}
        >
          I am a...
        </Typography>
        <Button
          variant="contained"
          name="speech-therapist"
          onClick={handleRoleClick}
          sx={{ margin: 2, backgroundColor: "secondary.main" }}
        >
          Speech Therapist
        </Button>
        <Button
          variant="contained"
          name="student"
          onClick={handleRoleClick}
          sx={{ backgroundColor: "secondary.main" }}
        >
          Student
        </Button>
      </Box>
    </Container>
  );
};

export default SignUpPage;
