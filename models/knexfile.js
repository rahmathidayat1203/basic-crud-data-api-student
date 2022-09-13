// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
  development: {
    client: "mysql",
    connection: {
      host: "", //using your host local
      port: 3306, // port mysql
      database: "student_db", //name database
      user: "", //username of your database
      password: "", //password of your database
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "migrations", //this name can your change like you want
    },
  },
};
