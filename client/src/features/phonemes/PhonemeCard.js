import { Typography, Card, CardContent, CardActionArea } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Loading from "../../components/Loading";

const PhonemeCard = ({ phonologicalProcessName, phoneme }) => {
  const navigate = useNavigate();

  function handleClick(e) {
    console.log(`${phoneme.name} clicked`);
    navigate(`/${phonologicalProcessName}/phonemes/${phoneme.id}`);
  }

  let content;

  if (!phoneme) {
    content = <Loading />;
  } else {
    content = (
      <Card sx={{ maxWidth: 345, backgroundColor: "primary.dark" }}>
        <CardActionArea onClick={handleClick}>
          <CardContent>
            <Typography
              color="white"
              fontSize="large"
              fontFamily="monospace"
              align="center"
            >
              {phoneme.name}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    );
  }

  return <>{content}</>;
};

export default PhonemeCard;
