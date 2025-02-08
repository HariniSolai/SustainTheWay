# python3 -m venv myprojectenv
# source myprojectenv/bin/activate
# pip install flask
# To run --> 
# python3 app.py
# link --> http://127.0.0.1:5000
# you can also identify the link in the terminal as it will say "Running on ...."

from flask import Flask, render_template, request

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/find', methods=['POST'])
def find():
    # Handle the "Find" button click action here
    return "<h1>You clicked 'Find'!</h1>"

@app.route('/help', methods=['POST'])
def help():
    # Handle the "Help" button click action here
    return "<h1>You clicked 'Help'!</h1>"

@app.route('/learn', methods=['POST'])
def learn():
    # Handle the "Learn" button click action here
    return "<h1>You clicked 'Learn'!</h1>"

if __name__ == '__main__':
    app.run(debug=True)
