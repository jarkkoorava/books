import React, { useState } from 'react';
import { Container, Navbar, Col, Row } from 'react-bootstrap';
import Booklist from './Booklist';
import Bookdetails from './Bookdetails';

const books = [
  {
    id: 1,
    title: '48 Laws Of Power',
    author: 'Robert Greene',
    description: 'Manipulate everyone to get influence',
  },
  {
    id: 2,
    title: 'How To Win Friends And Gain Influence',
    author: 'Dale Carnegie',
    description: 'Be a nice person to get influence',
  },
  {
    id: 3,
    title: 'Emotional Intelligence',
    author: 'Daniel Goleman ',
    description: 'Know how people think to get influence',
  },
  {
    id: 4,
    title: 'What Every Body Is Saying',
    author: 'Joe Navarro',
    description: 'Use body language to get influence',
  },
];

export default function BooksApp() {
  // const [books, setBooks] = useState([]);
  const [currentBookId, setCurrentBookId] = useState(0);

  const changeCurrentBook = (id: number) => {
    setCurrentBookId(id);
    console.log(`Current book: ${currentBookId}`);
  };

  const getCurrentBook = () => {
    const filteredBook = books.filter((book) => book.id === currentBookId)[0];
    console.log(filteredBook);
    return filteredBook;
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
            <Booklist books={books} changeCurrentBook={changeCurrentBook} />
          </Col>
          <Col>
            {currentBookId !== 0 && <Bookdetails book={getCurrentBook()} />}
          </Col>
        </Row>
      </Container>
    </>
  );
}
