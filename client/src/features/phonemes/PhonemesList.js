import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useGetPhonologicalProcessesQuery } from "../../services/phonology";
import { Container, Box } from "@mui/material";
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
      <PhonemeCard
        key={phoneme.id}
        phonologicalProcessName={phonologicalProcessName}
        phoneme={phoneme}
      />
    ));

    content = phonemeCards;
  }

  return (
    <Container>
      <Box>{content}</Box>
    </Container>
  );
};

export default PhonemesList;
