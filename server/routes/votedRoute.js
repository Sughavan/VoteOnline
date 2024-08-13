import express from 'express';

import { voted } from '../model/Voted.js';
const routevoted = express.Router();

routevoted.get('/voted', async(req,res) =>{
    const data = await voted.find();
    res.status(200).json(data);
});
routevoted.post('/voted', async(req,res) =>{
    const new_data = await new voted(req.body);
    new_data.save();
    res.status(201).json(new_data);
});

export default routevoted;
