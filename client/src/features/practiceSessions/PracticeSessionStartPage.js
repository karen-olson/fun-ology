import { useGetTargetPhonemeQuery } from "../../services/phonology";
import { useParams } from "react-router-dom";

const PracticeSessionStartPage = () => {
  const params = useParams();

  const {
    data: targetPhoneme,
    isLoading,
    isError,
    error,
  } = useGetTargetPhonemeQuery(parseInt(params.phoneme_id));

  console.log("targetPhoneme: ", targetPhoneme);

  return <div>PracticeSessionStartPage</div>;
};

export default PracticeSessionStartPage;
