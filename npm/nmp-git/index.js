const _ = require('lodash');

const numbers = [ 33,46, 7656, 45];

_.each(numbers, function(number, i){
    console.log(number)
});