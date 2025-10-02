const mongoose=require("mongoose");
mongoose.connect("mongodb+srv://akhand4025_db_user:AhGqek4wwoBPBQgo@cluster0.94ciyj1.mongodb.net/credential");
const infoSchema=mongoose.Schema({
    username:String,
    password:String
})

const info= mongoose.model('userdata',infoSchema);
module.exports= info
