-- 1. List all students
SELECT *
FROM students;

-- 2. Show only female students
SELECT *
FROM students
WHERE gender = 'f';

-- 3. Show all courses
SELECT *
FROM courses;

-- 4. Show all schedules sorted by date
SELECT *
FROM schedules
ORDER BY date;

-- 5. Show all absent attendance records
SELECT *
FROM attendances
WHERE status = 3;

-- =====================================================
-- INNER JOIN Queries
-- =====================================================

-- 6. Show student names with their course names
SELECT
    s.name AS student_name,
    c.name AS course_name
FROM students s
INNER JOIN courses c ON c.id = s.course_id;

-- 7. Show teacher names with their course names
SELECT
    t.name AS teacher_name,
    c.name AS course_name
FROM teachers t
INNER JOIN courses c ON c.id = t.course_id;

-- 8. Show schedule date, teacher name, and course name
SELECT
    sc.date,
    t.name AS teacher,
    c.name AS course
FROM schedules sc
INNER JOIN teachers t ON t.id = sc.teacher_id
INNER JOIN courses c ON c.id = sc.course_id;

-- 9. Show attendance details with student names
SELECT
    s.name AS student,
    a.session,
    a.status
FROM attendances a
INNER JOIN students s ON s.id = a.student_id;

-- 10. Show all students and their teacher
SELECT
    s.name AS student,
    t.name AS teacher
FROM students s
INNER JOIN teachers t ON t.course_id = s.course_id;

-- =====================================================
-- Aggregate Functions
-- =====================================================

-- 11. Count students in each course
SELECT
    c.name,
    COUNT(*) AS total_students
FROM students s
INNER JOIN courses c ON c.id = s.course_id
GROUP BY c.id, c.name;

-- 12. Count teachers per course
SELECT
    c.name,
    COUNT(*) AS total_teachers
FROM teachers t
INNER JOIN courses c ON c.id = t.course_id
GROUP BY c.id, c.name;

-- 13. Count schedules per course
SELECT
    c.name,
    COUNT(*) AS total_schedules
FROM schedules s
INNER JOIN courses c ON c.id = s.course_id
GROUP BY c.id, c.name;

-- 14. Count absent students
SELECT COUNT(*) AS total_absent
FROM attendances
WHERE status = 3;

-- 15. Count attendance records by status
SELECT
    status,
    COUNT(*) AS total
FROM attendances
GROUP BY status;

-- =====================================================
-- Reporting Queries
-- =====================================================

-- 16. Show all absent students with course name and date
SELECT
    st.name AS student,
    c.name AS course,
    sc.date
FROM attendances a
INNER JOIN students st ON st.id = a.student_id
INNER JOIN schedules sc ON sc.id = a.schedule_id
INNER JOIN courses c ON c.id = sc.course_id
WHERE a.status = 3;

-- 17. Show attendance percentage for each student
SELECT
    s.name,
    ROUND(
        SUM(CASE WHEN a.status = 1 THEN 1 ELSE 0 END)
        * 100.0 / COUNT(*),
        2
    ) AS attendance_percentage
FROM students s
INNER JOIN attendances a ON a.student_id = s.id
GROUP BY s.id, s.name;

-- 18. Find the student with the most absences
SELECT
    s.name,
    COUNT(*) AS absences
FROM students s
INNER JOIN attendances a ON a.student_id = s.id
WHERE a.status = 3
GROUP BY s.id, s.name
ORDER BY absences DESC
LIMIT 1;

-- 19. Show total absences per course
SELECT
    c.name,
    COUNT(*) AS absences
FROM attendances a
INNER JOIN schedules sc ON sc.id = a.schedule_id
INNER JOIN courses c ON c.id = sc.course_id
WHERE a.status = 3
GROUP BY c.id, c.name;

-- 20. Show students who never missed a session
SELECT
    s.name
FROM students s
WHERE s.id NOT IN (
    SELECT student_id
    FROM attendances
    WHERE status = 3
);

-- =====================================================
-- Advanced Queries
-- =====================================================

-- 21. Find the course with the highest attendance rate
SELECT
    c.name,
    ROUND(
        SUM(CASE WHEN a.status = 1 THEN 1 ELSE 0 END)
        * 100.0 / COUNT(*),
        2
    ) AS attendance_rate
FROM attendances a
INNER JOIN schedules sc ON sc.id = a.schedule_id
INNER JOIN courses c ON c.id = sc.course_id
GROUP BY c.id, c.name
ORDER BY attendance_rate DESC
LIMIT 1;

-- 22. Find students absent more than once
SELECT
    s.name,
    COUNT(*) AS absences
FROM students s
INNER JOIN attendances a ON a.student_id = s.id
WHERE a.status = 3
GROUP BY s.id, s.name
HAVING COUNT(*) > 1;

-- 23. Show the teacher whose students have the highest attendance rate
SELECT
    t.name,
    ROUND(
        SUM(CASE WHEN a.status = 1 THEN 1 ELSE 0 END)
        * 100.0 / COUNT(*),
        2
    ) AS attendance_rate
FROM teachers t
INNER JOIN schedules sc ON sc.teacher_id = t.id
INNER JOIN attendances a ON a.schedule_id = sc.id
GROUP BY t.id, t.name
ORDER BY attendance_rate DESC
LIMIT 1;

-- 24. Show attendance summary per student
SELECT
    s.name,
    SUM(CASE WHEN a.status = 1 THEN 1 ELSE 0 END) AS present,
    SUM(CASE WHEN a.status = 2 THEN 1 ELSE 0 END) AS late,
    SUM(CASE WHEN a.status = 3 THEN 1 ELSE 0 END) AS absent,
    SUM(CASE WHEN a.status = 4 THEN 1 ELSE 0 END) AS excuse
FROM students s
INNER JOIN attendances a ON a.student_id = s.id
GROUP BY s.id, s.name;

-- 25. Find students whose attendance rate is below 75%
SELECT
    s.name,
    ROUND(
        SUM(CASE WHEN a.status = 1 THEN 1 ELSE 0 END)
        * 100.0 / COUNT(*),
        2
    ) AS attendance_rate
FROM students s
INNER JOIN attendances a ON a.student_id = s.id
GROUP BY s.id, s.name
HAVING attendance_rate < 75;