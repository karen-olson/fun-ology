// import { createMuiTheme } from "@material-ui/core/styles";
import { createTheme } from "@mui/material/styles";

    // secondary: {
    //   main: "#F7A278",
    //   light: "#f3cab5",
    //   dark: "#d36d3a",
    // },

// Create a theme instance.
export const theme = createTheme({
  palette: {
    primary: {
      main: "#6DD3CE",
      light: "#bdfdfa",
      dark: "#00948E",
      contrastText: "#ffffff"
    },
    secondary: {
      main: "#83bb40",
      light: "#e3f1d2",
      dark: "#68a123",
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
    MuiTypography: {
      defaultProps: {
        fontFamily: "monospace",
        color: "red"
      }
    },
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