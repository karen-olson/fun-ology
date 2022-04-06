import { Link } from "react-router-dom";
// import FunologyLogoLarge from "../FunologyLogoLarge.png";
import FunologyLogoHomePage from "../FunologyLogoHomePage.png";
import { Container, Box, Typography, Button, Stack } from "@mui/material";

const Home = () => {
  return (
    <Container component="main" maxWidth="xl">
      <Stack
        direction="column"
        justifyContent="flex-start"
        alignItems="center"
        spacing={0}
      >
        <Box
          height="100vh"
          width="100vw"
          sx={{
            backgroundColor: "#f3cab5",
            backgroundPosition: "center",
            backgroundSize: "contain",
            backgroundImage: `url("https://i.imgur.com/pBKl6Fq.jpg")`,
            opacity: "0.4",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Box sx={{ mt: "5vh", ml: "4em", mr: "auto" }}>
            <img
              height="125px"
              borderRadius="20px"
              src={FunologyLogoHomePage}
              alt="Funology logo - 3 colored blocks and subtitle 'Keeping Speech Therapy Fun"
            />
          </Box>

          <Box
            sx={{
              marginTop: "1vh",
              width: "50vw",
              backgroundColor: "#E8E8E8",
              borderRadius: "2em",
            }}
          >
            <Typography
              align="center"
              fontFamily="sans-serif"
              fontSize="40px"
              mx="2em"
              my="0.5em"
            >
              Free phonological therapy software, for all devices.
            </Typography>
            <Typography align="center" mx="2em">
              Play with minimal pair card decks for each phonolgical process.
            </Typography>
            <Typography align="center" mx="2em">
              Use built-in data tracking features to make therapy fun for SLPs
              and students alike!
            </Typography>
            <Box
              sx={{
                marginY: "2em",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: "2em",
              }}
            >
              <Button
                as={Link}
                to="/login"
                variant="contained"
                sx={{ marginLeft: "auto", backgroundColor: "primary.dark" }}
                align="center"
              >
                Log In
              </Button>
              <Button
                as={Link}
                to="signup"
                variant="contained"
                sx={{
                  marginRight: "auto",
                  backgroundColor: "primary.dark",
                }}
                align="center"
              >
                Sign Up
              </Button>
            </Box>
          </Box>
        </Box>
        <Box backgroundColor="white" height="100vh" width="100vw">
          <p>2</p>
        </Box>
        <Box backgroundColor="whitesmoke" height="100vh" width="100vw">
          <p>3</p>
        </Box>
      </Stack>
    </Container>

    // <>
    //   <Container component="main" maxWidth="xs">
    //     <Box
    //       sx={{
    //         marginTop: 4,
    //         display: "flex",
    //         flexDirection: "column",
    //         alignItems: "center",
    //       }}
    //     >
    //       <img
    //         src={HomePageImage}
    //         alt="Background image of white paper with colored pencils pointing upward"
    //         // width={"100vw"}
    //         // height="auto"
    //       />
    //     </Box>
    //   </Container>
    //   <Box sx={{ marginTop: 2, display: "flex", gap: "1em" }}>
    //     <Button
    //       as={Link}
    //       to="/login"
    //       variant="contained"
    //       sx={{ marginLeft: "auto" }}
    //     >
    //       Log In
    //     </Button>
    //     <Button as={Link} to="signup" variant="contained">
    //       Sign Up
    //     </Button>
    //   </Box>
    //   <br />
    //   <Container component="main" maxWidth="s">
    //     <Box
    //       sx={{
    //         marginTop: 2,
    //         display: "flex",
    //         flexDirection: "column",
    //         alignItems: "center",
    //       }}
    //     >
    //       <img
    //         src={FunologyLogoLarge}
    //         alt="Funology logo - 3 colored blocks and subtitle 'Keeping Speech Therapy Fun"
    //       />
    //       <Typography
    //         variant="body1"
    //         fontFamily="monospace"
    //         color="primary.dark"
    //       >
    //         Fun-ology is a speech-language app for phonology practice. It's
    //         available on any device with an internet connection, and it's
    //         totally free!
    //       </Typography>
    //       <Typography
    //         variant="body1"
    //         fontFamily="monospace"
    //         color="primary.dark"
    //       >
    //         <p>Parents and Students:</p>
    //         <p>Play with Fun-ology at home to practice your speech skills!</p>
    //         <p>Speech Therapists:</p>
    //         <p>
    //           Sign up for a free account to access dozens of minimal pairs for a
    //           variety of phonological processes. You can even assign home
    //           practice materials which students can access through the website
    //           at home. Use integrated data tracking for a painless way to
    //           measure students' progress.
    //         </p>
    //       </Typography>
    //     </Box>
    //   </Container>
    // </>
  );
};

export default Home;
