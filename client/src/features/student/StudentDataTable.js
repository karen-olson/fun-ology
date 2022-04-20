import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { DataGrid } from "@mui/x-data-grid";
import { IconButton, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDeletePracticeSessionsMutation } from "../../services/phonology";
// import { useGetPracticeSessionsForStudentQuery } from "../../services/phonology";

const StudentDataTable = () => {
  const [selectionModel, setSelectionModel] = useState([]);
  const [practiceSessionsForStudent, setPracticeSessionsForStudent] = useState(
    []
  );

  const params = useParams();

  useEffect(() => {
    fetch(`http://localhost:3000/practice_sessions/students/${params.id}`).then(
      (resp) => {
        if (resp.ok) {
          resp
            .json()
            .then((practiceSessions) =>
              setPracticeSessionsForStudent(practiceSessions)
            );
        } else {
          console.error(resp);
        }
      }
    );
  }, [selectionModel]);

  // const {
  //   data: practiceSessionsForStudent,
  //   isLoading: isGetPracticeSessionsForStudentLoading,
  //   isError: isGetPracticeSessionsForStudentError,
  //   error: getPracticeSessionsForStudentError,
  // } = useGetPracticeSessionsForStudentQuery(params.id);

  // console.log({ isGetPracticeSessionsForStudentLoading });
  // console.log({ isGetPracticeSessionsForStudentError });
  // console.log({ params });

  const [
    deletePracticeSessions,
    {
      isError: isDeletePracticeSessionsError,
      error: deletePracticeSessionsError,
    },
  ] = useDeletePracticeSessionsMutation();

  console.log({ practiceSessionsForStudent });
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

  const rows = practiceSessionsForStudent.map((practiceSession) => {
    return {
      id: practiceSession.id,
      date: practiceSession.date,
      // format this
      type: practiceSession.type,
      score: practiceSession.score,
      difficulty: practiceSession.average_difficulty_level_descriptor,
      notes: practiceSession.notes,
      // add phonological process & target phoneme
    };
  });

  function handleDeletePracticeSessionClick() {
    if (selectionModel.length === 0) {
      return;
    } else {
      deletePracticeSessions(selectionModel);
      // make sure it's only deleting the associated records I want it to
      setSelectionModel([]);
      // make it re-render without a refresh
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
