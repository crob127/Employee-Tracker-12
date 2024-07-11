INSERT INTO department (name) VALUES
('Sales'),
('Finance'),
('Engineering'),
('Human Resources');

INSERT INTO role (title, salary, department_id) VALUES
('Sales Representative', 120000, 1),
('Sales Manager', 130000, 1),
('CFO', 240000, 2),
('Associate Engineer', 100000, 3),
('Senior Engineer', 170000, 3),
('Recruiter', 80000, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES
('Bruce', 'Wayne', 1, NULL),
('Barry', 'Allen', 1, NULL),
('Peter', 'Parker', 3, NULL),
('Clark', 'Kent', 4, NULL),
('Natasha', 'Romanov', 5, NULL),
('Tony', 'Stark', 6, NULL);