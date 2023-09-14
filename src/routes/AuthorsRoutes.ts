import express from 'express';
import Author from '../models/Author';
import Book from '../models/Book';
import Author_Book from '../models/Author_Book';

const router = express.Router();

router.post("/", async (req, res) => {
    const { books = [], ...author } = { ...req.body };
    const created = (await Author.create(author)).dataValues;
    books.forEach(async (bk) => {
        const book = (await Book.create({ ...bk })).dataValues;
        await Author_Book.create({
            BookId: book.id,
            AuthorId: created.id
        })
    });
    return res.send(created);
})

router.get("/", async (req, res) => {
    const authors = await Author.findAll({ include: Book });
    res.send(authors)
})

export default router;
