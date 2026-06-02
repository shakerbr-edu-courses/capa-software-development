INSERT INTO courses (id, name, classroom) VALUES
(1, 'Software Development', 'Lab 137'),
(2, 'Marketing and Social Media', 'Lab 134'),
(3, 'Graphic Design', 'Lab 130');

INSERT INTO teachers (id, name, course_id) VALUES
(1, 'Dilovan Matini', 1),
(2, 'Ahmed Ali', 2),
(3, 'Kawa Ghazi', 3);

INSERT INTO students (id, name, gender, course_id) VALUES
(1, 'Ali Kareem', 'm', 1),
(2, 'Dilan Ahmad', 'f', 1),
(3, 'Omar Hasan', 'm', 1),
(4, 'Shivan Ali', 'm', 1),

(5, 'Sara Ibrahim', 'f', 2),
(6, 'Ahmed Aziz', 'm', 2),
(7, 'Rojin Khalid', 'f', 2),
(8, 'Baran Ahmed', 'm', 2),

(9, 'Zainab Omar', 'f', 3),
(10, 'Mohammed Ali', 'm', 3),
(11, 'Ava Karim', 'f', 3),
(12, 'Hiwa Salih', 'm', 3);

INSERT INTO schedules (id, course_id, teacher_id, date) VALUES
(1, 1, 1, '2026-05-01'),
(2, 1, 1, '2026-05-03'),

(3, 2, 2, '2026-05-02'),
(4, 2, 2, '2026-05-04'),

(5, 3, 3, '2026-05-01'),
(6, 3, 3, '2026-05-03');

-- Attendance
-- status:
-- 0 = Undefined
-- 1 = Present
-- 2 = Late
-- 3 = Absent
-- 4 = Execuse

INSERT INTO attendances (schedule_id, student_id, session, status) VALUES

-- Schedule 1 (Software Development)
(1, 1, 'S1', 1),
(1, 2, 'S1', 1),
(1, 3, 'S1', 3),
(1, 4, 'S1', 1),

-- Schedule 2 (Software Development)
(2, 1, 'S2', 1),
(2, 2, 'S2', 3),
(2, 3, 'S2', 1),
(2, 4, 'S2', 1),

-- Schedule 3 (Marketing and Social Media)
(3, 5, 'S1', 1),
(3, 6, 'S1', 1),
(3, 7, 'S1', 1),
(3, 8, 'S1', 3),

-- Schedule 4 (Marketing and Social Media)
(4, 5, 'S2', 1),
(4, 6, 'S2', 3),
(4, 7, 'S2', 1),
(4, 8, 'S2', 1),

-- Schedule 5 (Graphic Design)
(5, 9, 'S1', 1),
(5, 10, 'S1', 1),
(5, 11, 'S1', 3),
(5, 12, 'S1', 1),

-- Schedule 6 (Graphic Design)
(6, 9, 'S2', 1),
(6, 10, 'S2', 1),
(6, 11, 'S2', 1),
(6, 12, 'S2', 3);