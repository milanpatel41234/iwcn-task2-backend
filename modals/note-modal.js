module.exports = (sequelize , Sequelize)=>{
    const note = sequelize.define("note", {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        message: {
          type: Sequelize.STRING,
          null: false
        },
      });
    return note;
}
