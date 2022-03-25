import { Link } from "react-router-dom";
import FunologyLogoLarge from "../FunologyLogoLarge.png";
import { Container, Box, Typography, Button } from "@mui/material";

const Home = () => {
  return (
    <>
      <Box sx={{ marginTop: 2, display: "flex", gap: "1em" }}>
        <Button
          as={Link}
          to="/login"
          variant="contained"
          sx={{ marginLeft: "auto" }}
        >
          Log In
        </Button>
        <Button as={Link} to="signup" variant="contained">
          Sign Up
        </Button>
      </Box>
      <br />
      <Container component="main" maxWidth="s">
        <Box
          sx={{
            marginTop: 2,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <img
            src={FunologyLogoLarge}
            alt="Funology logo - 3 colored blocks and subtitle 'Keeping Speech Therapy Fun"
          />
          <Typography
            variant="body1"
            fontFamily="monospace"
            color="primary.dark"
          >
            Fun-ology is a speech-language app for phonology practice. It's
            available on any device with an internet connection, and it's
            totally free!
          </Typography>
          <Typography
            variant="body1"
            fontFamily="monospace"
            color="primary.dark"
          >
            <p>Parents and Students:</p>
            <p>Play with Fun-ology at home to practice your speech skills!</p>
            <p>Speech Therapists:</p>
            <p>
              Sign up for a free account to access dozens of minimal pairs for a
              variety of phonological processes. You can even assign home
              practice materials which students can access through the website
              at home. Use integrated data tracking for a painless way to
              measure students' progress.
            </p>
          </Typography>
        </Box>
      </Container>
    </>
  );
};

export default Home;
