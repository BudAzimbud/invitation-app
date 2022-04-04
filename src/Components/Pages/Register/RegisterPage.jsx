import React from "react";
import NavbarLogin from "../../Navbar/NavbarLogin";
import RegisterForm from "../../Register/Form/RegisterForm";

function RegisterPage() {
  // const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (data) => {
    data.preventDefault();
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
