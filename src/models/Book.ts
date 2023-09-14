import { DataType } from 'sequelize-typescript';
import Author from './Author';
import DBConnection from '../configs/DBConnection';
import Author_Book from './Author_Book';

const Book = DBConnection.define("Book", {
    id: {
        type: DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    title: DataType.STRING,
    chapters: DataType.NUMBER,
    pages: DataType.NUMBER
});

Book.belongsToMany(Author, { through: Author_Book });
Author.belongsToMany(Book, { through: Author_Book });

DBConnection.sync();

export default Book;