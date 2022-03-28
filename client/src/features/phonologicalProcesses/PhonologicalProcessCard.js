import {
  Typography,
  Card,
  CardContent,
  CardMedia,
  CardActionArea,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const PhonologicalProcessCard = ({ phonologicalProcess }) => {
  const navigate = useNavigate();

  function handleClick(e) {
    console.log(`${phonologicalProcess.name} clicked`);
    navigate(`/${phonologicalProcess.name}/phonemes`);
  }

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea onClick={handleClick}>
        <CardContent>
          <Typography>{phonologicalProcess.name}</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default PhonologicalProcessCard;
