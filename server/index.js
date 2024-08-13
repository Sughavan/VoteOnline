import e from "express";
const router=e.Router();
server.get("/",(req,res)=>
{
    res.send("express page");

});
// module.exports=router;

server.listen(3000);