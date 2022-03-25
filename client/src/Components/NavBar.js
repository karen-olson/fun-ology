import { NavLink } from "react-router-dom";
import { Box, Tabs, Tab, Button } from "@mui/material";
import FunologyLogoLarge from "../FunologyLogoLarge.png";
import { useNavigate } from "react-router-dom";

const NavBar = ({ setCurrentUser }) => {
  const navigate = useNavigate();

  function handleLogoutClick(e) {
    fetch("/logout", { method: "DELETE" }).then((resp) => {
      if (resp.ok) {
        setCurrentUser(null);
        navigate("/");
      } else {
        setCurrentUser(null);
      }
    });
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
          to="/"
          sx={{ mr: "0vw" }}
        />
        <Tab component={NavLink} label="Explore" to="/" sx={{ mr: "2vw" }} />
        <Tab
          component={NavLink}
          label="Favorites"
          to="/videos/favorites"
          sx={{ mr: "2vw" }}
        />
        <Tab
          component={NavLink}
          label="My Uploads"
          to="/videos/my_uploads"
          sx={{ mr: "2vw" }}
        />
        <Tab
          component={NavLink}
          label="Add a Video"
          to="/videos/new"
          sx={{ mr: "2vw" }}
        />
        <Button
          onClick={handleLogoutClick}
          variant="contained"
          sx={{ mt: 1, mb: 2, pt: 0, pb: 0 }}
        >
          Log Out
        </Button>
      </Tabs>
    </Box>
  );
};

export default NavBar;
