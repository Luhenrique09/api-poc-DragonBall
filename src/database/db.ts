import pg from "pg";

const {Pool} = pg;

export const connectionDB = new Pool({
    host: 'localhost',
    port: 5432,
    user: 'postgres',
    password: 'luiz',
    database: 'dragonball'
});