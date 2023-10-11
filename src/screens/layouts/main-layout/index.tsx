import { onAuthStateChanged } from "firebase/auth";
import React from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { auth } from "../../../config/firebase.config";

interface MainLayoutProps {}

const MainLayout: React.FC<MainLayoutProps> = () => {
  const navigate = useNavigate();
  const location = useLocation();

  React.useEffect(() => {
    onAuthStateChanged(
      auth,
      (user) => {
        if (user) {
          // handle user login and navigation
          if (location.pathname.includes("auth")) {
            navigate("/app/home");
          } else {
            navigate(location.pathname);
          }
        } else {
          // User is signed out
          if (location.pathname.includes("app")) {
            navigate("/auth/login");
          } else {
            navigate(location.pathname);
          }
        }
      },
      (error) => {
        console.log(error);
      }
    );
  }, [auth.currentUser]);

  return (
    <div id="main-layout">
      <Outlet />
    </div>
  );
};

export default MainLayout;
