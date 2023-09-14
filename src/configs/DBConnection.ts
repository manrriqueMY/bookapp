import { Sequelize } from 'sequelize-typescript';

const DBConnection = new Sequelize('sqlite::memory:');

export default DBConnection;
