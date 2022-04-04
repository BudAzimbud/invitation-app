import React  , {useState} from "react";
import LoginForm from "../../Login/Form/LoginForm";
import NavbarLogin from "../../Navbar/NavbarLogin";
import "./LoginPageStyle.css";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const history = useNavigate();


  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (data) => {
  
    setIsLoading(true);
    history("/", { state: true });
  };

  return (
    <div className="wrap">
      <NavbarLogin />
      <LoginForm
        onSubmit={(data) => {
          handleSubmit(data);
        }}
        isLoading={isLoading}
      />
    </div>
  );
}

export default LoginPage;
