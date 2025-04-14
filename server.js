const express = require('express');
const mysql = require('mysql2');
const dotenv = require('dotenv');
const app = express();
const PORT = 3000;

dotenv.config();


// SQL Connection:

const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

connection.connect((err) => {
    if (err) {
        console.log('Error Connecting to the database:', err.stack);
        return;
    }
    console.log('Connected to the database as id ' + connection.threadId);
});



app.get('/', (req,res) => {
    res.send("This is SQL and EXPRESS Backend Connection");
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});