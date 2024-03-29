import { useState } from "react";
import Button from "@mui/material/Button";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  useGetTargetPhonemeQuery,
  useGetAlphabetizedStudentsQuery,
  useCreatePracticeSessionMutation,
} from "../../services/phonology";
import {
  MenuItem,
  Box,
  Grid,
  InputLabel,
  Select,
  TextField,
  Container,
  Typography,
} from "@mui/material";
import DateAdapter from "@mui/lab/AdapterDateFns";
import { LocalizationProvider, DesktopDatePicker } from "@mui/lab";
import { currentPracticeSessionAdded } from "./currentPracticeSessionSlice";

const defaultPracticeSession = {
  type: "TherapySession",
  date: new Date(),
  notes: "",
  score: "",
  average_difficulty_level: "",
  student_id: "",
  current: true,
};

const PracticeSessionStartPage = () => {
  const [practiceSessionData, setPracticeSessionData] = useState(
    defaultPracticeSession
  );

  console.log("practice session data in start page: ", practiceSessionData);

  const params = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const phonologicalProcessName = params.phonological_process_name;
  const phonemeId = parseInt(params.phoneme_id);

  const {
    data: students,
    isLoading: isStudentsLoading,
    isError: isStudentsError,
    error: studentsError,
  } = useGetAlphabetizedStudentsQuery();

  const {
    data: targetPhoneme,
    isLoading: isPhonemeLoading,
    isError: isPhonemeError,
    error: phonemeError,
  } = useGetTargetPhonemeQuery(phonemeId);

  const [
    createPracticeSession,
    {
      isError: isCreatePracticeSessionError,
      error: createPracticeSessionError,
    },
  ] = useCreatePracticeSessionMutation();

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
    let updatedPracticeSessionData;

    if (event === null) {
      updatedPracticeSessionData = {
        ...practiceSessionData,
        date: "",
      };
    } else if (event.target === undefined) {
      updatedPracticeSessionData = {
        ...practiceSessionData,
        date: event,
      };
    } else {
      updatedPracticeSessionData = {
        ...practiceSessionData,
        [event.target.name]: event.target.value,
      };
    }

    setPracticeSessionData(updatedPracticeSessionData);
  }

  function handleSubmit(event) {
    event.preventDefault();

    createPracticeSession(practiceSessionData)
      .unwrap()
      .then((currentPracticeSession) => {
        dispatch(currentPracticeSessionAdded(currentPracticeSession));
        // debugger;
      })
      .then(() =>
        navigate(
          `/${phonologicalProcessName}/phonemes/${phonemeId}/minimal_pairs/${minimalPairs[0].id}`
        )
      );
  }

  let createPracticeSessionErrorDisplay;

  if (isCreatePracticeSessionError) {
    createPracticeSessionErrorDisplay =
      createPracticeSessionError.data.errors.map(
        (createPracticeSessionError) => (
          <Typography key={createPracticeSessionError}>
            {createPracticeSessionError}
          </Typography>
        )
      );
  } else {
    createPracticeSessionErrorDisplay = null;
  }

  return (
    <Container component="main" maxWidth="sm">
      <Box
        component="form"
        noValidate
        onSubmit={handleSubmit}
        sx={{
          marginY: 4,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography
              component="h1"
              variant="h3"
              color="primary.dark"
              fontFamily="monospace"
              marginY="1em"
              align="center"
            >
              Let's get started!
            </Typography>
          </Grid>
          <Grid item xs={2} />
          <Grid item xs={8}>
            <InputLabel id="student_input_label">Choose a Student</InputLabel>
            <Select
              labelid="student_label"
              id="student_id"
              name="student_id"
              onChange={handleChange}
              value={practiceSessionData["student_id"]}
              fullWidth
            >
              {studentsOptions}
            </Select>
          </Grid>
          <Grid item xs={2} />
          <Grid item xs={2} />
          <Grid item xs={8}>
            <InputLabel id="date_input_label">Session Date</InputLabel>
            <LocalizationProvider dateAdapter={DateAdapter}>
              <DesktopDatePicker
                inputFormat="MM/dd/yyyy"
                name="date"
                value={practiceSessionData["date"]}
                onChange={handleChange}
                renderInput={(params) => <TextField {...params} />}
              />
            </LocalizationProvider>
          </Grid>
          <Grid item xs={2} />
          <Grid item xs={2} />
          <Grid
            item
            xs={8}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Button type="submit" variant="contained" fullWidth sx={{ mt: 2 }}>
              Start
            </Button>
          </Grid>
          <Grid item xs={2} />
          <Grid item xs={2} />
          <Grid item xs={8}>
            <Typography sx={{ color: "#d36d3a", fontStyle: "italic" }}>
              {createPracticeSessionErrorDisplay}
            </Typography>
          </Grid>
          <Grid item xs={2} />
        </Grid>
      </Box>
    </Container>
  );
};

export default PracticeSessionStartPage;
