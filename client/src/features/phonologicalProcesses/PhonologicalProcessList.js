import PhonologicalProcessCard from "./PhonologicalProcessCard";
import { useGetPhonologicalProcessesQuery } from "../../services/phonology";
import { Container, Box, Typography } from "@mui/material";

const PhonologicalProcessList = () => {
  const {
    data: phonologicalProcesses,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetPhonologicalProcessesQuery();

  let content;

  if (isLoading) {
    content = <h1>Loading</h1>;
  } else if (isError) {
    content = <h1>Something went wrong...</h1>;
    console.log(error);
  } else {
    const phonologicalProcessCards = phonologicalProcesses.map(
      (phonologicalProcess) => (
        <PhonologicalProcessCard phonologicalProcess={phonologicalProcess} />
      )
    );
    content = phonologicalProcessCards;
  }

  return (
    <Container>
      <Box>{content}</Box>
    </Container>
  );
};

export default PhonologicalProcessList;
