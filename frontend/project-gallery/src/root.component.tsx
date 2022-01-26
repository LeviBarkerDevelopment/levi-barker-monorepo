import { Container, Box, IconButton, AppBar, Toolbar, Typography } from "@mui/material";
import { Gallery } from "./components/Gallery";
import { Home as HomeIcon, GitHub as GitHubIcon } from "@mui/icons-material";
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { store } from './redux/store';
import { Provider } from 'react-redux';

declare module '@mui/material/styles' {
  interface Theme {
    status: {
      danger: string;
    };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    status?: {
      danger?: string;
    };
  }
}

const theme = createTheme({
  palette: {
    primary: {
      main: '#2196f3'
    }
  }
});

export default function Root(props) {

  const handleGithubClick = () => {
    window.open('https://github.com/LeviBarker', '_blank');
  }

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Container maxWidth="md" >
          <AppBar>
            <Toolbar sx={{
              display: 'flex',
              justifyContent: 'space-between'
            }}>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Projects
              </Typography>
              <IconButton onClick={handleGithubClick}>
                <GitHubIcon />
              </IconButton>
            </Toolbar>

          </AppBar>
          <Box sx={{
            marginY: '96px'
          }}>
            <Gallery />
          </Box>
        </Container>
      </ThemeProvider>
    </Provider>
  );
}