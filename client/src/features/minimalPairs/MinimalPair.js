import { Container, Box, Grid, Typography } from "@mui/material";

const MinimalPair = ({ minimalPair }) => {
  return (
    <Container component="main" maxWidth="md" sx={{ m: "1em" }}>
      <Box
        sx={{
          borderStyle: "solid",
          borderRadius: "10px",
          borderColor: "#00948E",
          borderWidth: "2px",
          boxShadow: "0px 4px 3px gray",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          backgroundColor: "#bdfdfa",
        }}
      >
        <Grid
          container
          spacing={2}
          sx={{
            width: "auto",
            height: "auto",
            m: "1em",
            p: "1em",
          }}
        >
          <Grid
            item
            xs={5}
            display="flex"
            flexDirection="column"
            alignItems="center"
          >
            <img
              src={`${minimalPair.first_image_url}?w=164&h=164&fit=crop&auto=format`}
              srcSet={`${minimalPair.first_image_url}?w=164&h=164&fit=crop&auto=format&dpr=2 3x`}
              alt={minimalPair.first_word}
              loading="lazy"
            />
          </Grid>
          <Grid item xs={2} />
          <Grid
            item
            xs={5}
            display="flex"
            flexDirection="column"
            alignItems="center"
          >
            <img
              src={`${minimalPair.second_image_url}?w=164&h=164&fit=crop&auto=format`}
              srcSet={`${minimalPair.second_image_url}?w=164&h=164&fit=crop&auto=format&dpr=2 3x`}
              alt={minimalPair.second_word}
              loading="lazy"
            />
          </Grid>
          <Grid
            item
            xs={5}
            backgroundColor="white"
            borderWidth="2px"
            borderRadius="10px"
            borderColor="primary.dark"
            display="flex"
            flexDirection="column"
            alignItems="center"
            sx={{ boxShadow: "0px 2px 2px gray" }}
          >
            <Typography fontFamily="monospace" fontSize="large" pb="1em">
              {minimalPair.first_word}
            </Typography>
          </Grid>
          <Grid item xs={2} />
          <Grid
            item
            xs={5}
            backgroundColor="white"
            borderWidth="2px"
            borderRadius="10px"
            borderColor="primary.dark"
            display="flex"
            flexDirection="column"
            alignItems="center"
            sx={{ boxShadow: "0px 2px 2px gray" }}
          >
            <Typography fontFamily="monospace" fontSize="large" pb="1em">
              {minimalPair.second_word}
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default MinimalPair;
