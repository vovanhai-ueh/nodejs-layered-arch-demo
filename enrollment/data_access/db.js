import * as mariadb from 'mariadb'
import {config,pool} from './db_config.js'

//query data (SELECT query) - return a dataset
export async function query(sql, params) {
    // const connection = await mariadb.createConnection(config.db);
    const [results,] = await pool.query(sql, params);
    return results;
}
//execute NON-QUERY statement (return number of effected rows)
export async function execute(sql, params) {
    // const connection = await mariadb.createConnection(config.db);
    // return await connection.execute(sql, params);
    return await pool.execute(sql, params);
}