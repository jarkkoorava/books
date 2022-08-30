import React from 'react';
import { v4 as uuid } from 'uuid';
import BookListItem from './BookListItem';

interface Book {
  id: number;
  title: string;
  author: string;
  description: string;
}

interface Props {
  books: Array<Book>;
  changeCurrentBook(id: number): void;
  currentBookId: number;
}

export default function Bookdetails(props: Props) {
  const bookList = props.books.map((book) => (
    <BookListItem
      key={uuid()}
      id={book.id}
      author={book.author}
      title={book.title}
      description={book.description}
      changeCurrentBook={props.changeCurrentBook}
      currentBookId={props.currentBookId}
    />
  ));

  return (
    <>
      <h3>List of books</h3>
      {bookList}
    </>
  );
}
