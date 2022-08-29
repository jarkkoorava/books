import React, { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';

interface Book {
  id: number;
  title: string;
  author: string;
  description: string;
}

interface Props {
  book: Book;
}

export default function Bookdetails(props: Props) {
  return (
    <>
      <h3> Book details</h3>
      {console.log(`In bookdetails: ${JSON.stringify(props.book, null, 4)}`)}
      <Form>
        <Form.Group className="mb-3" controlId="formAuthor">
          <Form.Label>Author</Form.Label>
          <Form.Control type="text" value={props.book.author}></Form.Control>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formTitle">
          <Form.Label>Title</Form.Label>
          <Form.Control type="text" value={props.book.title}></Form.Control>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formTitle">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            value={props.book.description}
          ></Form.Control>
        </Form.Group>

        <Button className="me-1" variant="primary" type="submit">
          Save new
        </Button>
        <Button className="me-1" variant="primary" type="submit">
          Save
        </Button>
        <Button className="me-1" variant="primary" type="submit">
          Delete
        </Button>
      </Form>
    </>
  );
}
