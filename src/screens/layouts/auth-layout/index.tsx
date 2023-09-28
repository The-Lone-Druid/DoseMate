import { Outlet } from "react-router-dom";

type Props = {};

const AuthLayout = (props: Props) => {
  return (
    <div id="auth-layout">
      <Outlet />
    </div>
  );
};

export default AuthLayout;
