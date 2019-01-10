const express = require('express')
const router = express.Router()
const Events = require('../models/Events')
const User = require('../models/User')

//

router.post('/event',(req,res,next)=>{
    Events.create({
        id: req.body.id,
        url: req.body.url,
        start: req.body.start,
        name: req.body.name,
        description: req.body.description,
        user: req.body.user.id
    })
        .then(response => {
            User.findByIdAndUpdate(req.body.user._id,{$push:{events:response._id}})
                .then(response =>{
                    return res.json(response)})
                .catch(e=>next(e))
        })
        .catch(e=> res.json(e))
})


router.get('/event/:id',(req,res,next)=>{
    const {id} = req.params
    Events.find({user:id})
        .then(response => res.json(response))
        .catch(e => res.json(e))
})


router.delete('/event/:id',(req,res,next)=>{
    const {id} = req.params
    Book.findByIdAndRemove(id)
        .then(response => res.json({message: "Libro eliminado"}))
        .catch(e=> res.json(e))
})



module.exports = router