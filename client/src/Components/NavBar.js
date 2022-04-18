import { NavLink } from "react-router-dom";
import { Box, Tabs, Tab, Button } from "@mui/material";
import FunologyLogoLarge from "../FunologyLogoLarge.png";
import { useNavigate } from "react-router-dom";
import { usePostLogoutMutation } from "../services/phonology";

const NavBar = () => {
  const navigate = useNavigate();

  const [postLogout, { isLoading, isFetching, isError, error }] =
    usePostLogoutMutation();

  function handleLogoutClick(e) {
    postLogout();
    navigate("/");
  }

  return (
    <Box sx={{ width: "100%", mb: 4, pt: 2 }}>
      <Tabs value={false}>
        <Tab
          icon={
            <img
              src={FunologyLogoLarge}
              style={{ height: "45px" }}
              alt="Funology Logo - red green and blue blocks with shapes on them over the words Funology and Making Speech Therapy Fun"
            />
          }
          component={NavLink}
          to="/phonological_processes"
          sx={{ mr: "0vw" }}
        />
        <Tab
          component={NavLink}
          label="Card Decks"
          to="/phonological_processes"
          sx={{ mr: "2vw" }}
        />
        <Tab
          component={NavLink}
          label="Students"
          to="/students"
          sx={{ mr: "2vw" }}
        />
        <Button
          onClick={handleLogoutClick}
          variant="contained"
          sx={{ marginLeft: "auto", mr: "1em", mt: 1, mb: 2 }}
        >
          Log Out
        </Button>
      </Tabs>
    </Box>
  );
};

export default NavBar;
