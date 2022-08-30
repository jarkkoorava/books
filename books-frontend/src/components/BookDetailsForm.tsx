import React from 'react';
import { Col, Row } from 'react-bootstrap';
import FormTextField from './form-field';

export default function BookDetailsForm() {
  return (
    <>
      <Row className="mb-3">
        <FormTextField
          as={Col}
          controlId="formAuthor"
          label="Author"
          type="text"
          name="author"
        />
      </Row>
      <Row className="mb-3">
        <FormTextField
          as={Col}
          controlId="formTitle"
          label="Title"
          type="text"
          name="title"
        />
      </Row>
      <Row className="mb-3">
        <FormTextField
          as={Col}
          controlId="formDescription"
          label="Description"
          type="textarea"
          name="description"
        />
      </Row>
    </>
  );
}
