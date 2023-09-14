import DBConnection from '../configs/DBConnection';

const Author_Book = DBConnection.define("Author_Book", {}, { timestamps: false })

DBConnection.sync();

export default Author_Book;