CREATE DATABASE attendance;

USE attendance;

CREATE TABLE students (
  id INT PRIMARY KEY,
  name VARCHAR(150) NOT NULL,
  birth_date DATE DEFAULT NULL,
  gender CHAR(1) DEFAULT NULL
);

INSERT INTO students (id, name, gender) VALUES (1, 'Ali', 'm');
INSERT INTO students (name, id) VALUES ('Ahmed', 2);
INSERT INTO students VALUES (3, 'Sara', '1999-01-01', 'f');
INSERT INTO students (id, name, gender) VALUES (4, 'ALI', 'm');

-- Select all students
SELECT * FROM students;

-- Select all students with a specific columns
SELECT id, name FROM students;

-- Apply some SQL functions on the selected columns
SELECT id, name, LOWER(name), UPPER(name) FROM students;

-- Select specific records using WHERE
SELECT * FROM students WHERE id = 1;

-- Select students whose id is greater than 2
SELECT * FROM students WHERE id > 2;

-- Select students whose id is less than or equal to 2
SELECT * FROM students WHERE id <= 2;

-- Select students except id 1
SELECT * FROM students WHERE id != 1;

-- Select students whose gender is m
SELECT * FROM students WHERE gender = 'm';

-- Select students whose gender is f
SELECT * FROM students WHERE gender = 'f';

-- Select students when name is Ali
-- Since SQL is case inseniteve, it selects all the records regardless the case (Ali, ALI, aLI)
SELECT * FROM students WHERE name = 'ali';

-- Get the students when the gender is not specified.
SELECT * FROM students WHERE gender IS NULL;

-- Get the students when the gender is specified.
SELECT * FROM students WHERE gender IS NOT NULL;

-- Select students using IN
SELECT * 
FROM students 
WHERE id IN (1, 3, 4);

-- Select students whose id is NOT in the list
SELECT * 
FROM students 
WHERE id NOT IN (1, 3);

-- Select students whose name starts with A
SELECT * 
FROM students 
WHERE name LIKE 'A%';

-- Select students whose name ends with i
SELECT * 
FROM students 
WHERE name LIKE '%i';

-- Select students whose name contains li
SELECT * 
FROM students 
WHERE name LIKE '%li%';

-- Select students whose birth date is specified
SELECT * 
FROM students 
WHERE birth_date IS NOT NULL;

-- Select students using AND
SELECT * 
FROM students 
WHERE gender = 'm' AND id > 1;

-- Select students using OR
SELECT * 
FROM students 
WHERE id = 1 OR id = 3;

-- Sort students by name ascending
SELECT * 
FROM students 
ORDER BY name ASC;

-- Sort students by id descending
SELECT * 
FROM students 
ORDER BY id DESC;

-- Get only first 2 students
SELECT * 
FROM students 
LIMIT 2;

-- Skip first row and get next 2 rows
SELECT * 
FROM students 
LIMIT 2 OFFSET 1;

-- Count all students
SELECT COUNT(*) 
FROM students;

-- Count students whose gender is specified
SELECT COUNT(gender) 
FROM students;

-- Count students grouped by gender
SELECT gender, COUNT(*) 
FROM students
GROUP BY gender;

-- Show only groups having more than 1 student
SELECT gender, COUNT(*) 
FROM students
GROUP BY gender
HAVING COUNT(*) > 1;

-- Get the maximum id
SELECT MAX(id) 
FROM students;

-- Get the minimum id
SELECT MIN(id) 
FROM students;

-- Get average id
SELECT AVG(id) 
FROM students;

-- Get total of all ids
SELECT SUM(id) 
FROM students;

-- Count students for each gender
SELECT gender, COUNT(*) AS total_students
FROM students
GROUP BY gender;

-- Count students for each name
SELECT name, COUNT(*) AS total_students
FROM students
GROUP BY name;

-- Get the maximum id for each gender
SELECT gender, MAX(id) AS max_id
FROM students
GROUP BY gender;

-- Get the minimum id for each gender
SELECT gender, MIN(id) AS min_id
FROM students
GROUP BY gender;

-- Get average id for each gender
SELECT gender, AVG(id) AS average_id
FROM students
GROUP BY gender;

-- Group by gender and birth_date
SELECT gender, birth_date, COUNT(*) AS total_students
FROM students
GROUP BY gender, birth_date;
