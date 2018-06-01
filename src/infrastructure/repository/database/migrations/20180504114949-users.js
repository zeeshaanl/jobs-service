'use strict';

var dbm;
var type;
var seed;

/**
 * We receive the dbmigrate dependency from dbmigrate initially.
 * This enables us to not have to rely on NODE_PATH.
 */
exports.setup = function (options, seedLink) {
    dbm = options.dbmigrate;
    type = dbm.dataType;
    seed = seedLink;
};

exports.up = function (db) {
    const promises = [];
    promises.push(db.createTable('users', {
        columns: {
            id: {
                type: 'string',
                notNull: true,
                primaryKey: true
            },
            firstName: {
                type: 'string',
                length: '64',
                notNull: true
            },
            lastName: {
                type: 'string',
                length: '64',
                notNull: true
            },
            email: {
                type: 'string',
                length: '64',
                notNull: true
            }
        }
    }));
    return Promise.all(promises);
};

exports.down = function (db) {
    var promises = [];

    promises.push(db.dropTable('users'));

    return Promise.all(promises);
};

exports._meta = {
    "version": 1
};
