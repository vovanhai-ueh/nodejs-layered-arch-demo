import * as mariadb from "mariadb";

export const config = {
    /*db_local: {
        host: "127.0.0.1",
        port: 3306,
        user: "root",
        password: "password",
        database: "enrolldb",
        createDatabaseIfNotExist:true
    }
    */
};
export const pool =
    mariadb.createPool({
        host: "xqt.h.filess.io",
        port: 3305,
        user: "enrolldb_everything",
        password: "you password here ????????",
        database: "enrolldb_everything",
        createDatabaseIfNotExist:true
    });