const Sequelize = require('sequelize');

const sequelize = new Sequelize(process.env.DATABASE,process.env.DATABASE_USERNAME,
    process.env.DATABASE_PASSWORD,
{
    host: 'localhost',
    port: 3306,
    dialect: 'mysql',
});

export default sequelize;