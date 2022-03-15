import React, { Component } from "react";
import { Button, Spinner, Form } from "react-bootstrap";
import { reduxForm, Field } from "redux-form";
import TextField from "../../../Core/TextField";
import { FcGoogle } from "react-icons/fc";
import { ImFacebook2 } from "react-icons/im";
import "./RegisterFormStyle.css";
class RegisterForm extends Component {
  render() {
    return (
      <div className="form">
        <h3>Daftar akun baru</h3>
        <form onSubmit={this.props.onSubmit}>
          <Form.Group controlId="formBasicEmail">
            <Field
              type="email"
              name="username"
              component={TextField}
              label={"Username (Email)"}
            />
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <Field
              type="text"
              name="fullname"
              component={TextField}
              label={"Nama lengkap"}
            />
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <Field
              type="password"
              name="password"
              component={TextField}
              label={"Password"}
            />
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <Field
              type="password"
              name="confirmPassword"
              component={TextField}
              label={"Ulangi Password"}
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
              <span>Daftar</span>
            )}
          </Button>
        </form>
        <div className="text-with-google d-flex justify-content-center">
          <p>Atau dengan</p>
        </div>
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

RegisterForm = reduxForm({
  form: "login",
  enableReinitialize: true,
})(RegisterForm);

export default RegisterForm;
