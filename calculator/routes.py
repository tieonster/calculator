from calculator import app
from flask import render_template, request, jsonify
from .easy import *
from .not_as_easy import *
from .not_easy import *

@app.route("/")
def calculator():
  return render_template("calculator.html")


@app.route("/calculate", methods=['POST'])
def calculate():
  calculated_value = ""
  print(request.get_json())

  if (request.get_json()['operator'] == '+'):
    calculated_value = addition(int(request.get_json()['arg1']), int(request.get_json()['arg2']))
  elif (request.get_json()['operator'] == '-'):
    calculated_value = substraction(int(request.get_json()['arg1']), int(request.get_json()['arg2']))
  elif (request.get_json()['operator'] == '*'):
    calculated_value = multiplication(int(request.get_json()['arg1']), int(request.get_json()['arg2']))
  elif (request.get_json()['operator'] == '/'):
    calculated_value = division(int(request.get_json()['arg1']), int(request.get_json()['arg2']))
  
  return jsonify({'calculated_value': calculated_value})

@app.route("/reverse", methods=['POST'])
def reverse():
  calculated_value = ""
  print(request.get_json())
  
  calculated_value = reverse_digits(int(request.get_json()['arg1']))

  return jsonify({'calculated_value': calculated_value})

@app.route("/sort", methods=['POST'])
def sort():
  calculated_value = ""
  print(request.get_json())
  
  calculated_value = sort_digits(int(request.get_json()['arg1']))
  
  return jsonify({'calculated_value': calculated_value})

@app.route("/prime", methods=['POST'])
def prime():
  calculated_value = ""
  print(request.get_json())
  
  calculated_value = isPrime(int(request.get_json()['arg1']))
  
  return jsonify({'calculated_value': calculated_value})

@app.route("/palindrome", methods=['POST'])
def palindrome():
  calculated_value = ""
  print(request.get_json())
  
  calculated_value = isPalindrome(int(request.get_json()['arg1']))
  
  return jsonify({'calculated_value': calculated_value})