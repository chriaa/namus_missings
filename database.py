from sqlalchemy import create_engine
from sqlalchemy import sql
from datetime import datetime, date
from dateutil.parser import parse
from namus import config, query_comp

#import pyodbc


engine = create_engine(config.database_uri)



def get_date(year):
  STARTDATE = datetime(year=year, month=1, day=1)
  ENDDATE = datetime(year=year, month=12, day=31, hour=0, minute=0, second=1)

  return STARTDATE, ENDDATE





#################################################### PEOPLE ############################################################
#Get all people in a given region along with links to their cases 

def get_people(body):
    with engine.connect() as con:
        rs = con.execute("""SELECT TOP (1)   first_name,
          middle_name,
          last_name,
          current_age_to,
          current_age_from,
          computed_missing_age_min,
          computed_missing_age_max,
          city,
          full_county_name,
          full_state_name
        FROM [namusdb].[dbo].[namus-missings]""")
        return [dict(row) for row in rs]



#################################################### STATS ###################################################

#get top counties represented within the database
def get_raw_frequency_count():

  with engine.connect() as con:
    query = sql.text("""
    SELECT TOP (50) full_county_name, state, count(*) as frequentCount 
    FROM [namusdb].[dbo].[namus-missings]
    WHERE newdate >= '2010-01-01' and newdate <= '2019-12-31'
    GROUP BY full_county_name, state ORDER BY frequentCount desc; 
    """)
    rs = con.execute(query)
    results = [dict(row) for row in rs]
    return results

#get top county with disappearances by year
def get_raw_frequency_count_by_year(start_date, end_date):

  with engine.connect() as con:
    query = sql.text("""
    SELECT TOP (25) full_county_name,  state_name, count(*) as frequentCount 
    FROM [namusdb].[dbo].[namus-missings]
    WHERE newdate >= :start and newdate <= :end
    GROUP BY full_county_name, [state_name] ORDER BY frequentCount desc; 
    """)
    rs = con.execute(query, start = start_date, end = end_date)
    results = [dict(row) for row in rs]
    return results

#get top counties within the united states with highest missing person rates
def get_top_frequency_rates_county(start_date, end_date):
  year = query_comp.table_year(start_date)
  q = """
    SELECT TOP(20) full_county_name as county, full_state_name as state_name, count([full_county_name]) as number_missing, count([full_county_name])/[{}] as frequentCount, [{}] as county_population
    FROM namusdb.dbo.[namus-missings] LEFT JOIN namusdb.dbo.countypop_10_19
	  ON namusdb.dbo.[namus-missings].full_county_name = namusdb.dbo.countypop_10_19.county_name AND namusdb.dbo.[namus-missings].full_state_name = namusdb.dbo.countypop_10_19.state_name
    WHERE newdate >= :start and newdate <= :end
    GROUP BY full_county_name,  [{}], full_state_name
    ORDER BY frequentCount desc;
    """.format(year, year, year)
 

  with engine.connect() as con:
    query = sql.text(q)
    rs = con.execute(query, start = start_date, end = end_date)
    results = [dict(row) for row in rs]
    return results





################################################ REGION SPECIFIC ###########################################################




#Get a specific county and cities within that county
def get_county_frequencies(state, county, st, et):
  year = query_comp.table_year(st)
  print(year)
 
  q =       """
          SELECT TOP(20) city, count(city) as city_counts
          FROM namusdb.dbo.[namus-missings] LEFT JOIN namusdb.dbo.countypop_10_19
          ON namusdb.dbo.[namus-missings].full_county_name = namusdb.dbo.countypop_10_19.county_name AND namusdb.dbo.[namus-missings].full_state_name = namusdb.dbo.countypop_10_19.state_name
          WHERE newdate >= :date_range_to and newdate <= :date_range_from and full_state_name = :state_name and full_county_name = :county_name
          GROUP BY full_county_name,  [{}], full_state_name, city
          ORDER BY city_counts;
        
  """.format(year)
   
  with engine.connect() as con:
    query = sql.text(q)
    st = parse(st)
    et = parse(et)
    rs = con.execute(query, state_name = state, county_name = county, date_range_to = st, date_range_from= et).fetchall()
   
    results = [dict(row) for row in rs]
    return results

