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

const sequelize = new Sequelize("test", "postgres", "123123test", {
  define: {
    freezeTableName: true,
  },
  host: "test.crokgck2cajx.ap-south-1.rds.amazonaws.com",
  port: 5432,
  dialect: "postgres",
});

const Roles = rolesModel(sequelize, Sequelize);
const Otp = otpModel(sequelize, Sequelize);
module.exports = sequelize;
