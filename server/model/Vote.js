import mongoose, {Schema} from "mongoose";

const schema = new Schema({
    id : String,
    age: String,
    symbol:String,
    party: String,
    state: String,
    name: String
});

export const Vote = mongoose.model("Vote", schema, "vote");