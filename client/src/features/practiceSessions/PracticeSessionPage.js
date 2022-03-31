import { useState } from "react";
import { useGetTargetPhonemeQuery } from "../../services/phonology";
import { useNavigate, useParams } from "react-router-dom";
import { Container, Box, Typography, Button, Grid } from "@mui/material";
import MinimalPair from "../minimalPairs/MinimalPair";
import Loading from "../../components/Loading";

const PracticeSessionStartPage = () => {
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

  if (!minimalPairs) {
    return <Loading />;
  } else {
    return (
      <Container
        component="main"
        maxWidth="xl"
        sx={{ backgroundColor: "yellow" }}
      >
        <Box
          sx={{
            backgroundColor: "pink",
            marginTop: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div>PracticeSessionStartPage</div>
          <Grid container rowSpacing={1} columnSpacing={"1fr"}>
            <Grid item xs={1} sx={{ backgroundColor: "white" }}>
              <p>hello</p>
            </Grid>
            <Grid item xs={10}>
              <MinimalPair minimalPair={minimalPairs[minimalPairIndex]} />
            </Grid>
            <Grid item xs={1} sx={{ backgroundColor: "white" }}>
              <Button
                variant="contained"
                onClick={handleScoreButtonClick}
                sx={{ backgroundColor: "secondary.dark", mt: "2em" }}
              >
                {/* HTML checkmark symbol */}
                &#x2714;
              </Button>
              <Button
                variant="contained"
                onClick={handleScoreButtonClick}
                sx={{ backgroundColor: "#d36d3a", mt: "1em" }}
              >
                {/* HTML X symbol */}
                &#x2715;
              </Button>
            </Grid>
            <Grid
              item
              xs={12}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                backgroundColor: "gray",
              }}
            >
              <Typography fontFamily="monospace">Difficulty Level</Typography>
            </Grid>
            <Grid item xs={4} backgroundColor="purple" />
            <Grid
              item
              xs={4}
              sx={{
                backgroundColor: "red",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Grid container py="1em" sx={{ backgroundColor: "orange" }}>
                <Grid
                  item
                  xs={4}
                  backgroundColor="white"
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <Button
                    variant="contained"
                    onClick={handleDifficultyLevelClick}
                    sx={{
                      width: "6em",
                      backgroundColor: "secondary.main",
                      color: "black",
                      fontFamily: "monospace",
                    }}
                  >
                    Easy
                  </Button>
                </Grid>
                <Grid
                  item
                  xs={4}
                  backgroundColor="yellow"
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <Button
                    variant="contained"
                    onClick={handleDifficultyLevelClick}
                    sx={{
                      width: "6em",
                      backgroundColor: "primary",
                      color: "black",
                      fontFamily: "monospace",
                    }}
                  >
                    Medium
                  </Button>
                </Grid>
                <Grid
                  item
                  xs={4}
                  backgroundColor="blue"
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <Button
                    variant="contained"
                    onClick={handleDifficultyLevelClick}
                    sx={{
                      width: "6em",
                      backgroundColor: "#F7A278",
                      color: "black",
                      fontFamily: "monospace",
                    }}
                  >
                    Hard
                  </Button>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={3} backgroundColor="green" />
            <Grid item xs={1} sx={{ mt: 1 }}>
              <Button
                variant="contained"
                onClick={handleNextClick}
                sx={{
                  backgroundColor: "primary.dark",
                  fontFamily: "monospace",
                }}
              >
                Next
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Container>
    );
  }
};

export default PracticeSessionStartPage;
