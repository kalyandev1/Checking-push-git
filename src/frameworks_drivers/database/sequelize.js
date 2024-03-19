const Sequelize = require("sequelize");

const rolesModel = require("./models/Roles");
const otpModel = require("./models/Otp");

// const sequelize = new Sequelize("newsapp", "postgres", "Arun6004", {
//    define: {
//     freezeTableName: true
//    },
//   host: "arun.czu4oxaeuviz.ap-south-1.rds.amazonaws.com",
//   port: 5432,
//   dialect: "postgres"
// });

const sequelize = new Sequelize("postgres", "postgres", "password", {
  define: {
    freezeTableName: true,
  },
  // host: "test.crokgck2cajx.ap-south-1.rds.amazonaws.com",
  // host: "103.44.2.28",
  host:"3.111.10.134",
  port: 5432,
  dialect: "postgres",
  pool: {
    max: 10,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
});

const Roles = rolesModel(sequelize, Sequelize);
const Otp = otpModel(sequelize, Sequelize);
module.exports = sequelize;
