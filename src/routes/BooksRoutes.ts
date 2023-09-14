import express from 'express';
import Book from '../models/Book';
import Author from '../models/Author';
import Author_Book from '../models/Author_Book';

const router = express.Router();

router.post("/", async (req, res) => {
    const { authors = [], ...book } = { ...req.body };
    const created = (await Book.create(book)).dataValues;
    authors.forEach(async (authorId) => {
        await Author_Book.create({
            BookId: created.id,
            AuthorId: authorId
        })
    });
    return res.send(created);
})

router.get("/", async (req, res) => {
    const books = await Book.findAll({ include: Author });
    res.send(books)
})

router.get("/average/:idbook", async (req, res) => {
    const { idbook } = req.params;
    const book = (await Book.findByPk(idbook, { include: Author })).dataValues;
    const average = (book.pages / book.chapters).toFixed(2)
    res.send({ ...book, average });
})

export default router;
