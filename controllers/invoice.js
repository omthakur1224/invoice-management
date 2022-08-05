const mongoose=require('mongoose');
const express=require('express');
const router=express.Router();

const Invoice = require('../models/invoice');

router.post('/create', async(req,res)=>{
    // console.log(req.body,"body")
    const bill= await Invoice.create(req.body)
    if(bill){
        res.status(200).json(bill);
    }
    else{
        res.status(404).send('creation request failed')
    }
    
})
// API to get all invoice
router.get('/invoice', async(req,res)=>{

    try{
        const bill= await Invoice.find();
    if(bill){
            res.status(200).send(bill);
        }
        else{
            res.status(404).send('creation request failed')
        }
    }
    catch(err){
        res.send(400).send("External error")
    }
})

router.delete('/invoice/:id', async(req,res)=>{
    // console.log(req.params,"para")
    try{
        const bill= await Invoice.findOneAndDelete({invoice_number:req.params.id})
        if(bill){
            res.status(200).json(bill);
        }
        else{
            res.status(404).send('bill not found')
        }
    }
    catch(err){
        res.send(400).send("External Error")
    }
    
})

//API to update data
router.patch('/invoice/update/:id', async(req,res)=>{
    console.log(req.body,"updatedbody")
    try{
        const bill= await Invoice.findOneAndUpdate({invoice_number:req.params.id},req.body,{new:true})
        // query format findOneAndUpdate({search param},{updation},{new:true,upsert:true})
        if(bill){
            res.status(200).json(bill);
        }
        else{
            res.status(404).send('bill not found')
        }
    }
    catch(err){
        res.send(400).send("External Error")
    }
    
})


//getting data between two dates

router.post('/between',(req, res) => {
    let {Fromdate,Todate}=req.query
    var query = {
        // username: req.body.username,
        invoice_date: {
            $gte: new Date(new Date(Fromdate).setHours(00, 00, 00)),
            $lt: new Date(new Date(Todate).setHours(23, 59, 59))
        },
        // leave: { $exists: false }
    }

    Invoice.find(query).then((err,data)=>{

        if (err) { return res.status(300).json("Error") }
            else {
                return res.status(200).json({ data: data })
            }
    })
    .catch((err)=>{
        console.log(err)
    })
})
module.exports=router;