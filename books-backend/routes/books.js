const { signedCookie } = require('cookie-parser');
var express = require('express');
var router = express.Router();
const { Book } = require('../models');

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

router.get('/', async function (req, res, next) {
  const books = await Book.findAll({ raw: false });
  parsedBooks = res.header('Access-Control-Allow-Origin', '*');
  res.json(books);
});

router.post('/:id', function (req, res, next) {
  console.log(`create new ${req.params.id}`);
  res.sendStatus(200);
});

router.put('/:id', function (req, res, next) {
  console.log(`update ${req.params.id}`);
  res.sendStatus(200);
});

router.delete('/:id', function (req, res, next) {
  console.log(`delete ${req.params.id}`);
  res.sendStatus(200);
});

module.exports = router;
