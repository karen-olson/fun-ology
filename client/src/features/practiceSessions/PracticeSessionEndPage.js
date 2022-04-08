import { Container, Box, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

const PracticeSessionEndPage = ({ currentPracticeSession }) => {
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
        <br />
        <Typography
          component="h1"
          variant="h3"
          color="primary.dark"
          fontFamily="monospace"
        >
          Finished!
        </Typography>
        <br />
        <Typography
          component="h1"
          variant="h4"
          color="primary.dark"
          fontFamily="monospace"
        >
          Nice work.
        </Typography>
        {/* <Button as={Link} to="/login" variant="contained" sx={{ m: 2 }}> */}
        {/* Log In
        </Button> */}
      </Box>
    </Container>
  );
};

export default PracticeSessionEndPage;
