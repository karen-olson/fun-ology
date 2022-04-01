import { useState } from "react";
import { useGetTargetPhonemeQuery } from "../../services/phonology";
import { useNavigate, useParams } from "react-router-dom";
import { Container, Box, Button, IconButton, Grid } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import ClearIcon from "@mui/icons-material/Clear";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import MinimalPair from "../minimalPairs/MinimalPair";
import Loading from "../../components/Loading";

const PracticeSessionPage = () => {
  const [minimalPairIndex, setMinimalPairIndex] = useState(0);
  const navigate = useNavigate();
  const params = useParams();

  const phonologicalProcessName = params.phonological_process_name;

  const {
    data: targetPhoneme,
    isLoading,
    isError,
    error,
  } = useGetTargetPhonemeQuery(parseInt(params.phoneme_id));

  let minimalPairs;

  if (isLoading) {
    minimalPairs = null;
  } else if (isError) {
    minimalPairs = null;
    console.error(error);
  } else {
    minimalPairs = targetPhoneme.minimal_pairs;
  }

  function handleScoreButtonClick(e) {
    console.log(e.target);
  }

  function handleDifficultyLevelClick(e) {
    console.log(e.target);
  }

  function handleNextClick() {
    if (minimalPairIndex < minimalPairs.length - 1) {
      setMinimalPairIndex((minimalPairIndex) => minimalPairIndex + 1);
    } else {
      console.log("done");
      setMinimalPairIndex(0);
      navigate(`/${phonologicalProcessName}/phonemes/${targetPhoneme.id}/done`);
    }
  }

  function handleBackClick(e) {
    console.log(e);
  }

  if (!minimalPairs) {
    return <Loading />;
  } else {
    return (
      <Container
        component="main"
        maxWidth="xl"
        sx={{ backgroundColor: "white" }}
      >
        <Box
          sx={{
            backgroundColor: "white",
            marginTop: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Grid container rowSpacing={1} columnSpacing={"1fr"}>
            <Grid item xs={1} sx={{ backgroundColor: "white" }} />
            <Grid item xs={10}>
              <MinimalPair minimalPair={minimalPairs[minimalPairIndex]} />
            </Grid>
            <Grid item xs={1} sx={{ backgroundColor: "white" }}>
              <IconButton
                onClick={handleScoreButtonClick}
                variant="contained"
                sx={{
                  color: "secondary.dark",
                  backgroundColor: "secondary.light",
                  mt: "2em",
                }}
              >
                <CheckIcon fontSize="large" />
              </IconButton>
              <IconButton
                onClick={handleScoreButtonClick}
                sx={{
                  color: "#d36d3a",
                  backgroundColor: "secondary.light",
                  mt: "1em",
                }}
              >
                <ClearIcon fontSize="large" />
              </IconButton>
              <Button
                variant="contained"
                onClick={handleDifficultyLevelClick}
                sx={{
                  width: "6em",
                  backgroundColor: "secondary.light",
                  color: "black",
                  fontSize: "x-small",
                  mt: "4em",
                }}
              >
                Easy
              </Button>
              <Button
                variant="contained"
                onClick={handleDifficultyLevelClick}
                sx={{
                  width: "6em",
                  backgroundColor: "secondary.light",
                  color: "black",
                  fontSize: "x-small",
                  mt: "1em",
                }}
              >
                Medium
              </Button>
              <Button
                variant="contained"
                onClick={handleDifficultyLevelClick}
                sx={{
                  width: "6em",
                  backgroundColor: "secondary.light",
                  color: "black",
                  fontSize: "x-small",
                  mt: "1em",
                }}
              >
                Hard
              </Button>
            </Grid>
            {/* <Grid item xs={1} backgroundColor="purple" /> */}
            <Grid
              item
              xs={1}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-end",
                backgroundColor: "white",
              }}
            >
              <IconButton
                onClick={handleBackClick}
                sx={{ color: "primary.dark" }}
              >
                <ArrowCircleLeftIcon fontSize="large" />
              </IconButton>
            </Grid>
            <Grid item xs={10} backgroundColor="white" />
            <Grid item xs={1}>
              <IconButton
                onClick={handleNextClick}
                sx={{ color: "primary.dark" }}
              >
                <ArrowCircleRightIcon fontSize="large" />
              </IconButton>
            </Grid>
            {/* <Grid item xs={1} backgroundColor="purple" /> */}
          </Grid>
        </Box>
      </Container>
    );
  }
};

export default PracticeSessionPage;