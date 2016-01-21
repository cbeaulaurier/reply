var reply = require('./../');

// options object
var opts = {
    "name": {
        "message": "Please enter your name.",
        "allow_empty": false
    },
    "occupation": {
        "message": "Please enter your current occupation.",
        "options": ["Student", "Software developer", "Vending machine salesperson"]
    },
    "pets": {
        "message": "Do you have any pets?",
        "type": "boolean",
        "default": true
    }
};

// example with get
reply.get(opts, function(err, answers) {
    console.log("You answered: ");
    console.log(answers);
});