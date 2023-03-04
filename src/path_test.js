let path = require('path');
let fs = require('fs');


const pathStr = path.join('/a', '/b/c', '../../', 'd');

console.log(pathStr);

let s = path.basename(pathStr);
console.log(s)
 
fs.readFile(path.join(__dirname, '../resources', 'test.txt'), 'utf-8', function (err, data) {
    console.log(err)
    console.log('------')
    console.log(data)
})