#Get state breakdown by population size
def get_state_frequencies(state, start, end):
 
  year = query_comp.table_year(start)
  print(year)
 
  q = """
    SELECT TOP(20) full_county_name, count([full_county_name]) as number_missing, count([full_county_name])/[{}] as ratio, [{}] as county_population
    FROM namusdb.dbo.[namus-missings] LEFT JOIN namusdb.dbo.countypop_10_19
	  ON namusdb.dbo.[namus-missings].full_county_name = namusdb.dbo.countypop_10_19.county_name AND namusdb.dbo.[namus-missings].full_state_name = namusdb.dbo.countypop_10_19.state_name
    WHERE full_state_name = :state_name and newdate >= :start_date and newdate <= :end_date
    GROUP BY full_county_name, [{}]
    ORDER BY ratio desc;
  """.format(year, year ,year)
  with engine.connect() as con:
    query = sql.text(q)

    st = parse(start)
    et = parse(end)

    rs = con.execute(query,state_name = state, start_date = st.date(), end_date = et.date() ).fetchall()
   
    return [dict(row) for row in rs]

def get_all_states():
  with engine.connect() as con:
    query = sql.text("""
        SELECT full_state_name
        FROM namusdb.dbo.[namus-missings]
        GROUP BY full_state_name
        ORDER BY full_state_name

    """)
    rs = con.execute(query).fetchall()    
    return [dict(row) for row in rs]



############################################## DEMOGRAPHICS ##################################################


#gets average age for men and women within a specific state
def get_average_state_age(state, start, end):
  
  with engine.connect() as con:
    query = sql.text("""



    """)
    
    st = parse(start)
    et = parse(end)

    rs = con.execute(query,state_name = state, start_date = st.date(), end_date = et.date() ).fetchall()
     
    return [dict(row) for row in rs]
  


#get average age for men and women within the database
def get_avg_age():
  with engine.connect() as con:
    query = sql.text("""



    """)

    rs = con.execute(query ).fetchall()
     
    return [dict(row) for row in rs]




  


#get the ethnic break down for a specific state in a specific year for
def get_state_demographics(state, start, end):
  #print(start)

  with engine.connect() as con:
    query = sql.text("""
    SELECT count(case when computed_missing_age_min <= 10 and gender = 'female' then 1 end) as fchildren,
		count(case when computed_missing_age_min > 10  and computed_missing_age_min < 18 and gender = 'female' then 1 end) as fteen,
		count(case when computed_missing_age_min >= 18 and computed_missing_age_min < 27 and gender = 'female' then 1 end) as fyoung_adult,
		count(case when computed_missing_age_min >= 27 and computed_missing_age_min < 45 and gender = 'female' then 1 end) as fadult,
		count(case when computed_missing_age_min >= 45 and computed_missing_age_min < 65 and gender = 'female' then 1 end) as folder_adult,
		count(case when computed_missing_age_min >= 65 and gender = 'female'  then 1 end) as fsenior,
		count(case when computed_missing_age_min <= 10 and gender = 'male' then 1 end) as mchildren,
		count(case when computed_missing_age_min > 10  and computed_missing_age_min < 18 and gender = 'male' then 1 end) as mteen,
		count(case when computed_missing_age_min >= 18 and computed_missing_age_min < 27 and gender = 'male' then 1 end) as myoung_adult,
		count(case when computed_missing_age_min >= 27 and computed_missing_age_min < 45 and gender = 'male' then 1 end) as madult,
		count(case when computed_missing_age_min >= 45 and computed_missing_age_min < 65 and gender = 'male' then 1 end) as molder_adult,
		count(case when computed_missing_age_min >= 65 and gender = 'male'  then 1 end) as msenior
	, ethnicity, race_ethnicity
    FROM namusdb.dbo.[namus-missings]
	WHERE full_state_name = :state_name and newdate >= :start_date and newdate <= :end_date 
    GROUP BY ethnicity, race_ethnicity

    """)
    
    st = parse(start)
    et = parse(end)
    #query.bindparams(state_name = state, start_date = start, end_date = end)
    rs = con.execute(query,state_name = state, start_date = st.date(), end_date = et.date() ).fetchall()
     
    return [dict(row) for row in rs]

