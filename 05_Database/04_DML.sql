create database college_db;
use college_db;

create table student(
	rollno int primary key,
    name varchar(50),
    marks int not null,
    grade varchar(1),
    city varchar(20)
);

insert into student
(rollno, name, marks, grade, city)
values
(1, "chetan", 79, "B", "dondaicha"),
(2, "anant", 88, "A", "donadicha"),
(3, "bhavesh", 79, "B", "nashik"),
(4, "kaustubh", 85, "A", "jaipur"),
(5, "kalpesh" , 90, "A", "dhule"),
(6, "mayur", 90, "A", "pune");

insert into student
values
(7, "sanket", 90, "A", "dhule");

select * from student;

/*
SELECT --> used to select any data from the db

select col1, col2 from table_nam
select * from table_name -- all col *

DISTINCT --> non repeat values
select distinct col from table_name --> distinct for non repeat
*/

select name, city from student;
select * from student;
select distinct city from student;

/*
WHERE --> to define some condn

select col1, col2 from table_name 
where condn;

operators in WHERE:

arthmetic: +,-,*,/,%
comparision: =, !=, >, >=, <, <=
logical: and, or, not, in, between, all, like, any
bitwise: & (and), | (or)
*/

select * from student where marks > 85;
select * from student where city = "dhule";

-- operator
select * from student where marks > 80 and city= "dhule";
select * from student where marks > 80 or city= "dhule";

select * from student where marks between 80 and 90;

select * from student where city in ("dhule", "jaipur");

select * from student where city not in  ("dhule", "jaipur");


/*
LIMIT: sets upper limit on number of rows to be returned

select col1, col2 from table_name
limit number;
*/

select * from student limit 4;
select * from student where marks>80 limit 2;



/*
ORDER BY: to sort ascending ASC or descending DESC
*/

select * from student
where marks > 80 order by marks desc;
