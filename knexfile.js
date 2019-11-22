module.exports = {

  development: {
    client: 'pg',
    connection: 'postgress://localhost/music',
    useNullAsDefault: true,
    migrations: {
      directory: './db/migrations',
    },
    seed: {
      directory: './db/seeds/dev'
    }
  }
};
