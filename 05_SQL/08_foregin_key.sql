/*
FOREIGN KEY: connects tables 
to see ER diagram (databases/reverse_engineer)

cascading for FK- sync
on delete cascade: if ref row deleted in parent then its delete in child table
on update cascade: parent update --> child update
*/

use college_db;

create table dept(
	id int primary key,
    name varchar(50)
    
);

create table teacher(
	id int primary key,
    name varchar(50),
    dept_id int,
    foreign key (dept_id) references dept(id)
    -- dept_id is FK ref tabele(PK)
    on delete cascade	-- sync
    on update cascade
);
