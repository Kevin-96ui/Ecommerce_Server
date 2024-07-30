const { Timestamp } = require("mongodb");
const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
    {
        username:{
            type:"String",
            required:true,
        },
        email:{
            type:"String",
            required:false,
        },
        password:{
            type:"String",
            required:true,
            unique:true,
        },
    },
    {
        timestamps:true,
    }
)

const user = mongoose.model("user",userSchema);
module.exports=user;