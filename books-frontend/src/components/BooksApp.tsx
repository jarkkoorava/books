import React, { useEffect, useState } from 'react';
import { Container, Navbar, Col, Row } from 'react-bootstrap';
import Booklist from './Booklist';
import BookDetails from './BookDetails';

export default function BooksApp() {
  const [books, setBooks] = useState(null);
  const [currentBookId, setCurrentBookId] = useState(0);
  const [updateBookList, setUpdateBookList] = useState(false);

  useEffect(() => {
    fetch(`http://localhost:3001/books`)
      .then((response) => response.json())
      .then((data) => setBooks(data))
      .catch((err) => {
        console.log(err.message);
      });
    setUpdateBookList(false);
  }, [updateBookList]);

  const changeCurrentBook = (id: number) => {
    setCurrentBookId(id);
    console.log(`Current book: ${currentBookId}`);
  };

  const updateList = () => {
    setUpdateBookList(true);
  };

  return (
    <>
      <Navbar bg="light">
        <Container>
          <Navbar.Brand href="#home">Books API Application</Navbar.Brand>
        </Container>
      </Navbar>

      <Container>
        <Row>
          <Col>
            {books && (
              <Booklist
                books={books}
                changeCurrentBook={changeCurrentBook}
                currentBookId={currentBookId && currentBookId}
              />
            )}
          </Col>
          <Col>
            <BookDetails bookId={currentBookId} updateList={updateList} />
          </Col>
        </Row>
      </Container>
    </>
  );
}
