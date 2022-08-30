import React, { useEffect, useRef, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Formik } from 'formik';
import * as yup from 'yup';
import BookDetailsForm from './BookDetailsForm';

interface Props {
  bookId: number;
  updateList: () => void;
}

export default function Bookdetails(props: Props) {
  const [book, setBook] = useState(null);
  const [author, setAuthor] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const ref = useRef(null);

  useEffect(() => {
    fetch(`http://localhost:3001/books/${props.bookId}`)
      .then((response) => response.json())
      .then((data) => setBook(data))
      .catch((err) => {
        console.log(err.message);
      });
  }, [props.bookId]);

  useEffect(() => {
    if (book) {
      setAuthor(book['author']);
      setTitle(book['title']);
      setDescription(book['description']);
    }
  }, [book]);

  const addNewBook = (values: any) => {
    const requestOptions: any = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({
        title: values.title,
        author: values.author,
        description: values.description,
      }),
    };
    fetch('http://localhost:3001/books/', requestOptions).then((response) =>
      response.json().then((data) => console.log(data))
    );
    props.updateList();
  };

  const updateBook = (values: any) => {
    const requestOptions: any = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({
        title: values.title,
        author: values.author,
        description: values.description,
      }),
    };
    fetch(`http://localhost:3001/books/${props.bookId}`, requestOptions).then(
      (response) => response.json().then((data) => console.log(data))
    );
    props.updateList();
  };

  const deleteBook = () => {
    const requestOptions: any = {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({
        id: props.bookId,
      }),
    };
    fetch(`http://localhost:3001/books/${props.bookId}`, requestOptions).then(
      (response) => response.json().then((data) => console.log(data))
    );
    props.updateList();
  };

  const schema = yup.object({
    author: yup.string().required(),
    title: yup.string().required(),
    description: yup.string().required(),
  });

  return (
    <>
      <h3> Book details</h3>
      <Formik
        innerRef={ref}
        enableReinitialize={true}
        validationSchema={schema}
        onSubmit={(values, actions) => {
          updateBook(values);
          actions.setSubmitting(false);
        }}
        initialValues={{
          author: author,
          title: title,
          description: description,
        }}
      >
        {({
          handleSubmit,
          handleChange,
          values,
          errors,
          isValid,
          isSubmitting,
        }) => (
          <Form noValidate onSubmit={handleSubmit}>
            <BookDetailsForm />

            <Button
              className="me-1"
              variant="primary"
              type="button"
              onClick={() => addNewBook(values)}
            >
              Save new
            </Button>
            <Button className="me-1" variant="primary" type="submit">
              Save
            </Button>
            <Button
              className="me-1"
              variant="primary"
              type="button"
              onClick={deleteBook}
            >
              Delete
            </Button>
          </Form>
        )}
      </Formik>
    </>
  );
}
