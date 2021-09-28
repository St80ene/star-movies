/* eslint-disable import/extensions */
// eslint-disable-next-line import/extensions
import Sequelize from 'sequelize';
import enVariables from '../config/config.cjs';
import movie from './movie';
import character from './character';
import comment from './comment';

// require('dotenv').config();

const env = process.env.NODE_ENV || 'development';
const config = enVariables[env];
const db = {};

let sequelize;

if (config.use_env_variable) {
  sequelize = new Sequelize(
    'postgres://sshjesuw:kdXC7ZbH6UHC3x88xG3daQO9xWqWgfOv@raja.db.elephantsql.com/sshjesuw',
    config
  );
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
