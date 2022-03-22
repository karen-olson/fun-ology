// import { createMuiTheme } from "@material-ui/core/styles";
import { createTheme } from "@mui/material/styles";


// Create a theme instance.
export const theme = createTheme({
  palette: {
    primary: {
      main: "#56baf3",
      light: "#bce6ff",
      dark: "#18618b",
      contrastText: "#ffffff"
    },
    secondary: {
      main: "#9be2ab",
      light: "#e1f7e6",
      dark: "#27853d",
    },
    text: {
      primary: "#000000",
      secondary: "#695151"
    },
    background: {
      paper: "#ffffff",
      default: "#bce6ff"
    }
  },
  components: {
    // Name of the component ⚛️
    MuiButtonBase: {
      defaultProps: {
        // The default props to change
        disableRipple: true,
      },
    },
    MuiInputLabel: {
      defaultProps: {
        color: "secondary"
      }
    },
    MuiLink: {
      defaultProps: {
        color: "primary.light"
      }
    },
    MuiTextField: {
      defaultProps: {
        color: "primary"
      }
    }
  }
})