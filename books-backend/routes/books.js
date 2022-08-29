var express = require('express');
var router = express.Router();

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

router.get('/', function (req, res, next) {
  res.json(books);
});

module.exports = router;
