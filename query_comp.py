#where queries are made based on posts
from sqlalchemy import create_engine
from sqlalchemy import sql
from datetime import datetime, date
from dateutil.parser import parse
from namus import config



#take date params and inspect them to make a query that goes across date year ranges




#creates a query that chooses the correct date table


def table_year(date):

    date = parse(date)
    year = date.year
    

    if(year <= 2019 and year >= 2010):
        table = '{}_countypop'.format(year)

    return table


def insert_table(query, date):

    print("before formatting:"  + query)

    query.format(date, date, date)

    print("aftre formatting:"  + query)


    return query
