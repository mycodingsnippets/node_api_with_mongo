let express = require('express')
let path = require('path')
let bodyParser = require('body-parser')
let personRoute = require('./routes/person')
let customerRoute = require('./routes/customer')

let app = express()

app.use(bodyParser.json())
app.use((req,res,next) => {
    console.log(`${new Date().toString()} => ${req.originalUrl} => ${req.body}`)
    next() //important for middleware functions
})
app.use(personRoute)
app.use(customerRoute)
app.use(express.static('public'))
//Middlware for error handling or 404
app.use((req, res, next) => {
    res.status(404).send('We think you are lost!')
})
//Middleware for 500 error
app.use((err, req, res, next)=>{
    console.error(err.stack)
    res.sendFile(path.join(__dirname, '../public/500.html'))
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => 
    console.log(`Server has started on ${PORT}`)
)