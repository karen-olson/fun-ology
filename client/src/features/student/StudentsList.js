import StudentCard from "./StudentCard";
import Error from "../../components/Error";
import Loading from "../../components/Loading";
import { useGetStudentsQuery } from "../../services/phonology";
import { Container, Box, Typography, Grid } from "@mui/material";

const StudentList = () => {
  const { data: students, isLoading, isError, error } = useGetStudentsQuery();

  let content;

  if (isLoading) {
    content = () => {
      return <Loading />;
    };
  } else if (isError) {
    content = <Error error={error} />;
  } else {
    const studentCards = students.map((student) => (
      <Grid item xs={4}>
        <StudentCard student={student} key={student.id} />
      </Grid>
    ));

    content = (
      <Grid container columns={1} rowSpacing={4}>
        {studentCards}
      </Grid>
    );
  }

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 4,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography
          mb={3}
          color="primary.dark"
          fontSize="x-large"
          fontFamily="monospace"
          align="center"
        >
          Select a Student
        </Typography>
        {content}
      </Box>
    </Container>
  );
};

export default StudentList;
