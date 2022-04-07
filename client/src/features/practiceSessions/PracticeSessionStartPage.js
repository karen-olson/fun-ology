import React, { useState } from "react";
import Button from "@mui/material/Button";
import { useParams, useNavigate } from "react-router-dom";
import {
  useGetTargetPhonemeQuery,
  useGetStudentsQuery,
} from "../../services/phonology";
import { MenuItem, Box, Grid, InputLabel, Select } from "@mui/material";

const PracticeSessionStartPage = () => {
  const [formData, setFormData] = useState({});
  const params = useParams();
  const navigate = useNavigate();

  const phonologicalProcessName = params.phonological_process_name;
  const phonemeId = parseInt(params.phoneme_id);

  const {
    data: students,
    isLoading: isStudentsLoading,
    isError: isStudentsError,
    error: studentsError,
  } = useGetStudentsQuery();

  const {
    data: targetPhoneme,
    isLoading: isPhonemeLoading,
    isError: isPhonemeError,
    error: phonemeError,
  } = useGetTargetPhonemeQuery(phonemeId);

  let studentsOptions;

  if (isStudentsLoading) {
    studentsOptions = null;
  } else if (isStudentsError) {
    studentsOptions = null;
    console.error(studentsError);
  } else {
    studentsOptions = students.map((student) => {
      return (
        <MenuItem name="student_id" value={student.id} key={student.id}>
          {student.full_name}
        </MenuItem>
      );
    });
  }

  let minimalPairs;

  if (isPhonemeLoading) {
    minimalPairs = null;
  } else if (isPhonemeError) {
    minimalPairs = null;
    console.error(phonemeError);
  } else {
    minimalPairs = targetPhoneme.minimal_pairs;
  }

  function handleChange(event) {
    console.log(event);
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
      <Box
        component="form"
        noValidate
        onSubmit={handleStartClick}
        sx={{ mt: 3 }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <InputLabel id="student_input_label">Choose a student</InputLabel>
            <Select
              labelid="student_label"
              id="student_id"
              name="student_id"
              onChange={handleChange}
              value={formData["student_id"]}
              fullWidth
            >
              {studentsOptions}
            </Select>
          </Grid>
        </Grid>
      </Box>
      {/* student select */}
      {/* date selector (defaults to today) */}
      <Button onClick={handleStartClick}>Start</Button>
    </>
  );
};

export default PracticeSessionStartPage;
