import { createTheme } from "@mui/material";

export const useMaterialTheme = (darkModeEnabled: boolean) => {

    const darkTheme = createTheme({
      palette: {
        mode: 'dark',
        primary: {
          main: '#865DFF',
        },
        secondary: {
          main: '#E384FF',
        },
        error: {
          main: "#f00",
        },
        text: {
          primary: '#fffffe',
          secondary: '#999',
        },
        background: {
          default: '#191825',
          // paper: '#810CA8',
          paper: '#ffffff11',
        },
      },
      components: {
        MuiOutlinedInput: {
          styleOverrides: {
            input: {
              '&:-webkit-autofill': {
                '-webkit-box-shadow': '0 0 0 100px #000 inset',
                '-webkit-text-fill-color': '#fff',
              }
            }
          }
        }
      }
    });

    const lightTheme = createTheme({
        palette: {
          mode: 'light',
          primary: {
            main: '#7f5af0',
          },
          secondary: {
            main: '#ff0',
          },
          text: {
            primary: '#191825',
            secondary: '#888',
          },
          background: {
            default: '#fffffe',
            paper: '#fff',
          },
          error: {
            main: "#f00",
          },
        },
      });

    const theme = darkModeEnabled ? darkTheme : lightTheme

    return theme

}