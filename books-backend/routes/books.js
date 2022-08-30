const { signedCookie } = require('cookie-parser');
var express = require('express');
var router = express.Router();
const { Book } = require('../models');

router.get('/', async function (req, res, next) {
  const books = await Book.findAll({ raw: false, order: [['id', 'ASC']] });
  res.header('Access-Control-Allow-Origin', '*');
  res.json(books);
});

router.get('/:id', async function (req, res, next) {
  const book = await Book.findOne({ where: { id: req.params.id } });
  res.header('Access-Control-Allow-Origin', '*');
  res.json(book);
});

router.post('/', async function (req, res, next) {
  res.setHeader(
    'Access-Control-Allow-Methods',
    'OPTIONS, GET, POST, PUT, PATCH, DELETE'
  );
  console.log(req.body);
  await Book.create({
    title: req.body.title,
    author: req.body.author,
    description: req.body.description,
  });
});

router.put('/:id', async function (req, res, next) {
  const book = await Book.findOne({ where: { id: req.params.id } });
  await book.update({
    title: req.body.title,
    author: req.body.author,
    description: req.body.description,
  });
  res.sendStatus(200);
});

router.delete('/:id', async function (req, res, next) {
  const deleted = await Book.destroy({ where: { id: req.params.id } });
  console.log(`Deleted ${deleted} rows`);
  res.sendStatus(200);
});

module.exports = router;
