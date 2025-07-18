/*
types of SQL commands:
DDL: create, alter, rename, truncate, drop
DQL: select
DML: insert, update, delete
DCL: grant & revoke permission to users
TCL: start transaction, commit, rollback
*/

-- create db
create database student_db;
create database college_db;
create database college;
create database if not exists college;

-- delete db
drop database college_db;
drop database student_db;
drop database if exists colleges_db;

-- schema define
use college;
create table student(
	-- primary key is not null
    -- column_name datatype constraint
	id int primary key,
    name varchar(50),
    age int not null
);

-- insert into table_name
insert into student

-- values (col1_v1, col2_v1),
-- (col2_v1, col2_v1);
values(1,"chaitanya", 21),
(2, "anant", 20),
(3, "sachin",20),
(4, "bhavesh",21);

insert into student
values(5, "kaustubh", 21);

-- select * from table_name;
-- * all (prints student table)
select * from student;

show databases;
show tables;	-- shows all table from selected db

/*
SQL datatypes: 

char- reserve all memory space (memory waste)
varchar- reserve req ones and free remaining
blob- stores large binary obj
int- stores integer

bit- bit values (0,1)
float- decimal values
double- big decimal values
boolean- t/f
date- date
year- year in 4 digit format (2025)

unsigned- positive values only, increase range
signed- postive or negative

*/