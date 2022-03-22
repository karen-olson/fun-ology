import { Container, Box, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import FunologyHeader from "../Components/FunologyHeader";

const SignUpConfirmation = () => {
  return (
    <Container component="main" maxWidth="s">
      <Box
        sx={{
          marginTop: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <FunologyHeader />
        <br />
        <Typography
          component="h1"
          variant="h3"
          color="primary.dark"
          fontFamily="monospace"
        >
          Success!
        </Typography>
        <br />
        <Typography
          component="h1"
          variant="h4"
          color="primary.dark"
          fontFamily="monospace"
        >
          Your account has been created.
        </Typography>
        <Button as={Link} to="/login" variant="contained" sx={{ m: 2 }}>
          Log In
        </Button>
      </Box>
    </Container>
  );
};

export default SignUpConfirmation;
