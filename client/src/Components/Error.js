import { Typography } from "@mui/material";

const Error = ({ error }) => {
  return (
    <>
      <Typography variant="h2">Error</Typography>
      <Typography variant="h5">
        {error.status + ": " + error.data.errors}
      </Typography>
    </>
  );
};

export default Error;
