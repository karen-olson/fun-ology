import { Typography, Container, Box, IconButton } from "@mui/material";
import StudentDataTable from "./StudentDataTable";
import { useGetStudentQuery } from "../../services/phonology";
import { useParams, useNavigate } from "react-router-dom";
import Loading from "../../components/Loading";
import Error from "../../components/Error";
import EditIcon from "@mui/icons-material/Edit";

const StudentDataPage = () => {
  const params = useParams();
  const navigate = useNavigate();

  const {
    data: student,
    isLoading,
    isError,
    error,
  } = useGetStudentQuery(params.id);

  function handleEditStudentClick(e) {
    navigate(`/students/${student.id}/edit`);
  }

  let content;

  if (isLoading) {
    content = () => {
      return <Loading />;
    };
  } else if (isError) {
    content = <Error error={error} />;
    // fix this error message
  } else {
    content = (
      <>
        <Typography
          variant="h4"
          align="center"
          fontFamily="monospace"
          color="primary.dark"
          sx={{ mb: 3 }}
        >
          {student.full_name}
          <IconButton onClick={handleEditStudentClick}>
            <EditIcon />
          </IconButton>
        </Typography>
        <StudentDataTable />
      </>
    );
  }

  return (
    <Container>
      <Box>{content}</Box>
    </Container>
  );
};

export default StudentDataPage;
