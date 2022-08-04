const mongoose=require("mongoose");

const invoiceSchema= new mongoose.Schema({
    "invoice_date":{
        type:Date, 
        default:new Date(), 
        required:true
    },
    "invoice_number":{
        type:String,
        default:new Date(),
        // unique:[true,'This should be unique']
    },
    "invoice_amount":{
        type:Number,
        required:true,
        default:0
    }
},{
    timestamps:true
})
const Invoice=mongoose.model('Invoice',invoiceSchema);

module.exports=Invoice;