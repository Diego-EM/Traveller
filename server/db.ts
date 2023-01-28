import mysql2, { Connection, QueryError } from "mysql2";
import dotenv from "dotenv";

dotenv.config();

const {
    DB_NAME,
    DB_USER,
    DB_PASSWORD,
    DB_HOST
} = process.env

const connection: Connection = mysql2.createConnection({
    user: DB_USER,
    password: DB_PASSWORD,
    host: DB_HOST,
    database: DB_NAME,
})

connection.connect((err: QueryError | null)=> {
    if (err)
        console.error(`Error connecting to database: ${err.message}`);
    else
        console.log(`Connected to db: ${DB_NAME}`);
})

export default connection;