/*
KEYS:
- primary key: a column that is unique for each row, (unique id)
there is only 1PK and it is not null

- foreign key: columns in table that ref to another tables PK
FK can have duplicate and null values, multiple FKs

CONSTRAINTS:
- not null : col cannot have null values
- unique : all values in col are diff
-  primary key : makes col unique & not null
- foreign key : prevent actions that would destroy link betn tables
- default : sets the default value of col
- check : it can limit values allowed in col

*/

create database temp;
use temp;

create table temp1(
	rollno int primary key,	-- primary is also unique
    name varchar(15) not null,
    email varchar(20) unique
);

insert into temp1
values(40, "chetan", "chetan@gmail.com");
-- (41, "chaitanya" , "chetan@gmail.com"); --> duplicate entry

create table temp2(
	cust_id int,
    foreign key (rollno) references temp1(rollno),
    fname varchar(15),
    lname varchar(15),
    primary key (fname, lname),	-- combine PK
    salary int default 20000
);

insert into temp2
values(48, "chetan", "sonawane", 125000),
(42, "bhavesh", "sonawane", 9848);


-- check constraints

create table city(
	id int primary key,
    city varchar(50),
    age int,
    constraint age_check check (age>=18 and city= "shirpur")
);

select * from temp1;