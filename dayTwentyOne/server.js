var express = require('express')
var app = express()
var path = require('path')
var port = 3000


app.use(express.static('data'))

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'ajax-store.html'))
})

// app.get('/blog', function(req, res) {
//     res.sendFile(path.join(__dirname, 'ajax-blog.html'))
// })

app.get('/data/store', function(req, res) {
    res.sendFile(path.join(__dirname, '/data/inventory.json'))
})

app.get('/data/blog', function(req, res) {
    res.sendFile(path.join(__dirname, '/data/blog.json'))
})

app.listen(3000, function() {
    console.log('App is listening on port: ', port)
})