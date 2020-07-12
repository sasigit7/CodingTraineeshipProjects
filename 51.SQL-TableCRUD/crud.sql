--Create a table named friends with three columns:
--id that stores INTEGER
--name that stores TEXT
--birthday that stores DATE
CREATE TABLE friends (
  id INTEGER,
  name TEXT,
  birthday DATE
);

--Beneath your current code, add Jane Doe to friends.
--Her birthday is May 30th, 1990.
INSERT INTO friends(id, name, birthday)
VALUES (1, 'Jane Doe', '1990-05-30');

--Add two of your friends to the table.
--Insert an id, name, and birthday for each of them
INSERT INTO friends(id, name, birthday)
VALUES (2, 'Chaks', '1988-09-28');

INSERT INTO friends(id, name, birthday)
VALUES (3, 'Chuks', '1983-11-09');

--Let’s make sure that Jane and two other friends has been added to the database:
SELECT * FROM friends;

--Jane Doe just got married! Her new last name is “Smith”.
--Update her record in friends.
UPDATE friends
SET name = 'Jane Smith'
WHERE id = 1;

--Display Updated table
SELECT * FROM friends;

--Add a new column named email
ALTER TABLE friends
ADD COLUMN email TEXT;

--Display Updated table
SELECT * FROM friends;

--Update the email address for everyone in your table.
UPDATE friends
SET email = 'jane@codecademy.com'
WHERE id = 1;

UPDATE friends
SET email = 'chaks@codecademy.com'
WHERE id = 2;

UPDATE friends
SET email = 'chuks@codecademy.com'
WHERE id = 3;

--Display Updated table
SELECT * FROM friends;

--Wait, Jane Smith is not a real person.
--Remove her from friends
DELETE FROM friends
WHERE id = 1;

--Display Updated table
SELECT * FROM friends;





















