require("dotenv").config();
const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: process.env.DATABASE,
  }
);

const dbConnection = async () => {
  try {
    await sequelize.authenticate();
    sequelize.query(
      "create table userTable (id int primary key auto_increment,user_name varchar(255) not null,email varchar(100) not null,password varchar(100) not null, created_at date not null, updated_at date not null, is_deleted boolean not null)"
    );
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

module.exports = dbConnection();
