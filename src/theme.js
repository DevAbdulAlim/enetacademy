import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  components: {
    MuiCard: {
      defaultProps: {
        sx: {
          boxShadow: "rgba(0, 0, 0, 0.05) 0px 1px 2px 0px",
          borderRadius: "15px",
        },
      },
    },
    MuiButton: {
      defaultProps: {
        sx: {
          boxShadow: "rgba(0, 0, 0, 0.05) 0px 1px 2px 0px",
          borderRadius: "50px",
        },
      },
    },
  },
});
