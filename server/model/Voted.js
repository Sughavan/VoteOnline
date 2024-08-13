import mongoose ,{Schema} from "mongoose";

const schema =new Schema({
    name:String,
    aadhar:Number,
    voterId:Number,
    selectedCandidate:String

});

export const voted=mongoose.model("voted",schema,"voted")