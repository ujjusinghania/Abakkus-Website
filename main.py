from flask import Flask, request, render_template, session, url_for, redirect, request, Blueprint
import os

app = Flask(__name__)

@app.route('/')
def homePage(): 
    return render_template('index.html')

@app.route('/about')
def aboutPage(): 
    return render_template('about.html')

@app.route('/contactUs')
def contactUsPage(): 
    return render_template('contact.html')

@app.route('/people')
def peoplePage():
    return render_template('people.html')

@app.route('/newsLetterRegistration', methods=['POST', 'GET'])
def gotNewPerson():
    print(request.args.get('first_name'))
    return redirect(url_for('homePage'))

@app.errorhandler(404)
def page_not_found(e):
    return render_template('404.html'), 404

app.secret_key = os.urandom(24)
#Run the app on localhost port 5000
#debug = True -> you don't have to restart flask 
#for changes to go through, TURN OFF FOR PRODUCTION
if __name__ == "__main__":
	app.run('127.0.0.1', 5000, debug=True)
app.run()