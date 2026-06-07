# Day 2 — REST API with Express & MySQL

A small Express server that exposes a **students** resource over HTTP. This project demonstrates the core ideas of a REST-style API: using HTTP methods for actions and clear, predictable URL naming.

## Getting started

```bash
npm install
npm run dev
```

The server runs at `http://localhost:3000`. Use the included `api.http` file with the [REST Client](https://marketplace.visualstudio.com/items?itemName=humao.rest-client) VS Code extension to send requests.

---

## Core REST API concepts

A REST API treats your data as **resources** (things like students, courses, or users). Each resource has a URL, and you perform operations on it using standard **HTTP methods**.

The API does not embed the action in the URL. Instead, the **method** tells the server what to do, and the **URL** tells it which resource to act on.

| HTTP method | Purpose | Example in this project |
|-------------|---------|-------------------------|
| `GET` | Read data — list a collection or fetch one item | `GET /students`, `GET /students/2` |
| `POST` | Create a new item in a collection | `POST /students` |
| `PUT` / `PATCH` | Update an existing item | `PUT /students/2` *(not yet implemented)* |
| `DELETE` | Remove an item | `DELETE /students/2` *(not yet implemented)* |

### Method rules of thumb

- **GET** — Safe and read-only. Never changes data on the server.
- **POST** — Creates something new. Send the new record in the request body (JSON).
- **PUT / PATCH** — Updates an existing record. `PUT` typically replaces the whole record; `PATCH` updates only the fields you send.
- **DELETE** — Removes a record. Usually no request body is needed.

---

## Naming conventions

### Use nouns, not verbs

URLs name **resources**, not actions. The HTTP method already expresses the action.

| ❌ Avoid | ✅ Prefer |
|---------|----------|
| `GET /getStudents` | `GET /students` |
| `POST /createStudent` | `POST /students` |
| `GET /deleteStudent/2` | `DELETE /students/2` |

### Use plural names for collections

Collections are named in the plural. A single item is the same path with an identifier.

```
/students        → the collection (all students)
/students/2      → one student with id 2
```

### Use lowercase and hyphens for multi-word names

```
/students
/course-enrollments
/attendance-records
```

| ❌ Avoid | ✅ Prefer |
|---------|----------|
| `/courseEnrollments` (camelCase) | `/course-enrollments` |
| `/course_enrollments` (snake_case) | `/course-enrollments` |

### Identify a single resource with a path parameter

Use `:id` (or a similar unique key) in the path to target one record:

```
GET    /students/:id
PUT    /students/:id
DELETE /students/:id
```

In Express, `req.params.id` gives you the value from the URL (e.g. `2` from `/students/2`).

### Nest resources only when there is a clear parent–child relationship

When one resource belongs to another, nesting can make the relationship obvious:

```
GET /courses/1/students     → students in course 1
```

For simple CRUD on a top-level resource, a flat path is enough:

```
GET /students?course_id=1   → filter by query parameter (also valid)
```

### Send data in the body for create and update

For `POST`, `PUT`, and `PATCH`, send JSON in the request body with `Content-Type: application/json`:

```json
{
  "name": "Blind Adam",
  "gender": "m",
  "course_id": 1
}
```

---

## Endpoints in this project

| Method | URL | Action |
|--------|-----|--------|
| `GET` | `/` | Health / welcome message |
| `GET` | `/students` | List all students |
| `GET` | `/students/:id` | Get one student by id |
| `POST` | `/students` | Create a new student |

### Example responses

**List students** — `GET /students`

Returns a JSON array of student records.

**Show one student** — `GET /students/2`

Returns a single student object, or `404` if not found.

**Create a student** — `POST /students`

Returns the new record (including the generated `id`) on success.

---

## HTTP status codes

REST APIs use status codes to describe the outcome:

| Code | Meaning | Typical use |
|------|---------|-------------|
| `200` | OK | Successful `GET`, `PUT`, or `PATCH` |
| `201` | Created | Successful `POST` (resource created) |
| `404` | Not Found | Resource does not exist |
| `500` | Internal Server Error | Database or server failure |

---

## Project structure (reference)

As the project grows, routes and handlers are often split into separate files, but in this project, we will keep it simple and in one file:

```
day2/
├── app.js              # Server setup, database connection
└── api.http            # Sample HTTP requests for testing
```
