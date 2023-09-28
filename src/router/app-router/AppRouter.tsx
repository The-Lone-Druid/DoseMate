import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import {
  AuthLayout,
  HomeScreen,
  LoginScreen,
  MainLayout,
  SignupScreen,
} from "../../screens";

type Props = {};

const AppRouter = (props: Props) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="auth" element={<AuthLayout />}>
            <Route path="login" element={<LoginScreen />} />
            <Route path="signup" element={<SignupScreen />} />
          </Route>
          <Route path="app">
            <Route path="home" element={<HomeScreen />} />
          </Route>
        </Route>
        <Route path="*" element={<Navigate to="auth/login" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
