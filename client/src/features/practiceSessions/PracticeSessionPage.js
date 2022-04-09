import { useState, useEffect } from "react";
import {
  useGetTargetPhonemeQuery,
  useCreatePracticeSessionMinimalPairMutation,
  useGetCurrentPracticeSessionQuery,
} from "../../services/phonology";
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
  const [practiceSessionMinimalPairData, setPracticeSessionMinimalPairData] =
    useState({});
  const navigate = useNavigate();
  const params = useParams();
  const phonologicalProcessName = params.phonological_process_name;

  const {
    data: currentPracticeSession,
    isLoading: isGetCurrentPracticeSessionLoading,
    isError: isGetCurrentPracticeSessionError,
    error: getCurrentPracticeSessionError,
  } = useGetCurrentPracticeSessionQuery();

  let defaultPracticeSessionMinimalPairData;

  useEffect(() => {
    if (isGetCurrentPracticeSessionLoading) {
      <Loading />;
    } else if (isGetCurrentPracticeSessionError) {
      console.error(getCurrentPracticeSessionError);
      // work on error display
    } else {
      defaultPracticeSessionMinimalPairData = {
        practice_session_id: currentPracticeSession.id,
        minimal_pair_id: parseInt(params.minimal_pair_id),
        correct: null,
        difficulty_level: null,
      };
      setPracticeSessionMinimalPairData(defaultPracticeSessionMinimalPairData);
    }
  }, [currentPracticeSession, params.minimal_pair_id]);

  const {
    data: targetPhoneme,
    isLoading: isPhonemeLoading,
    isError: isPhonemeError,
    error: phonemeError,
  } = useGetTargetPhonemeQuery(parseInt(params.phoneme_id));

  const [
    createPracticeSessionMinimalPair,
    {
      isError: isCreatePracticeSessionMinimalPairError,
      error: createPracticeSessionMinimalPairError,
    },
  ] = useCreatePracticeSessionMinimalPairMutation();

  let minimalPairs;

  if (isPhonemeLoading) {
    minimalPairs = null;
  } else if (isPhonemeError) {
    minimalPairs = null;
    console.error(phonemeError);
  } else {
    minimalPairs = targetPhoneme.minimal_pairs;
  }

  function handleScoreButtonClick(e) {
    if (e.currentTarget.name === "correct") {
      setPracticeSessionMinimalPairData({
        ...practiceSessionMinimalPairData,
        correct: true,
      });
    } else {
      setPracticeSessionMinimalPairData({
        ...practiceSessionMinimalPairData,
        correct: false,
      });
    }
  }

  function handleDifficultyLevelClick(e) {
    const key = {
      easy: 1,
      medium: 2,
      hard: 3,
    };

    setPracticeSessionMinimalPairData({
      ...practiceSessionMinimalPairData,
      difficulty_level: key[e.currentTarget.name],
    });
  }

  function handleNextClick() {
    createPracticeSessionMinimalPair(practiceSessionMinimalPairData)
      .unwrap()
      .then(() => {
        if (minimalPairIndex < minimalPairs.length - 1) {
          navigate(
            `/${phonologicalProcessName}/phonemes/${
              params.phoneme_id
            }/minimal_pairs/${minimalPairs[minimalPairIndex + 1].id}`
          );
          setMinimalPairIndex((minimalPairIndex) => minimalPairIndex + 1);
        } else {
          console.log("done");
          navigate(
            `/${phonologicalProcessName}/phonemes/${targetPhoneme.id}/done`
          );
        }
      });
    setPracticeSessionMinimalPairData(defaultPracticeSessionMinimalPairData);
  }

  // function handleBackClick() {
  //   if (minimalPairIndex > 0) {
  //     setMinimalPairIndex((minimalPairIndex) => minimalPairIndex - 1);
  //   } else {
  //     setMinimalPairIndex(0);
  //   }
  //   navigate(-1);
  // }

  // Handle case where the user presses the browser's "back" button from the "done" page.
  // Need to set the minimal pair index to the last minimal pair instead of the first.
  // if (
  //   minimalPairs &&
  //   minimalPairIndex === 0 &&
  //   parseInt(params.minimal_pair_id) === minimalPairs[2].id
  // ) {
  //   setMinimalPairIndex(minimalPairs.length - 1);
  // }

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
              <Button
                component="button"
                onClick={handleScoreButtonClick}
                aria-label="correct"
                name="correct"
                id="correct"
                variant="contained"
                sx={{
                  color: "secondary.dark",
                  backgroundColor: "secondary.light",
                  mt: "2em",
                }}
              >
                <CheckIcon fontSize="large" />
              </Button>
              <Button
                onClick={handleScoreButtonClick}
                aria-label="incorrect"
                name="incorrect"
                id="incorrect"
                variant="contained"
                sx={{
                  color: "#d36d3a",
                  backgroundColor: "secondary.light",
                  mt: "1em",
                }}
              >
                <ClearIcon fontSize="large" />
              </Button>
              <Button
                name="easy"
                id="easy"
                onClick={handleDifficultyLevelClick}
                variant="contained"
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
                name="medium"
                id="medium"
                onClick={handleDifficultyLevelClick}
                variant="contained"
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
                name="hard"
                id="hard"
                onClick={handleDifficultyLevelClick}
                variant="contained"
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
            {/* <Grid
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
            </Grid> */}
            {/* <Grid item xs={10} backgroundColor="white" /> */}
            <Grid item xs={11} backgroundColor="white" />
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
