/*
UPDATE: to update existing rows

update table_name
set col1= val1, col2= val2
where condn
*/
use college_db;

update student
set grade= "O"
where grade = "A";

-- off safe mode to update err
set sql_safe_updates= 0;

select * from student;

update student 
set marks= 75
where name= "chetan";

update student
set marks= marks + 1;


/*
DELETE : to delete existing rows

delete from table_name
where condn
*/

delete from student
where name = "sachin"