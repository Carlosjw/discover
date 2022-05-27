const myModule = require('./exports');

console.log(myModule);

let values = [];
for(let value in myModule){
    console.log(
        value,
        myModule[value]
    )
    values.push(myModule[value]);

};

console.log(values);