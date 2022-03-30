import {
  Typography,
  Card,
  CardContent,
  CardMedia,
  CardActionArea,
} from "@mui/material";
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
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea onClick={handleClick}>
          <CardContent>
            <Typography>{phoneme.name}</Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    );
  }

  return <>{content}</>;
};

export default PhonemeCard;
