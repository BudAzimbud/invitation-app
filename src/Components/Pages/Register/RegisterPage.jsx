import React, { useState } from "react";
import NavbarLogin from "../../Navbar/NavbarLogin";
import RegisterForm from "../../Register/Form/RegisterForm";

function RegisterPage() {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (data) => {
    alert(data);
  };
  return (
    <div className="wrap">
      <NavbarLogin />
      <RegisterForm
        onSubmit={(data) => {
          handleSubmit(data);
        }}
      />
    </div>
  );
}

export default RegisterPage;
