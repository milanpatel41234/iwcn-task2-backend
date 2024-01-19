const Sequelize = require("sequelize");
const sequelize = require('../util/database')

const note = sequelize.define("note", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  message: {
    type: Sequelize.STRING,
  },
});
export default note;