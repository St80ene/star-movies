/* eslint-disable import/extensions */
// eslint-disable-next-line import/extensions
import Sequelize from 'sequelize';
import enVariables from '../config/config.cjs';
import movie from './movie.js';
import character from './character.js';
import comment from './comment.js';
// require('dotenv').config();

const env = process.env.NODE_ENV || 'development';
const config = enVariables[env];
const db = {};

const postgresURI = process.env.POSTGRES_URI

let sequelize;

if (config.use_env_variable) {
  sequelize = new Sequelize(postgresURI, config);
} else {
  sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config,
  );
}

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.movie = movie(sequelize, Sequelize);
db.character = character(sequelize, Sequelize);
db.comment = comment(sequelize, Sequelize);
export default db;
