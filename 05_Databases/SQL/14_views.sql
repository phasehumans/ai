/*
a view is virtual table baesd on the result-set of sql statment

create view view1 as
select rollno, name from student;

select * from view1
*/

use college_db;

create view resultday as
select full_name, marks from student;

select * from resultday; -- result day act as virtual table
-- can use all query of table on virtual table (view)


select * from resultday
where marks > 80;

select * from resultday
where grades= "O";		-- error; no grades asign in view 