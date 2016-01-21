var reply = require('./../');

// example with confirm
reply.confirm("Would you give this mouse a cookie?", function(err, yes) {
    if (!err && yes) {
        console.log("The mouse squeaks in delight!");
    } else {
        console.log("The mouse scurries away.");
    }
});