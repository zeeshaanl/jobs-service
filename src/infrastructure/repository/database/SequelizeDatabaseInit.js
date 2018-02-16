const Sequelize = require('sequelize');
const Op = Sequelize.Op;

export default class SequelizeDatabaseInit {
    constructor() {
        const sequelize = new Sequelize('jobiLocal', 'root', 'password', {
            host: 'localhost',
            dialect: 'mysql',
            operatorsAliases: Op
        });

        this.jobs = sequelize.define('jobs', {
            id: { type: Sequelize.INTEGER, primaryKey: true },
            title: {
                type: Sequelize.STRING
            },
            companyName: {
                type: Sequelize.STRING
            },
            description: {
                type: Sequelize.STRING
            },
            applyLink: {
                type: Sequelize.STRING
            },
            city: {
                type: Sequelize.STRING
            },
            tags: {
                type: Sequelize.STRING
            }
        }, {
            timestamps: false
        });
        this.op = Op;
        this.sequelize = Sequelize;
    }
}

// Jobs
//     .create({ id: 124, name: 'Bob Doe', title: 'junior engineer' })
//     .then(employee => {
//         console.log(employee.get('name')); // John Doe (SENIOR ENGINEER)
//         console.log(employee.get('title')); // SENIOR ENGINEER
//     });
//
// console.log(Jobs);
//
// sequelize
//     .authenticate()
//     .then(() => {
//         console.log('Connection has been established successfully.');
//     })
//     .catch(err => {
//         console.error('Unable to connect to the database:', err);
//     });