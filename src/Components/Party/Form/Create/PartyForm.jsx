import React, { Component } from "react";
import { Button, Spinner, Form, Row, Col } from "react-bootstrap";
import { reduxForm, Field } from "redux-form";
import FileInput from "../../../../Core/Input/FileInput";
import renderSelect from "../../../../Core/Input/SelectField";
import TextField from "../../../../Core/Input/TextField";

class PartyForm extends Component {
  render() {
    return (
      <div>
        <form onSubmit={this.props.onSubmit}>
          <Row>
            <Col xs sm="12" lg="6">
              <Form.Group>
                <Field
                  type="text"
                  name="partyName"
                  component={TextField}
                  label={"Nama Pesta"}
                />
              </Form.Group>
            </Col>
            <Col xs="12" sm="12" lg="6">
              <Form.Group>
                <Field
                  type="date"
                  name="partyDate"
                  component={TextField}
                  label={"Tanggal Acara"}
                />
              </Form.Group>
            </Col>
            <Col xs="12" sm="12" lg="12">
              <Form.Group>
                <Field
                  type="text"
                  name="description"
                  component={TextField}
                  label={"Deskripsi Acara"}
                  as="textarea"
                />
              </Form.Group>
            </Col>
            <Col sm="12" lg="6">
              <Form.Group>
                <Field
                  type="text"
                  name="kindParty"
                  component={renderSelect}
                  label={"Pilih Acara"}
                  options={[]}
                />
              </Form.Group>
            </Col>
            <Col sm="12" lg="6">
              <Form.Group>
                <Field
                  type="file"
                  name="background"
                  component={FileInput}
                  label={"Deskripsi Acara"}
                />
              </Form.Group>
            </Col>
          </Row>

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
              <span>Buat</span>
            )}
          </Button>
        </form>
      </div>
    );
  }
}

PartyForm = reduxForm({
  form: "party",
  enableReinitialize: true,
})(PartyForm);

export default PartyForm;
