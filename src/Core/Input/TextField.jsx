import { Row, Col, Form } from "react-bootstrap";
const TextField = ({
  input,
  type,
  as,
  placeholder,
  label,
  disabled,
  readOnly,
  meta: { touched, error, warning },
}) => (
  <Row>
    <Col md="12">
      <h1 htmlFor="{input}" className="col-form-label">
        {label}
      </h1>
    </Col>
    <Col md="12">
      <Form.Control
        {...input}
        type={type}
        as={as}
        placeholder={placeholder}
        disabled={disabled}
        readOnly={readOnly}
        className={error && "border border-danger"}
      />
      {touched &&
        ((error && (
          <p className="mb-0" style={{ color: "red", fontSize: "12px" }}>
            {error}
          </p>
        )) ||
          (warning && <p style={{ color: "brown" }}>{warning}</p>))}
    </Col>
  </Row>
);

export default TextField;
