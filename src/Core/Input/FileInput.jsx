import { Row, Col, Form } from "react-bootstrap";

const adaptFileEventToValue = (delegate) => (e) => {
  delegate(e.target.files[0]);
};

const FileInput = ({
  type,
  as,
  placeholder,
  label,
  input: { value: omitValue, onChange, onBlur, ...inputProps },
  meta: { touched, error, warning },

  ...props
}) => {
  return (
    <Row>
      <Col md="12">
        <h1 htmlFor="{input}" className="col-form-label">
          {label}
        </h1>
      </Col>
      <Col md="12">
        <Form.Control
          onChange={adaptFileEventToValue(onChange)}
          onBlur={adaptFileEventToValue(onBlur)}
          type="file"
          {...props.input}
          {...props}
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
};

export default FileInput;
