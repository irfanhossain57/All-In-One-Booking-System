import express from "express"
import Hotel from "../models/Hotel.js"
const router=express.Router();

//create
router.post("/",async(req,res)=>{
    const newHotel= new Hotel(req.body)
    try{
        const savedHotel=await newHotel.save()
        res.status(200).json(savedHotel)

    }catch(err){
        res.status(500).json(err)
    }
})
//update
router.put("/:id",async(req,res)=>{
    
    try{
        const updatedHotel=await Hotel.findByIdAndUpdate(req.params.id, {$set: req.body},{new:true})
        res.status(200).json(updatedHotel)

    }catch(err){
        res.status(500).json(err)
    }
})

//delete
router.delete("/:id",async(req,res)=>{
    
    try{
        const updatedHotel=await Hotel.findByIdAndDelete(req.params.id, {$set: req.body},{new:true})
        res.status(200).json("Hotel has been deleted")

    }catch(err){
        res.status(500).json(err)
    }
})

//get
router.get("/:id",async(req,res)=>{
    
    try{
        const Hotel=await Hotel.findById(req.params.id);
        res.status(200).json(Hotel)

    }catch(err){
        res.status(500).json(err)
    }
})

//get all
router.get("/",async(req,res)=>{
    
    try{
        const Hotels=await Hotel.find();
        res.status(200).json(Hotels)

    }catch(err){
        res.status(500).json(err)
    }
})
export default router