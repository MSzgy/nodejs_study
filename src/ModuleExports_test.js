// module.exports.username = 'John Doe';
//
// module.exports.sayHello = function () {
//     console.log('Hello');
// }

exports = {
    username: 'John Doe',
}
console.log(exports === module.exports);
module.exports.age = 18;