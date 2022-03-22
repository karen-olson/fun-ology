import FunologyHeader from "../Components/FunologyHeader";
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
        <Typography>I am a...</Typography>
        <Button
          variant="contained"
          name="speech-therapist"
          onClick={handleRoleClick}
          sx={{ margin: 2 }}
        >
          Speech Therapist
        </Button>
        <Button variant="contained" name="student" onClick={handleRoleClick}>
          Student{" "}
        </Button>
      </Box>
    </Container>
  );
};

export default SignUpPage;
