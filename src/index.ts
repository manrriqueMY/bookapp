import express from "express";
import cors from "cors";
import AuthorsRoutes from './routes/AuthorsRoutes';
import BooksRoutes from './routes/BooksRoutes';

const PORT = process.env.PORT ?? 8000;

const app = express();

app.use(cors())
app.use(express.json());
app.use('/author', AuthorsRoutes);
app.use('/book', BooksRoutes);

app.listen(PORT, () => {
    console.log(`Listen on ${PORT}`);
});