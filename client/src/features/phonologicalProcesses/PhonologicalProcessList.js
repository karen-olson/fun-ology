import PhonologicalProcessCard from "./PhonologicalProcessCard";
import Error from "../../components/Error";
import Loading from "../../components/Loading";
import { useGetPhonologicalProcessesQuery } from "../../services/phonology";
import { Container, Box } from "@mui/material";

const PhonologicalProcessList = () => {
  const {
    data: phonologicalProcesses,
    isLoading,
    isError,
    error,
  } = useGetPhonologicalProcessesQuery();

  console.log(phonologicalProcesses);

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
        <PhonologicalProcessCard
          phonologicalProcess={phonologicalProcess}
          key={phonologicalProcess.id}
        />
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
