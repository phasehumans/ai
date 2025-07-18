create database walke;
use walke;

create table employee_info(
id int primary key,
name varchar(50),
salary int not null
);

insert into employee_info
values (01, "rahul", 50000),
(02, "sachin", 70000),
(03, "anant" , 150000);


select * from employee_info;