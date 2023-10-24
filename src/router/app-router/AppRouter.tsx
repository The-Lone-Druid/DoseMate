import React, { useEffect, useState } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import {
  AppLayout,
  AuthLayout,
  HomeScreen,
  LoginScreen,
  MainLayout,
  OnBoard,
  SignupScreen,
} from "../../screens";

interface AppRouterProps {}

const AppRouter: React.FC<AppRouterProps> = () => {
  const [onBoarding, setOnBoarding] = useState(false);

  useEffect(() => {
    const onBoardValue = localStorage.getItem("onBoarding");
    if (onBoardValue) {
      setOnBoarding(true);
    }
  }, [onBoarding]);

  return (
    <BrowserRouter>
      <Routes>
        {/* Main Layout works as an outlet */}
        <Route element={<MainLayout />}>
          {/* Authentication Routes */}
          {/* AutyLayout works as an outlet */}
          <Route path="auth" element={<AuthLayout />}>
            <Route path="login" element={<LoginScreen />} />
            <Route path="signup" element={<SignupScreen />} />
          </Route>
          {/* Application Routes */}
          {/* AppLayout works as an outlet */}
          <Route path="app" element={<AppLayout />}>
            <Route path="home" element={<HomeScreen />} />
          </Route>
        </Route>
        <Route
          path={onBoarding ? "" : "*"}
          element={onBoarding ? <Navigate to="auth/login" /> : <OnBoard />}
        />
        <Route path="*" element={<Navigate to="auth/login" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
