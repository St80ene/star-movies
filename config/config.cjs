module.exports = {
  development: {
    username: 'sshjesuw',
    password: 'kdXC7ZbH6UHC3x88xG3daQO9xWqWgfOv',
    database: 'sshjesuw',
    host: 'raja.db.elephantsql.com',
    dialect: 'postgres',
  },
  test: {
    username: 'sshjesuw',
    password: 'kdXC7ZbH6UHC3x88xG3daQO9xWqWgfOv',
    database: 'sshjesuw',
    host: 'raja.db.elephantsql.com',
    dialect: 'postgres',
  },
  production: {
    username: 'sshjesuw',
    password: 'kdXC7ZbH6UHC3x88xG3daQO9xWqWgfOv',
    database: 'raja.db.elephantsql.com',
    host: 'raja.db.elephantsql.com',
    dialect: 'postgres',
    ssl: true,
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
    use_env_variable: 'DATABASE_URL',
  },
};
