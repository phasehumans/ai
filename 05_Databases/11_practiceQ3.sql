use college_db;

alter table student
change column name full_name varchar(50) not null;
-- change to rename and modify to modify datatype

alter table student
drop column grade;

-- turn off safe mode
delete from student
where marks > 80;