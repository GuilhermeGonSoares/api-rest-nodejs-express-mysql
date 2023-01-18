const dotenv = require('dotenv');

dotenv.config();

module.exports = {
  dialect: "mysql", // informar o tipo de banco que vamos utilizar
  host: process.env.DATABASE_HOST, // o host, neste caso estamos com um banco local
  port: process.env.DATABASE_PORT,
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE,
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
  // dialectOptions: {
  //   timezone: 'America/Sao_Paulo',
  // },
  // timezone: 'America/Sao_Paulo',
};
