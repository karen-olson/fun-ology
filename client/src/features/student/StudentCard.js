import { Typography, Card, CardContent, CardActionArea } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Loading from "../../components/Loading";

const StudentCard = ({ student }) => {
  const navigate = useNavigate();

  function handleClick() {
    navigate(`/students/${student.id}`);
  }

  console.log(student);

  let content;

  if (!student) {
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
              {student.full_name}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    );
  }

  return <>{content}</>;
};

export default StudentCard;
