import { Container, Box, Grid, Typography } from "@mui/material";

const MinimalPair = ({ minimalPair }) => {
  return (
    <Container
      component="main"
      maxWidth="md"
      sx={{ backgroundColor: "orange", m: "1em" }}
    >
      <Box
        sx={{
          backgroundColor: "purple",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Grid
          container
          spacing={2}
          sx={{
            width: "auto",
            height: "auto",
            backgroundColor: "white",
            m: "1em",
            p: "1em",
          }}
        >
          <Grid
            item
            xs={5}
            // backgroundColor="red"
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
            // backgroundColor="green"
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
            backgroundColor="primary.light"
            border={1}
            borderColor="primary.dark"
            display="flex"
            flexDirection="column"
            alignItems="center"
          >
            <Typography fontFamily="monospace" fontSize="large" pb="1em">
              {minimalPair.first_word}
            </Typography>
          </Grid>
          <Grid item xs={2} />
          <Grid
            item
            xs={5}
            backgroundColor="primary.light"
            border={1}
            borderColor="primary.dark"
            display="flex"
            flexDirection="column"
            alignItems="center"
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
