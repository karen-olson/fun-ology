import { Box, Typography } from "@mui/material";

const FunologyHeader = () => {
  return (
    <Box
      sx={{
        paddingTop: 4,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography fontFamily="monospace" fontSize="70px" color="primary.main">
        Fun-ology
      </Typography>
    </Box>
  );
};

export default FunologyHeader;