def get_demographics(year):

  with engine.connect() as con:
    query = sql.text("""
    SELECT count(case when computed_missing_age_min <= 10 and gender = 'female' then 1 end) as fchildren,
		count(case when computed_missing_age_min > 10  and computed_missing_age_min < 18 and gender = 'female' then 1 end) as fteen,
		count(case when computed_missing_age_min >= 18 and computed_missing_age_min < 27 and gender = 'female' then 1 end) as fyoung_adult,
		count(case when computed_missing_age_min >= 27 and computed_missing_age_min < 45 and gender = 'female' then 1 end) as fadult,
		count(case when computed_missing_age_min >= 45 and computed_missing_age_min < 65 and gender = 'female' then 1 end) as folder_adult,
		count(case when computed_missing_age_min >= 65 and gender = 'female'  then 1 end) as fsenior,
		count(case when computed_missing_age_min <= 10 and gender = 'male' then 1 end) as mchildren,
		count(case when computed_missing_age_min > 10  and computed_missing_age_min < 18 and gender = 'male' then 1 end) as mteen,
		count(case when computed_missing_age_min >= 18 and computed_missing_age_min < 27 and gender = 'male' then 1 end) as myoung_adult,
		count(case when computed_missing_age_min >= 27 and computed_missing_age_min < 45 and gender = 'male' then 1 end) as madult,
		count(case when computed_missing_age_min >= 45 and computed_missing_age_min < 65 and gender = 'male' then 1 end) as molder_adult,
		count(case when computed_missing_age_min >= 65 and gender = 'male'  then 1 end) as msenior
	, ethnicity, race_ethnicity
    FROM namusdb.dbo.[namus-missings]
    GROUP BY ethnicity, race_ethnicity

    """)
    
   
    #query.bindparams(state_name = state, start_date = start, end_date = end)
    rs = con.execute(query).fetchall()
     
    return [dict(row) for row in rs]

def get_gender_breakdown(start_date, end_date):
    with engine.connect() as con:
      query = sql.text("""
    	SELECT SUM(case when gender = 'female' then 1 else 0 end) as female,
      SUM(case when gender = 'male' then 1 else 0 end) as male
      FROM namusdb.dbo.[namus-missings]
      WHERE [newdate] >= :start and newdate <= :end    """)

      rs = con.execute(query, start = start_date, end = end_date).fetchall()
     
    return [dict(row) for row in rs]


def get_gender_age_demographics():

  with engine.connect() as con:
    query = sql.text("""
    SELECT count(case when computed_missing_age_min <= 10 and gender = 'female' then 1 end) as fchildren,
		count(case when computed_missing_age_min > 10  and computed_missing_age_min < 18 and gender = 'female' then 1 end) as fteen,
		count(case when computed_missing_age_min >= 18 and computed_missing_age_min < 27 and gender = 'female' then 1 end) as fyoung_adult,
		count(case when computed_missing_age_min >= 27 and computed_missing_age_min < 45 and gender = 'female' then 1 end) as fadult,
		count(case when computed_missing_age_min >= 45 and computed_missing_age_min < 46 and gender = 'female' then 1 end) as folder_adult,
		count(case when computed_missing_age_min >= 65 and gender = 'female'  then 1 end) as fsenior,
		count(case when computed_missing_age_min <= 10 and gender = 'male' then 1 end) as mchildren,
		count(case when computed_missing_age_min > 10  and computed_missing_age_min < 18 and gender = 'male' then 1 end) as mteen,
		count(case when computed_missing_age_min >= 18 and computed_missing_age_min < 27 and gender = 'male' then 1 end) as myoung_adult,
		count(case when computed_missing_age_min >= 27 and computed_missing_age_min < 45 and gender = 'male' then 1 end) as madult,
		count(case when computed_missing_age_min >= 45 and computed_missing_age_min < 46 and gender = 'male' then 1 end) as molder_adult,
		count(case when computed_missing_age_min >= 65 and gender = 'male'  then 1 end) as msenior
    FROM namusdb.dbo.[namus-missings]


    """)
    
   
    #query.bindparams(state_name = state, start_date = start, end_date = end)
    rs = con.execute(query).fetchall()
     
    return [dict(row) for row in rs]









































































































































































































































