// Setup empty JS array to act as endpoint for all routes
let projectData = [];
const mockApi = require('./mockAPI.js')
const express = require('express')
const app = express()
const port = 3002
const path = require('path')

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());
// Initialize the main project folder
app.use(express.static('dist'))

// console.log(__dirname)

app.get('/', function (req, res) {
    // res.sendFile('dist/index.html')
    res.sendFile(path.resolve('src/client/views/index.html'))
})


app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
    //res.sendFile(path.resolve('src/client/views/index.html'))
})


app.get('/all', (req, res)=> {
    // res.json(booksApi)
    // console.log(booksApi)
    res.send(projectData)
    console.log(projectData)
})
app.post('/all', (req,res)=> {
    const incomingData = req.body;
    console.log(incomingData)
    projectData.push(incomingData)
    res.send(projectData)
})



//spin up server
app.listen(port, () => {
    console.log(`Trip Planner app listening at http://localhost:${port}`)
})

