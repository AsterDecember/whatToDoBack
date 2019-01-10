const express = require('express')
const router = express.Router()
const Events = require('../models/Events')
const User = require('../models/User')

//

router.post('/books',(req,res,next)=>{
    Events.create({
        name: req.body.name,
        year: req.body.year,
        description: req.body.description,
        author: req.body.author
    })
        .then(response => {
            User.findByIdAndUpdate(req.body.user,{$push:{events:response._id}})
                .then(response => res.json(response))

        })
        .catch(e=> res.json(e))
})

router.get('/books/:id',(req,res,next)=>{
    const {id} = req.params
    Events.find({user:id})
        .then(response => res.json(response))
        .catch(e => res.json(e))
})

/*router.get('/books/:id',(req,res,next)=>{
    const {id} = req.params
    Book.findById(id)
        .then(response => res.json(response))
        .catch(e => res.json(e))
})*/


router.delete('/books/:id',(req,res,next)=>{
    const {id} = req.params
    Book.findByIdAndRemove(id)
        .then(response => res.json({message: "Libro eliminado"}))
        .catch(e=> res.json(e))
})



module.exports = router