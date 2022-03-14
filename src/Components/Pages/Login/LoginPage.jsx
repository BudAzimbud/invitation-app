import React from "react";
import { Container } from "react-bootstrap";
import LoginForm from "../../Login/Form/LoginForm";
import "./LoginPageStyle.css";
function LoginPage() {
  return (
    <div className="wrap">
        <div className="container-form ">
          <LoginForm />
        </div>
    </div>
  );
}

export default LoginPage;
