const Sequelize = require('sequelize');
const Op = Sequelize.Op;

export default class SequelizePostgresDatabaseInit {
    constructor() {
        this.sequelizeInstance = new Sequelize(process.env.PG_DB_SCHEMA, process.env.PG_DB_USERNAME, process.env.PG_DB_PASSWORD, {
            host: process.env.PG_DB_HOST,
            dialect: 'postgres',
            operatorsAliases: Op
        });
        this.op = Op;
        this.sequelize = Sequelize;
    }
}
