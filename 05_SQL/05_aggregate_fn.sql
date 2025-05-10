/*
Aggregate fn : perform caln on set of values and return single value.
count()
max()
min()
sum()
avg()


*/

use college_db;

select count(marks) from student;
select avg(marks) from student;
select max(marks) from student;
select min(marks) from student;
select sum(marks) from student;


/*
GROUP BY: groups rows that have the same values into summary rows.
groups the result by one or multi col
*/

select city, count(name)
from student
group by city;



/*
HAVING : used when we want to apply condn after grouping

*/

select city, count(name)
from student
group by city
having max(marks)>85


/*
general order of commands:
select col/cols
from table_name
where condn	--- codn on rows
group by col/cols
having condn	--- codn on groups/ cols
order by cols ASC
*/
