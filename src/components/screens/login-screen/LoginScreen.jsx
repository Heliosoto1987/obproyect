//vendor
import React from "react";
//styles
import "../../../styles/screen/login-screen/login-screen.css";
//components
import { LoginLeftSide } from "./components/LoginLeftSide";
import { LoginRigthSide } from "./components/LoginRigthSide";

export const LoginScreen = () => {
  return (
    <div className="loginscreen">
      <div>
        <LoginLeftSide />
      </div>
      <div>
        <LoginRigthSide />
      </div>
    </div>
  );
};
