import { DataType } from 'sequelize-typescript';
import DBConnection from '../configs/DBConnection';

const Author = DBConnection.define("Author", {
    id: {
        type: DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: DataType.STRING
});

DBConnection.sync();

export default Author