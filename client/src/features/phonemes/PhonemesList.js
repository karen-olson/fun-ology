import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useGetPhonologicalProcessesQuery } from "../../services/phonology";
import { Container, Box, Typography, Grid } from "@mui/material";
import PhonemeCard from "./PhonemeCard";
import Loading from "../../components/Loading";
import Error from "../../components/Error";

const PhonemesList = () => {
  const params = useParams();

  const phonologicalProcessName = params.phonological_process_name;

  const {
    data: phonologicalProcesses,
    isLoading,
    isError,
    error,
  } = useGetPhonologicalProcessesQuery();

  let content;

  if (isLoading) {
    content = () => {
      return <Loading />;
    };
  } else if (isError) {
    content = <Error error={error} />;
  } else {
    const phonemes = phonologicalProcesses.find(
      (phonologicalProcess) =>
        phonologicalProcess.name === phonologicalProcessName
    ).target_phonemes;

    const phonemeCards = phonemes.map((phoneme) => (
      <Grid item xs={4}>
        <PhonemeCard
          key={phoneme.id}
          phonologicalProcessName={phonologicalProcessName}
          phoneme={phoneme}
        />
      </Grid>
    ));

    content = (
      <Grid container columns={1} rowSpacing={4}>
        {phonemeCards}
      </Grid>
    );
  }

  return (
    <Container component="main" maxWidth="xs">
      <Box>
        <Typography
          mb={3}
          color="primary.dark"
          fontSize="x-large"
          fontFamily="monospace"
          align="center"
        >
          Choose a Sound
        </Typography>
        {content}
      </Box>
    </Container>
  );
};

export default PhonemesList;
