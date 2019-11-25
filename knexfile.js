module.exports = {
  development: {
    client: 'pg',
    connection: 'postgress://localhost/music',
    migrations: {
      directory: './db/migrations',
    },
    seeds: {
      directory: './db/seeds/dev'
    },
    useNullAsDefault: true,
  },
  
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL + `?ssl=true`,
    useNullAsDefault: true,
    migrations: {
      directory: './db/migrations'
    },
    seeds: {
      directory: './db/seeds'
    }
  }
};
