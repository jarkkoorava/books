import React from 'react';
import { Col, Row } from 'react-bootstrap';

interface Props {
  id: number;
  title: string;
  author: string;
  description: string;
  changeCurrentBook(id: number): void;
}

export default function BookListItem(props: Props) {
  const handleClick = () => {
    props.changeCurrentBook(props.id);
  };

  return (
    <Row>
      <Col>
        <div onClick={handleClick}>
          {props.author}, {props.title}
        </div>
      </Col>
    </Row>
  );
}
