import { Box } from "@mui/material";
import FunologyLogoLarge from "../FunologyLogoLarge.png";

const FunologyHeader = () => {
  return (
    <Box
      sx={{
        paddingTop: 4,
        paddingBottom: 0,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <img
        src={FunologyLogoLarge}
        alt="Funology Logo - red, green, and blue stacked blocks with shapes in them."
      />
    </Box>
  );
};

export default FunologyHeader;
