import express from "express";
import mongoose from "mongoose";
import route from "./routes/voteRoute.js"
import cors from "cors";
import routevoted from "./routes/votedRoute.js";
const app=express();


app.use(express.json());
app.use(cors());
app.use('/api/vote',route);
app.use('/api',routevoted);
app.listen(3000);
mongoose.connect(
    "mongodb+srv://sughavang:sughavang0829@cluster0.pjkvm.mongodb.net/voting_system?retryWrites=true&w=majority&appName=Cluster0"

)
.then(()=>console.log("DB connected"))
.catch((err)=>console.log(err));