// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: 'postgresql://localhost/buildandburn'
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }

};
