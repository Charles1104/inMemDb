DROP table IF EXISTS employers CASCADE;

CREATE TABLE IF NOT EXISTS employers (
  id SERIAL PRIMARY KEY,
  employer VARCHAR(50) UNIQUE NOT NULL
);

INSERT INTO employers (employer)
  VALUES ('DevLeague'),
  ('Student'),
  ('N/A');


DROP table IF EXISTS users CASCADE;

CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(50) UNIQUE NOT NULL,
  age INTEGER NOT NULL,
  gender VARCHAR(1) NOT NULL,
  jobType VARCHAR(2) DEFAULT NULL,
  employer_id INTEGER NOT NULL REFERENCES employers(id)
);

INSERT INTO users (name, age, gender, jobType, employer_id)
  VALUES ('Alice', 12, 'f', 'st', 2),
  ('Bob', 21, 'm', 'dv',1),
  ('Claire', 56, 'f', 'dv',1),
  ('David', 9, 'm', 'na',3),
  ('Eric', 61, 'm', 'dv',1),
  ('Fred', 45, 'm', 'dv',1),
  ('George', 38, 'm', 'dv',1),
  ('Hannah', 15, 'f', 'na',3),
  ('Ilona', 17, 'f', 'st',2),
  ('Jake', 27, 'm', 'dv',1),
  ('Kathy', 8, 'f', 'na',3),
  ('Liam', 20, 'm', 'st',2);


SELECT * FROM users
WHERE id = 2;

SELECT * FROM users
  WHERE age =
    (SELECT MIN(age) FROM users);

SELECT * FROM users
  WHERE age =
    (SELECT MAX(age) FROM users);

SELECT * FROM users
  WHERE gender = 'm';

SELECT * FROM users
  WHERE gender = 'f';

SELECT * FROM users
  ORDER BY jobType;

SELECT users.name, users.age, users.gender, employers.employer
  FROM users
  INNER JOIN employers ON users.employer_id = employers.id
  ORDER BY employer, users.id;



