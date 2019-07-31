/**
 * Datastores
 * (sails.config.datastores)
 *
 * A set of datastore configurations which tell Sails where to fetch or save
 * data when you execute built-in model methods like `.find()` and `.create()`.
 *
 *  > This file is mainly useful for configuring your development database,
 *  > as well as any additional one-off databases used by individual models.
 *  > Ready to go live?  Head towards `config/env/production.js`.
 *
 * For more information on configuring datastores, check out:
 * https://sailsjs.com/config/datastores
 */
const sqlite3 = require('sqlite3');

module.exports.datastores = {


  default: {

    //adapter: 'sails-mysql',
    //url: 'mysql://root:root@127.0.0.1:32771/ratonDB',

    adapter: 'sails-sqlite3',
    filename: 'equipos.db',
    mode: sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE,
    verbose: false
  },


};
