--Examine the three tables and find the column names.
SELECT * FROM trips;
SELECT * FROM riders;
SELECT * FROM cars;

--What’s the primary key of trips?
--The primary key of trips is id
--What’s the primary key of riders?
--The primary key of trips is id
--What’s the primary key of cars?
--The primary key of trips is id

--Try out a simple cross join between riders and cars
SELECT riders.first, riders.last, cars.model
FROM riders, cars;

--Suppose we want to create a Trip Log with the trips and its users.
--Find the columns to join between trips and riders and combine the two tables using a LEFT JOIN.
--Let trips be the left table
SELECT trips.date, 
   trips.pickup, 
   trips.dropoff, 
   trips.type, 
   trips.cost,
   riders.first, 
   riders.last,
   riders.username
FROM trips
LEFT JOIN riders 
  ON trips.rider_id = riders.id;

--Suppose we want to create a link between the trips and the cars used during those trips.
--Find the columns to join on and combine the trips and cars table using an INNER JOIN
SELECT *
FROM trips
JOIN cars
  ON trips.car_id = cars.id;

-- The new riders data are in! There are three new users this month.
--Stack the riders table on top of the new table named riders2
SELECT *
FROM riders
UNION
SELECT *
FROM riders2;

--What is the average cost for a trip?
SELECT ROUND(AVG(cost), 2)
FROM trips;

--REBU is looking to do an email campaign for all the irregular users.
--Find all the riders who have used REBU less than 500 times!
SELECT *
FROM riders
WHERE total_trips < 500
UNION
SELECT *
FROM riders2
WHERE total_trips < 500;

--Calculate the number of cars that are active
SELECT COUNT(*)
FROM cars
WHERE status = 'active';

--It’s safety recall time for cars that have been on the road for a while.
--Write a query that finds the two cars that have the highest trips_completed
SELECT *
FROM cars
ORDER BY trips_completed DESC
LIMIT 2;























