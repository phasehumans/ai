use college_db;

select city, avg (marks) 
from student
group by city 
order by avg(marks) asc;

/*
select mode, count(mode)
from payment
group by mode;
*/