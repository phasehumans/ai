/*
ALTER: to change schema

add column:
alter table table_name
add column col_name data type constraint
   
drop column:
alter table table_name
drop column col_name

rename table:
alter table table_name
rename to new_name

change column : rename col
alter table table_name
change column old_name new_name new_datatype new_constraints;

modify column : modify datatype and constraint 
alter table table_name
modify col_name new_datatype new_constraint;


*/

use college_db;
select * from student;

alter table student
add column age int;

alter table student 
drop column age;

alter table student
rename to students;

alter table students
rename to student;



alter table student
add column age int;

alter table student
change column age ages int;

alter table student
modify ages varchar(3);

alter table student 
drop column ages;



/*
TRUNCATE : to delete tables data

drop delete table
truncate delete tables data

truncate table table_name;
*/


