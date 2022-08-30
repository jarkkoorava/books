const { signedCookie } = require('cookie-parser');
var express = require('express');
var router = express.Router();
const { Book } = require('../models');

router.get('/', async function (req, res, next) {
  try {
    const books = await Book.findAll({ raw: false, order: [['id', 'ASC']] });
    res.json(books);
  } catch (error) {
    next(error);
  }
});

router.get('/:id', async function (req, res, next) {
  try {
    const book = await Book.findOne({ where: { id: req.params.id } });
    res.json(book);
  } catch (error) {
    next(error);
  }
});

router.post('/', async function (req, res, next) {
  try {
    await Book.create({
      title: req.body.title,
      author: req.body.author,
      description: req.body.description,
    });
  } catch (error) {
    next(error);
  }
});

router.put('/:id', async function (req, res, next) {
  try {
    const book = await Book.findOne({ where: { id: req.params.id } });
    await book.update({
      title: req.body.title,
      author: req.body.author,
      description: req.body.description,
    });
    res.sendStatus(200);
  } catch (error) {
    next(error);
  }
});

router.delete('/:id', async function (req, res, next) {
  try {
    const deleted = await Book.destroy({ where: { id: req.params.id } });
    console.log(`Deleted ${deleted} rows`);
    res.sendStatus(200);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
