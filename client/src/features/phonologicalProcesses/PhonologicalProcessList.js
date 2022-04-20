import PhonologicalProcessCard from "./PhonologicalProcessCard";
import Error from "../../components/Error";
import Loading from "../../components/Loading";
import { useGetPhonologicalProcessesQuery } from "../../services/phonology";
import { Container, Box, Typography, Grid } from "@mui/material";

const PhonologicalProcessList = () => {
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
    const phonologicalProcessCards = phonologicalProcesses.map(
      (phonologicalProcess) => (
        <Grid item xs={4} key={phonologicalProcess.id}>
          <PhonologicalProcessCard phonologicalProcess={phonologicalProcess} />
        </Grid>
      )
    );

    content = (
      <Grid container columns={1} rowSpacing={4}>
        {phonologicalProcessCards}
      </Grid>
    );
  }

  return (
    <Container component="main" maxWidth="xs">
      <Box>
        <Typography
          mb={3}
          color="primary.dark"
          fontSize="x-large"
          fontFamily="monospace"
          align="center"
        >
          Choose a Deck to Practice
        </Typography>
        {content}
      </Box>
    </Container>
  );
};

export default PhonologicalProcessList;
