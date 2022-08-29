import React from 'react';
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
}

export default function Bookdetails(props: Props) {
  const bookList = props.books.map((book) => (
    <BookListItem
      id={book.id}
      author={book.author}
      title={book.title}
      description={book.description}
      changeCurrentBook={props.changeCurrentBook}
    />
  ));

  return (
    <>
      <h3>List of books</h3>
      {bookList}
    </>
  );
}