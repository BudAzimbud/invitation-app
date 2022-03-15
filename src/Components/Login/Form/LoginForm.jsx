import React, { Component } from "react";
import { Button, Spinner, Form } from "react-bootstrap";
import { reduxForm, Field } from "redux-form";
import TextField from "../../../Core/TextField";
import { FcGoogle } from "react-icons/fc";
import { ImFacebook2 } from "react-icons/im";
import "./LoginFormStyle.css";
class LoginForm extends Component {
  render() {
    return (
      <div className="form">
        <h3>Masuk ke akun Anda</h3>
        <form onSubmit={this.props.onSubmit}>
          <Form.Group controlId="formBasicEmail">
            <Field
              type="email"
              name="username"
              component={TextField}
              placeholder="Email"
              label={"Username"}
            />
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <Field
              type="password"
              name="password"
              component={TextField}
              placeholder="Password"
              label={"Password"}
            />
          </Form.Group>

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

        <div className="contain-login-google">
          <a href="#">
            <i>
              <FcGoogle />
            </i>
            Google
          </a>
          <a href="#">
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
