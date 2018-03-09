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

app.secret_key = os.urandom(24)
#Run the app on localhost port 5000
#debug = True -> you don't have to restart flask 
#for changes to go through, TURN OFF FOR PRODUCTION
if __name__ == "__main__":
	app.run('127.0.0.1', 5000, debug=True)
app.run()