import React from 'react';
import { Col, Row } from 'react-bootstrap';

interface Props {
  id: number;
  title: string;
  author: string;
  description: string;
  changeCurrentBook(id: number): void;
  currentBookId: number;
}

export default function BookListItem(props: Props) {
  const handleClick = () => {
    props.changeCurrentBook(props.id);
  };

  const classes = `cursor p-2 ${
    props.currentBookId === props.id && 'selected'
  }`;

  return (
    <Row>
      <Col>
        <div onClick={handleClick} className={classes}>
          {props.author}, {props.title}
        </div>
      </Col>
    </Row>
  );
}
