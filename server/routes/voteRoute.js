import express from 'express';
import { Vote } from '../model/Vote.js';
const route = express.Router();

route.get('/', async(req,res) =>{
    const data = await Vote.find();
    res.status(200).json(data);
});
route.post('/', async(req,res) =>{
    const new_data = await new Vote(req.body);
    new_data.save();
    res.status(201).json(new_data);
});

export default route;
