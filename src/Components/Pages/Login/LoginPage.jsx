import React from "react";
import LoginForm from "../../Login/Form/LoginForm";
import NavbarLogin from "../../NavbarLogin";
import "./LoginPageStyle.css";

function LoginPage() {
    return (
      <div className="wrap">
        <NavbarLogin />
        <LoginForm />
      </div>
    );
}

export default LoginPage;
