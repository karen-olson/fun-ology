import { useState } from "react";
import { useParams } from "react-router-dom";
import { DataGrid } from "@mui/x-data-grid";
import { IconButton, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { useGetStudentPracticeSessionsQuery } from "../../services/phonology";

const StudentDataTable = () => {
  const [selectionModel, setSelectionModel] = useState([]);

  const params = useParams();

  const {
    data: studentPracticeSessions,
    isLoading: isGetStudentPracticeSessionsLoading,
    isError: isGetStudentPracticeSessionsError,
    error: getStudentPracticeSessionsError,
  } = useGetStudentPracticeSessionsQuery(params.id);
  // what to put in here?

  console.log({ studentPracticeSessions });
  // fetch all practice sessions for a given student
  //    fetch the student using params
  //    fetch all practice sessions for that student using the id 'student/:student_id/practice_sessions' ??
  //    how to do that restfully?

  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "date", headerName: "Date", width: 130 },
    { field: "type", headerName: "Type", width: 130 },
    { field: "score", headerName: "Score", type: "number", width: 90 },
    {
      field: "difficulty",
      headerName: "Difficulty",
      width: 130,
    },
    {
      field: "notes",
      headerName: "Notes",
      sortable: false,
      width: 200,
    },
  ];

  const rows = studentPracticeSessions.map((practiceSession) => {
    return {
      id: practiceSession.id,
      date: practiceSession.date,
      type: practiceSession.type,
      score: practiceSession.score,
      difficulty: practiceSession.average_difficulty_level_descriptor,
      notes: practiceSession.notes,
    };
  });

  function handleDeletePracticeSessionClick() {
    if (selectionModel.length === 0) {
      return;
    } else {
      debugger;
      // iterate through array and make a delete request for each id in the array
    }
  }

  return (
    <div style={{ height: 400, width: "100%" }}>
      <IconButton onClick={handleDeletePracticeSessionClick}>
        <DeleteIcon />
        <Typography>Delete Selected Practice Session(s)</Typography>
      </IconButton>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        onSelectionModelChange={(newSelectionModel) => {
          setSelectionModel(newSelectionModel);
        }}
        selectionModel={selectionModel}
      />
    </div>
  );
};

export default StudentDataTable;
