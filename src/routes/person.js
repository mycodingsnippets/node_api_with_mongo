let express = require('express')
let router = express.Router()

router.get('/person', (req, res) => {
    // res.send('You have successfully requested a person')

    if(req.query.name){
        res.send(`You have successfully requested the person ${req.query.name}`)
    }else{
        res.send('you have successfully requested a person')
    }
})

router.get('/person/:name', (req, res) => {
    res.send(`You have successfully requested the person ${req.params.name}`)
})

router.get('/error', (req, res)=> {
    throw new Error('This is a forced error...!!')
})

module.exports = router