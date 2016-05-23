/**
JSON

 * JSON: JavaScript Object Notation.
 * JSON is a syntax for storing and exchanging data.
 * JSON is an easier-to-use alternative to XML.

 * JSON - Evaluates to JavaScript Objects
   The JSON format is syntactically identical to the code for creating JavaScript objects.

    Because of this similarity, instead of using a parser (like XML does), a JavaScript
    program can use standard JavaScript functions to convert JSON data into native JavaScript objects.

 * JSON Syntax Rules
 * JSON syntax is derived from JavaScript object notation syntax:

    Data is in name/value pairs
    Data is separated by commas
    Curly braces hold objects
    Square brackets hold arrays

*** JSON names require double quotes. JavaScript names don't. ***
        "firstName":"John"
              vs
        firstName: "John";

 * JSON values can be:

    A number (integer or floating point)
    A string (in double quotes)
    A Boolean (true or false)
    An array (in square brackets)
    An object (in curly braces)
    null

 * JSON objects are written inside curly braces.
        {"firstName":"John", "lastName":"Doe"}

 * JSON Arrays
 * JSON arrays are written inside square brackets.
    Just like JavaScript, a JSON array can contain multiple objects:
        "employees":[
        {"firstName":"John", "lastName":"Doe"},
        {"firstName":"Anna", "lastName":"Smith"},
        {"firstName":"Peter","lastName":"Jones"}
        ]

 */


//PARSE A JSON TEXT(STRING) INTO A JAVASCRIPT OBJECT
//USE data.js object "employees"
//converts JSON text (string) into a javascript object
//JSON.parse(var name assigned to the JSON object)
var obj = JSON.parse(text);
console.log(obj);

console.log(obj.employees[1].firstName + " " + obj.employees[1].lastName);


//ACCESSING A JSON ARRAY
//Use data.js object "people"
//Use json_weather.js

console.log(myJSON.people[0].job);


//Load JSON data in the HTML using DOM



/**********   PRACTICE EXERCISES   *******************/
//1. Create a JSON object in the blank json_weather.js file using the provided weatherData.txt file.
// Use the following line if code to test your new file: console.log(data.results.forecast[2].day);
console.log(data.results.forecast[2].day);


// 2. Console.log the forecast for the next 3 days in sentence (String) format
// example: Today is Saturday. The high is 82. The low is 65. It will be partly cloudy.

for(var i = 0; i < data.results.forecast.length; i++) {
    var output = "";
    var day = data.results.forecast[i];
    var fullDay = "";

    switch(day.day) {
        case "Mon":
            fullDay += "Monday";
            break;
        case "Tue":
            fullDay += "Tuesday";
            break;
        case "Wed":
            fullDay += "Wednesday";
            break;
        case "Thu":
            fullDay += "Thursday";
            break;
        case "Fri":
            fullDay += "Friday";
            break;
        case "Sat":
            fullDay += "Saturday";
            break;
        case "Sun":
            fullDay += "Sunday";
            break;
    }

    if (i == 0) { //Today
        output += "Today is " + fullDay + ". The high is " + day.high + ". The low is " + day.low + ". It will be " + day.text + ".";
    } else if (i == 1) { //Tomorrow
        output += "Tomorrow is " + fullDay + ". The high will be " + day.high + ". The low will be " + day.low + ". It will be " + day.text + ".";
    } else {
        output += "The next day is " + fullDay + ". The high will be " + day.high + ". The low will be " + day.low + ". It will be " + day.text + ".";
    }

    console.log(output);
}


// 3. Console.log each of the employees showing their full names (from the object "employees"
// and jobs (from the object "people").

var obj = JSON.parse(text);
for(var employeeIndex in obj.employees) {
    var employee = obj.employees[employeeIndex];
    for(var jobIndex in myJSON.people) {
        var job = myJSON.people[jobIndex];
        if (employee.firstName.toLowerCase() == job.name.toLowerCase()) {
            console.log(employee.firstName + " " + employee.lastName + ", " + job.job);
            break;
        }
    }
}



