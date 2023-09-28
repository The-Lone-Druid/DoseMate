import { CssBaseline, ThemeProvider } from "@mui/material";
import { SnackbarProvider } from "notistack";
import { Provider as ReduxProvider } from "react-redux";
import { store } from "./redux/store";
import AppRouter from "./router/app-router/AppRouter";
import theme from "./theme/mui.config";

function App() {
  return (
    <ReduxProvider store={store}>
      <ThemeProvider theme={theme}>
        <SnackbarProvider maxSnack={3}>
          <CssBaseline />
          <AppRouter />
        </SnackbarProvider>
      </ThemeProvider>
    </ReduxProvider>
  );
}

export default App;
