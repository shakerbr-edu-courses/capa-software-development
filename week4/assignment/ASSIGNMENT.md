# Week 4 Assignment

## Student Information API

### Objective

Create a simple backend application using Node.js and Express.js that provides information about students through API routes.

---

# Requirements

Create a new Express.js project.

The project structure should be:

```text
student-api/
│
├── package.json
└── app.js
```

---

# Task 1 - Create Express Server

Create an Express server that runs on:

```text
http://localhost:3000
```

When visiting:

```text
/
```

Display:

```text
Welcome to Student API
```

---

# Task 2 - Create Student Route

Create the following route:

```text
GET /student
```

Return:

```json
{
  "id": 1,
  "name": "Your Name",
  "department": "IT"
}
```

Replace `"Your Name"` with your actual name.

---

# Task 3 - Create About Route

Create:

```text
GET /about
```

Return:

```json
{
  "course": "Full-Stack Application Development",
  "week": 4,
  "topic": "Backend Fundamentals"
}
```

---

# Task 4 - Create Skills Route

Create:

```text
GET /skills
```

Return:

```json
[
  "HTML",
  "CSS",
  "JavaScript",
  "Node.js"
]
```

---

# Task 5 - Create Students Route

Create:

```text
GET /students
```

Return an array containing at least three students.

Example:

```json
[
  {
    "id": 1,
    "name": "Ali"
  },
  {
    "id": 2,
    "name": "Sara"
  },
  {
    "id": 3,
    "name": "Ahmed"
  }
]
```

---

# Task 6 - Test All APIs

Use the REST Client extension.

Test:

```http
GET http://localhost:3000/
```

```http
GET http://localhost:3000/student
```

```http
GET http://localhost:3000/about
```

```http
GET http://localhost:3000/skills
```

```http
GET http://localhost:3000/students
```

Make sure all routes work correctly.

---

## Submission

Send me A public GitHub repository URL via email: [dilovan.salahadeen@auk.edu.krd](mailto:dilovan.salahadeen@auk.edu.krd)

---

## Deadline

The deadline for this assignment is **Thursday, June 18, 2026 before 12:00 midnight**. Please make sure to submit your work before the deadline.

# Important Notes

* No database is required for this assignment.
* Write the code yourself.
* Test every route before submitting.
* Use meaningful commit messages when pushing to GitHub.
* Making mistakes is part of learning.

Good luck and happy coding!
