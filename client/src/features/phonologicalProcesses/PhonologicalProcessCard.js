import { Typography, Card, CardContent, CardActionArea } from "@mui/material";
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
      <Card sx={{ maxWidth: 345, backgroundColor: "primary.dark" }}>
        <CardActionArea onClick={handleClick}>
          <CardContent>
            <Typography
              color="white"
              fontSize="large"
              fontFamily="monospace"
              align="center"
            >
              {phonologicalProcess.name}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    );
  }

  return <>{content}</>;
};

export default PhonologicalProcessCard;
