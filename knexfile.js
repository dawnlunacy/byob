module.exports = {

  development: {
    client: 'pg',
    connection: 'postgress://localhost/publications',
    useNullAsDefault: true,
    migrations: {
      directory: './db/migrations',
    },
    seed: {
      directory: './db/seeds/dev'
    }
  }
};
