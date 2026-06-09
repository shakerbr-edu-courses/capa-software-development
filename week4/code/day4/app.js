import express from 'express';
import mysql from 'mysql2';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
}).promise();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.post('/register', async (req, res) => {
  const {  name, email, password, birthdate } = req.body;

  if (!name || !email || !password ) {
    return res.status(400).json({ error: 'name, email, and password are required' });
  }

  const [result] = await pool.query(
    'INSERT INTO users (name, email, password, birthdate) VALUES (?, ?, ?, ?)',
    [name, email, password, birthdate]
  );

  res.json({ message: 'You are registered successfully', userId: result.insertId });
});

app.listen(3003, () => {
  console.log('Server is running on port 3003');
});