const _ = require('lodash');

const numbers = [ 33,46, 50, 45,50,50,50,20,20,20,20,33,33,33,33,33,33,45,6];

_.each(numbers, function(number, i){
    console.log(number)
});