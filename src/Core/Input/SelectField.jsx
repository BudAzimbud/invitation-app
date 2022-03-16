import { Row, Col, Form } from "react-bootstrap";

 const SelectField = ({
  input,
  label,
  options,
  selectedOption,
  readOnly,
  title,
  meta: { touched, error, warning },
}) => (
  <Row>
    <Col md="12">
      <h1 htmlFor="{input}" className="col-form-label">
        {label}
      </h1>
    </Col>
    <Col md="12">
      <Form.Select
        aria-label="Default select example"
        onChange={input.onChange}
      >
        {options.map((opt) => (
          <option value={opt} selected={opt === selectedOption}>
            {opt}
          </option>
        ))}
      </Form.Select>
      {touched &&
        ((error && (
          <p className="mb-0" style={{ color: "red" }}>
            {error}
          </p>
        )) ||
          (warning && <p style={{ color: "brown" }}>{warning}</p>))}
    </Col>
  </Row>
);

export default  SelectField
