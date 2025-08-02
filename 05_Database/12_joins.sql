/*
JOINS: to combine row from two or more tables, baesd on related col betn them

Types of joins:
1. inner join: common data from A and B
2. left join: data from A(L) table and overlap data from B(R)
3. right join: data from B table and overlap data from A
4. full join: combine data from A and B

*/

/*
inner join: returns records that have matching value in both tables

select column
from tableA
inner join tableB
on tableA.col_name= tableB.col_name		

col_name--> same col in both tables/ compare col

can use alises 
from tableA as tA
tA.col_name
*/

/*
left join: returns all records from left table and
matched records from the right table

select col
from tableA
left join tableB
on tableA.col_name=  tableB.col_name;


left exclusive join: 

left join
where tableB.col_name is null
*/

/*
right join: returns all records from right table and matched records from 
the left table

select col
from tableB as tB
right join tableA as tA
on tB.col_name= tA.col_name

it is req col_name col should be same or same name,
it may differ, col are matched


right excluisve join:

right join
where tableA.col_name is null
*/


/*
full join: returns all records, if no values then null 

left join 
union	-- unique values only
right join


union --> returns unique values
union all --> returns duplicate values
*/

/*
self join : it is regular join but the table is joined with itself

select col
from tableA
join tableB
on tableA.col_name= tableB.col_name

*/


