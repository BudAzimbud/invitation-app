import React, { Component } from "react";
import { Button, Spinner, Form } from "react-bootstrap";
import { reduxForm, Field } from "redux-form";
import TextField from "../../../Core/Input/TextField";
import { FcGoogle } from "react-icons/fc";
import { ImFacebook2 } from "react-icons/im";
import "./LoginFormStyle.css";
import { Link } from "react-router-dom";
class LoginForm extends Component {

  titleForm = "Masuk ke akun Ente"

  render() {
    return (
      <div className="form">
        <h3>{this.titleForm}</h3>

        <form onSubmit={this.props.onSubmit}>
          <Form.Group controlId="formBasicEmail">
            <Field
              type="email"
              name="username"
              component={TextField}
              label={"Username (Email)"}
              placeholder={"azim@example.com"}
            />
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <Field
              type="password"
              name="password"
              component={TextField}
              placeholder="*****************"
              label={"Password"}
            />
          </Form.Group>

          <Link to="/" style={{ textDecoration: "none", fontSize: "15px" }}>
            Lupa Password
          </Link>

          <Button
            variant="primary"
            className="mt-4"
            type="submit"
            disabled={this.props.isLoading}
          >
            {this.props.isLoading ? (
              <Spinner animation="border" role="status">
                <span className="visually-hidden">Masuk</span>
              </Spinner>
            ) : (
              <span>Masuk</span>
            )}
          </Button>
        </form>

        <div className="text-with-google d-flex justify-content-center">
          <p>Atau dengan</p>
        </div>
        <div className="contain-login-google">
          <a href="/">
            <i>
              <FcGoogle />
            </i>
            Google
          </a>
          <a href="/">
            <i>
              <ImFacebook2 />
            </i>
            Facebook
          </a>
        </div>
      </div>
    );
  }
}

LoginForm = reduxForm({
  form: "login",
  enableReinitialize: true,
})(LoginForm);

export default LoginForm;
