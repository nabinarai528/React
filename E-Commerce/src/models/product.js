import mongoose from "mongoose"



const product = mongoose.model('Product',new mongoose.Schema({
productName: {
    type: String,
    required: true
},
description: {
    type: String
},
price:{
    type:Number,
    required:true
},
ram:{
    type:Number,
    required :true
},
rom:{
    type:Number,
    required :true
},
gen:{
    type:Number
},
brand:{
    type:String
}
},{
    timestamps:true
}))
export default product;