/*
sub queries: is query within another sql query

select col
from table_name
where col_name operator
(subquery);

*/
use college_db;

select avg(marks)
from student;

select full_name, marks
from student
where marks > 86.2; -- not dynamic


-- sub queries WHERE

select name, marks
from student
where marks > (select avg(marks) from student);


-- sub queries FROM

select *
from student 
where city = "dhule";

select max(marks)
from ( select * from student where city= "dhule")
as temp; -- use alias for from sub queries
