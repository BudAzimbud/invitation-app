import React from "react";
import NavbarLogin from "../../NavbarLogin";
import RegisterForm from "../../Register/Form/RegisterForm";

function RegisterPage() {
  return (
    <div className="wrap">
      <NavbarLogin />
      <RegisterForm />
    </div>
  );
}

export default RegisterPage;
