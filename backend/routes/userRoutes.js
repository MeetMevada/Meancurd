const router = require('express').Router()
const User = require('../model/userModel')

router.get('/', async (req, res) => {
    await User.find()
        .then(response => {
            res.json(response)
        })
        .catch(error => {
            console.log(error)
        })
})

router.delete('/deleteuser/:id', async (req, res) => {
    User.findByIdAndDelete({_id: req.params.id})
        .then(response => {
            res.json(response)
        })
        .catch(error => {
            console.log(error)
        })
})

router.put('/edituser/:id', async (req, res) => {
    User.findByIdAndUpdate({_id: req.params.id},req.body)
        .then(response =>{
            res.json(response)
        })
    
})


router.post('/adduser', async (req, res) => {
    const newUser = new User({
        name: req.body.name,
        mobile: req.body.mobile,
        email: req.body.email,
        dob: req.body.dob
    })

    newUser.save()
        .then(response => {
            res.json(response)
        })
        .catch(error => {
            console.log(error)
        })
})

module.exports = router