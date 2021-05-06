const express= require('express')
const router= express.Router()
const Meetmodel= require("../models/meets")

router.get('/how-many-beers', async (req, res)=>{
    try {
        const {name}= req.body
        const meet= await Meetmodel.find({name})
        const amount= meet.people
        console.log(amount)
        console.log(meet)
        res.send(meet)
    } 
    catch(e){
        res.status(500)
    }
    
})
module.exports= router