import { createBrowserRouter } from "react-router";



import RootLayout from "./components/layout/RootLayout";
import AuthRootLayout from "./components/layout/AuthRootLayout";
import HomeScreen from "./pages/App";
import ErrorScreen from "./error";
import LoginScreen from "./pages/auth/Login";
import RegisterScreen from "./pages/auth/Register";
import VerifyOtpScreen from "./pages/auth/VerifyOtp";
import ConfirmPasswordScreen from "./pages/auth/ConfirmPassword";


export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    ErrorBoundary: ErrorScreen,
    children: [
      { index: true, Component: HomeScreen },
    ],
  },
  {
    path: "/login",
    Component: LoginScreen,
  },
  {
    path: "/register",
    Component: AuthRootLayout,
    children: [
        {
            index: true,
            Component: RegisterScreen,
        },
        {
            path: "verify-otp",
            Component: VerifyOtpScreen,
        },
        {
            path: "confirm-password",
            Component: ConfirmPasswordScreen,
        }
        
    ]
  },
  {
    path: "*",
    Component: ErrorScreen,
  }
]);
