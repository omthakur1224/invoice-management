const mongoose=require('mongoose');

const MongoUri="mongodb://0.0.0.0:27017/invoice";
const connect=()=>{
    mongoose.connect(MongoUri)
    .then((res)=>console.log("Mongo connection established"))
    .catch((err)=>console.log("mongo connection failed"))
}
module.exports=connect;