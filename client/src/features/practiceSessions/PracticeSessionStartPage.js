import React from "react";
import Button from "@mui/material/Button";
import { useParams, useNavigate } from "react-router-dom";
import { useGetTargetPhonemeQuery } from "../../services/phonology";

const PracticeSessionStartPage = () => {
  const params = useParams();
  const navigate = useNavigate();

  const phonologicalProcessName = params.phonological_process_name;
  const phonemeId = parseInt(params.phoneme_id);

  console.log({ params });
  console.log("phonemeId: ", phonemeId);

  const {
    data: targetPhoneme,
    isLoading,
    isError,
    error,
  } = useGetTargetPhonemeQuery(phonemeId);

  let minimalPairs;

  if (isLoading) {
    minimalPairs = null;
  } else if (isError) {
    minimalPairs = null;
    console.error(error);
  } else {
    minimalPairs = targetPhoneme.minimal_pairs;
  }

  function handleStartClick(e) {
    console.log(e);
    // create a practice session in the DB (and somehow pass the session number to PracticeSessionPage)
    // keep local state in app (or redux store?)
    navigate(
      `/${phonologicalProcessName}/phonemes/${phonemeId}/minimal_pairs/${minimalPairs[0].id}`
    );
  }
  return (
    <>
      <div>PracticeSessionStartPage</div>
      <Button onClick={handleStartClick}>Start</Button>
    </>
  );
};

export default PracticeSessionStartPage;
