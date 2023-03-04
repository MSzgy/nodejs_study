const fs = require('fs')

const path = require('path')

const regStyle = /<style>[\s\S]*<\/style>/

const regScript = /<style>[\s\S]*<\/style>/

// 读取文件
fs.readFile(path.join(__dirname, 'resources/index.html'), 'utf-8', function (err, data) {
    if (err) {
        return console.log("读取失败")
    }
    resolveCSS(data)
})

function resolveCSS(htmlStr) {
    const r1 = regStyle.exec(htmlStr)

    const newCSS = r1[0].replace('<style>', '').replace('</style>', '')

    fs.writeFile(path.join(__dirname, 'index.css'), newCSS, err => {
        if (err) return console.log("写入CSS样式失败" + err.message)
        console.log("success")
    })
}