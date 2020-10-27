from flask import Flask, render_template, redirect
from flask import jsonify
from flask import make_response
from flask import request
from flask_cors import CORS
import json


from namus import database


app = Flask(__name__,template_folder='static')
CORS(app,  allow_headers=["Content-Type", "Authorization", "Access-Control-Allow-Credentials"],
      supports_credentials=True)
app.config['CORS_HEADERS'] = 'Content-Type'

@app.before_request
def before_request():
    if request.url.startswith('http://'):
        url = request.url.replace('http://', 'https://', 1)
        request.url = url

@app.after_request
def after_request(response):
  response.headers.add('Access-Control-Allow-Origin', '*')
  response.headers.add('Access-Control-Allow-Headers', 'Content-Type,Authorization')
  response.headers.add('Access-Control-Allow-Methods', 'GET,PUT,POST')
  return response



@app.route('/api/people', methods=["POST"])
def get_people():
    body = json.loads(request.data)
    
    body['title'] = "works!"
    print(body)

    return jsonify(body)


@app.route('/')
def hello_world():
    render_template("index.html")

@app.route('/api/frequency/data/', methods=['GET', 'POST'])
def get_frequency_rates():

    if(request.method == "POST"):
        req = json.loads(request.data)
        try:
            return jsonify(database.get_top_frequency_rates_county(req["start"], req["end"]))
        except Exception as e:
            return make_response(str(e), 500)
        
    else:
        try:
            return jsonify(database.get_top_frequency_rates_county('2015-01-01', '2015-12-31'))
        except Exception as e:
            return make_response(str(e), 500)


@app.route('/api/yearly_count', methods=['POST'])
def get_raw_frequencies_post():


    req = json.loads(request.data)
    try: #
        return jsonify(database.get_raw_frequency_count_by_year(req["start"], req["end"]))
    except Exception as e:
        return make_response(str(e), 500)



@app.route('/api/frequency/raw/', methods=['GET', 'POST'])
def get_raw_frequencies():

    try:
        return jsonify(database.get_raw_frequency_count_by_year('1900-01-01', '2020-12-31'))
    except Exception as e:
        return make_response(str(e), 500)


@app.route('/api/frequency/raw', methods=['GET'])
def get_raw_frequencies_idk():

    try:
        return jsonify(database.get_raw_frequency_count_by_year('1900-01-01', '2020-12-31'))
    except Exception as e:
        return make_response(str(e), 500)
        

#get the frequency chart of a specific state
@app.route('/api/state/<state_name>', methods=["GET", "POST"])
def get_state_frequencies(state_name):
    
    
    if request.method == "POST":

        req = json.loads(request.data)
        
      
        try:

            state = database.get_state_frequencies(req["state"], req["start"], req["end"])
            if state is None:
                return make_response("Not a US state or territory", 404)
            return jsonify(state)
        except ValueError as e:
            return make_response(str(e), 431)
        except Exception as e:
            return make_response(str(e), 500)



    elif request.method == "GET":
        try:
            if state_name is None:
                raise ValueError("State not given")
            state = database.get_state_frequencies(state_name, "2015-01-01", "2015-12-31")
            if state is None:
                return make_response("Not a US state or territory", 404)
            return jsonify(state)
        except ValueError as e:
            return make_response(str(e), 432)
        except Exception as e:
            return make_response(str(e), 500)



#get the frequency chart of a specific state
@app.route('/api/county/<county_name>', methods=["POST", "GET"])
def get_count_frequencies(county_name):
    
    req = json.loads(request.data)
  
        
    try:

        state = database.get_county_frequencies(req["state"], req["county"], req["start"], req["end"])

        if state is None:
            return make_response("Not a US state or territory", 404)
        return jsonify(state)
    except ValueError as e:
        return make_response(str(e), 431)
    except Exception as e:
        return make_response(str(e), 500)




@app.route('/api/all-states', methods=['GET'])
def get_list_all_states():
    try:
        return jsonify(database.get_all_states())
    except Exception as e:
        return make_response(str(e), 500)



@app.route('/api/county-demographics/', methods=['POST', 'GET'])
def get_demographics():
    req = json.loads(request.data)
        
    try:
        demographics = database.get_state_demographics(req["state"], req["start"], req["end"])

        if demographics is None:
            return make_response("Not a US state or territory", 404)
        return jsonify(demographics)
    except Exception as e:
        return make_response(str(e), 500)

@app.route('/api/demographics/gender/', methods=['POST', 'GET'])
def get_gender_breakdown():
    
        
    try:
        demographics = database.get_gender_breakdown('1950-01-01', '2020-01-01')

        if demographics is None:
            return make_response("Not a US state or territory", 404)
        return jsonify(demographics)
    except Exception as e:
        return make_response(str(e), 500)





@app.route('/api/demographics/gender/age/', methods=['POST', 'GET'])
def get_age_gender_breakdown():
        
    try:
        demographics = database.get_gender_age_demographics()
       
        if demographics is None:
            return make_response("Not a US state or territory", 404)
        return jsonify(demographics)
    except Exception as e:
        return make_response(str(e), 500)

@app.route('/api/ethnicity', methods=['POST', 'GET'])
def get_ethnicity_breakdown():
        
    try:
        demographics = database.get_gender_age_demographics()
       
        if demographics is None:
            return make_response("Not a US state or territory", 404)
        return jsonify(demographics)
    except Exception as e:
        return make_response(str(e), 500)




if __name__ == '__main__':
    
    app.run()