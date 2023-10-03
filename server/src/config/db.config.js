const knex = require("knex");
const knexConfig = require("../../knexfile");

const environment = process.env.NODE_ENV || "development";
module.export = knex(knexConfig[environment]);
