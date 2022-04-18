import { useState } from "react";
import {
  Container,
  Box,
  Typography,
  Button,
  Grid,
  TextField,
} from "@mui/material";
import { Link } from "react-router-dom";
import DonePageGraphic from "../../DonePageGraphic.png";

const PracticeSessionEndPage = () => {
  const [showNotes, setShowNotes] = useState(false);
  const [notes, setNotes] = useState("");

  function handleShowNotesClick() {
    setShowNotes(!showNotes);
  }

  function handleChange(e) {
    setNotes(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    // set notes on PracticeSession

    console.log(e);
  }

  // fetch practice session object to get score & difficulty level

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
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
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
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 2, mb: 2 }}
          >
            Submit
          </Button>
        </Box>
      </>
    );
  } else {
    notesForm = null;
  }

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
            src={DonePageGraphic}
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
          {/* Add percentage */}
          You got ___% correct. These questions were ______ overall.
        </Typography>
        <br />
        <Typography
          component="h1"
          variant="h4"
          color="primary.dark"
          fontFamily="monospace"
        >
          Keep working hard!
        </Typography>
        <Box m={2}>{showNotesButton}</Box>
        <Box m={2}>{notesForm}</Box>
      </Box>
    </Container>
  );
};

export default PracticeSessionEndPage;
