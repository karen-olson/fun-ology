import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Container,
  Box,
  Typography,
  Button,
  Grid,
  TextField,
} from "@mui/material";
import DonePageGraphic from "../../DonePageGraphic.png";
import DonePageGraphic2 from "../../DonePageGraphic2.png";
import {
  useGetCurrentPracticeSessionQuery,
  useUpdatePracticeSessionMutation,
} from "../../services/phonology";
import Loading from "../../components/Loading";

const PracticeSessionEndPage = () => {
  const [showNotes, setShowNotes] = useState(false);
  const [notes, setNotes] = useState("");
  const [difficultyDescriptor, setDifficultyDescriptor] = useState("");

  const {
    data: currentPracticeSession,
    isLoading: isCurrentPracticeSessionLoading,
    // isError: isCurrentPracticeSessionError,
    // error: currentPracticeSessionError,
  } = useGetCurrentPracticeSessionQuery();

  console.log({ currentPracticeSession });

  const [practiceSessionData, setPracticeSessionData] = useState({
    id: currentPracticeSession.id,
    type: currentPracticeSession.type,
    date: currentPracticeSession.date,
    notes: currentPracticeSession.notes,
    score: currentPracticeSession.score,
    average_difficulty_level: currentPracticeSession.average_difficulty_level,
    student_id: currentPracticeSession.student_id,
    current: currentPracticeSession.current,
  });

  const navigate = useNavigate();

  const [
    updatePracticeSession,
    // {
    //   isUpdatePracticeSessionError,
    //   updatePracticeSessionError
    // },
  ] = useUpdatePracticeSessionMutation();

  useEffect(() => {
    fetch(`/practice_sessions/${currentPracticeSession.id}/calculate_score`, {
      method: "PATCH",
      headers: {
        accept: "application/json",
      },
    }).then((resp) => {
      if (resp.ok) {
        resp.json().then((updatedPracticeSession) => {
          setDifficultyDescriptor(
            updatedPracticeSession.average_difficulty_level_descriptor
          );

          setPracticeSessionData((practiceSessionData) => ({
            ...practiceSessionData,
            score: updatedPracticeSession.score,
            average_difficulty_level:
              updatedPracticeSession.average_difficulty_level,
          }));
        });
      } else {
        console.error(resp);
      }
    });
  }, [currentPracticeSession]);

  console.log({ difficultyDescriptor });

  function handleShowNotesClick() {
    setShowNotes(!showNotes);
  }

  function handleChange(e) {
    setNotes(e.target.value);
  }

  function handleFinishSessionClick() {
    updatePracticeSession({
      ...practiceSessionData,
      notes: notes,
      current: false,
    });
    navigate("/phonological_processes");
  }

  let showNotesButton;

  if (showNotes === false) {
    showNotesButton = (
      <Button variant="contained" sx={{ mt: 2 }} onClick={handleShowNotesClick}>
        Add Notes
      </Button>
    );
  } else {
    showNotesButton = (
      <Button variant="contained" sx={{ mt: 2 }} onClick={handleShowNotesClick}>
        Hide Notes
      </Button>
    );
  }

  let notesForm;

  if (showNotes === true) {
    notesForm = (
      <>
        <Typography
          component="h1"
          variant="h4"
          color="primary.dark"
          fontFamily="monospace"
          align="center"
        >
          Notes
        </Typography>
        <Box component="form" noValidate sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                id="notes"
                name="notes"
                label="Notes"
                type="text"
                height="100px"
                value={notes}
                onChange={handleChange}
                fullWidth
                multiline
              />
            </Grid>
          </Grid>
        </Box>
      </>
    );
  } else {
    notesForm = null;
  }

  if (isCurrentPracticeSessionLoading) {
    return <Loading />;
  } else {
    return (
      <Container component="main" maxWidth="xl">
        <Box
          sx={{
            marginTop: 2,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <br />
          <Typography
            component="h1"
            variant="h3"
            color="primary.dark"
            fontFamily="monospace"
          >
            All Done
          </Typography>
          <Box
            sx={{
              paddingTop: 4,
              paddingBottom: 0,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <img
              height="200px"
              src={
                difficultyDescriptor === "hard" ||
                practiceSessionData.score <= 50
                  ? DonePageGraphic2
                  : DonePageGraphic
              }
              alt="Clipart of striped cat jumping and saying hooray."
              style={{
                borderWidth: "1px",
                borderColor: "black",
                borderStyle: "solid",
                borderRadius: "10px",
              }}
            />
          </Box>
          <br />
          <Typography component="h1" variant="h5" color="primary.dark">
            You got {practiceSessionData.score}% correct. These questions were{" "}
            {difficultyDescriptor} overall.
          </Typography>
          <br />
          <Typography
            component="h1"
            variant="h4"
            color="primary.dark"
            fontFamily="monospace"
          >
            {difficultyDescriptor === "hard" || practiceSessionData.score <= 50
              ? "Try a new strategy next time!"
              : "Keep working hard!"}
          </Typography>
          <Box m={2}>{showNotesButton}</Box>
          <Box m={2}>{notesForm}</Box>
          <Box>
            <Button variant="contained" onClick={handleFinishSessionClick}>
              Finish Session
            </Button>
          </Box>
        </Box>
      </Container>
    );
  }
};

export default PracticeSessionEndPage;
