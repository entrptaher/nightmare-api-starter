const functions = require("./functions")
const express = require('express')
const app = express()

// Starts the Instance and puts in the array, returns the ID
app.get('/start', function(req, res) {
    functions.start()
    res.send('Instance Created with ID')
})

// Does specific Action of ID
app.get('/action/:id/:action', function(req, res) {
    functions.browse(req.params.id)
    res.send('Doing Action ' + req.params.action + ' on ID: ' + req.params.id)
})

// Shows all Stats
app.get('/stats', function(req, res) {
    res.send('Showing All Stats')
})

// Ends the instance with ID
app.get('/end/:id', function(req, res) {
    functions.end(req.params.id)
    res.send('Ending Session with ID' + req.params.id)
})

// Ends all session
app.get('/end', function(req, res) {
    functions.end()
    res.send('Ending All Sessions')
})

app.listen(3000, function() {
    console.log('Example app listening on port 3000!')
})
