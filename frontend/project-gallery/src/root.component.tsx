import { Container, Box, IconButton, AppBar, Toolbar, Typography } from "@mui/material";
import { Gallery } from "./components/Gallery";
import { Home as HomeIcon} from "@mui/icons-material";
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';

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
  return <ThemeProvider theme={theme}>
    <Container maxWidth="md" > 
    <AppBar>
      <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Projects
          </Typography>
      </Toolbar>
    </AppBar>
    <Box sx={{
      marginY: '96px'
    }}>
      <Gallery />

    </Box>
    </Container>
    </ThemeProvider>;
}