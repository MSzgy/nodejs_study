const fs = require('fs')
fs.readFile('/Users/zouguoyang/Study/JavaScript/nodejs_study/resources/test.txt', 'utf-8', function (err, data) {
    console.log(err)
    console.log('------')
    console.log(data)
})