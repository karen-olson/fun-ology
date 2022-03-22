import { Link, NavLink } from "react-router-dom";
import FunologyLogoLarge from "../FunologyLogoLarge.png";
import { Container, Box, Typography, Button } from "@mui/material";

const Home = () => {
  return (
    <>
      <Box sx={{ marginTop: 2, display: "flex" }}>
        <Button as={Link} to="/login" variant="contained" sx={{ m: 2 }}>
          Log In
        </Button>
        <Button as={Link} to="signup" variant="contained" sx={{ m: 2 }}>
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
            Some info about this app
          </Typography>
        </Box>
      </Container>
    </>
  );
};

export default Home;
