import mysql from "mysql2";

export const db = mysql.createConnection({
    host:"some-mysql",
    user: "root",
    password:"1234",
    database:"mydevify_social",
    port:"3306"
}) 