import {
  Google,
  LockOpen,
  MailOutlined,
  VisibilityOffOutlined,
  VisibilityOutlined,
} from "@mui/icons-material";
import {
  Button,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import { useFormik } from "formik";
import React from "react";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import { TextLogo } from "../../../components";

type Props = {};

const LoginScreen = (props: Props) => {
  const [showPassword, setShowPassword] = React.useState(false);

  const loginForm = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Please enter a valid email address")
        .required("Email required"),
      password: Yup.string()
        .min(6, "Password must be at least 6 characters long")
        .required("Password is required"),
    }),
    onSubmit: (values) => {
      handleSubmit(values);
    },
  });

  const handleSubmit = React.useCallback(
    async (values: typeof loginForm.values) => {},
    [loginForm.values]
  );

  const handleShowPassword = React.useCallback(() => {
    setShowPassword((prev) => !prev);
  }, [showPassword]);

  return (
    <div className="p-4">
      <div className="flex items-center justify-center my-6">
        <TextLogo />
      </div>
      <div>
        <Typography variant={"h5"}>Login to your account...</Typography>
      </div>
      <form onSubmit={loginForm.handleSubmit}>
        <div className="flex gap-6 flex-col mt-6">
          <div>
            <TextField
              id="email"
              name="email"
              value={loginForm.values.email}
              onChange={loginForm.handleChange}
              onBlur={loginForm.handleBlur}
              fullWidth
              label="Email"
              placeholder="Email"
              type="text"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <MailOutlined />
                  </InputAdornment>
                ),
              }}
              error={
                loginForm.touched.email && loginForm.errors.email ? true : false
              }
              helperText={
                loginForm.touched.email && loginForm.errors.email
                  ? loginForm.errors.email
                  : ""
              }
            />
          </div>
          <div>
            <TextField
              id="password"
              name="password"
              value={loginForm.values.password}
              onChange={loginForm.handleChange}
              onBlur={loginForm.handleBlur}
              fullWidth
              label="Password"
              placeholder="Password"
              type={showPassword ? "text" : "password"}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <LockOpen />
                  </InputAdornment>
                ),
                endAdornment: (
                  <IconButton onClick={handleShowPassword}>
                    {showPassword ? (
                      <VisibilityOffOutlined />
                    ) : (
                      <VisibilityOutlined />
                    )}
                  </IconButton>
                ),
              }}
              error={
                loginForm.touched.password && loginForm.errors.password
                  ? true
                  : false
              }
              helperText={
                loginForm.touched.password && loginForm.errors.password
                  ? loginForm.errors.password
                  : ""
              }
            />
            <div className="flex items-center justify-end">
              <Button className={"!text-blue-500 !p-1"}>
                Forgot Password?
              </Button>
            </div>
          </div>
          <div>
            <Button
              color="primary"
              className="!rounded-full"
              variant="contained"
              size="large"
              type="submit"
              fullWidth
            >
              Submit
            </Button>
          </div>
          <div className="text-center text-sm">
            <Link className="" to={"/auth/signup"}>
              Don't have an account?{" "}
              <span className="text-blue-500">Sign Up</span>
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <div className="border border-gray-600 flex-1"></div>
            <span>OR</span>
            <div className="border border-gray-600 flex-1"></div>
          </div>
          <div>
            <Button
              color="error"
              className="!rounded-full"
              variant="contained"
              size="large"
              fullWidth
              startIcon={<Google />}
            >
              Continue with Google
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default LoginScreen;
