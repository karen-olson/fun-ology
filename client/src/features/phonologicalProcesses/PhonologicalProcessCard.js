import {
  Typography,
  Card,
  CardContent,
  CardMedia,
  CardActionArea,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import Loading from "../../components/Loading";

const PhonologicalProcessCard = ({ phonologicalProcess }) => {
  const navigate = useNavigate();

  function handleClick(e) {
    navigate(`/${phonologicalProcess.name}/phonemes`);
  }

  let content;

  if (!phonologicalProcess) {
    content = <Loading />;
  } else {
    content = (
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea onClick={handleClick}>
          <CardContent>
            <Typography>{phonologicalProcess.name}</Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    );
  }

  return <>{content}</>;
};

export default PhonologicalProcessCard;
