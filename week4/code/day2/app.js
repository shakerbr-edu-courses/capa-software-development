const express = require('express');
const app = express();

const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '0000',
    database: 'attendance'
});

connection.connect((err) => {
    console.log('Connected to DB');
});

app.get('/', (req, res) => {
    res.send('Hello CAPA Students!');
});

app.get('/students', (req, res) => {
    connection.query('SELECT id, name FROM students', (err, results) => {
        if (err) {
            console.error('Error:', err);
            res.status(500).send('Error in DATABASE');
        } else {
            res.json(results);
        }
    });
});

app.get('/students/:id', (req, res) => {
    const studentId = req.params.id;
    connection.query(
        'SELECT id, name FROM students WHERE id = ?',
        [studentId],
        (err, results) => {
            if (err) {
                console.error('Error:', err);
                res.status(500).send('Error in DATABASE');
            } else {
                if (results.length > 0) {
                    res.json(results[0]);
                } else {
                    res.status(404).send('Student not found');
                }
            }
    });
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});