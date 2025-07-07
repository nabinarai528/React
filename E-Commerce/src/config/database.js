import mongoose from "mongoose";
const  connectDb = async()=>{
    try{
    mongoose.connect('mongodb+srv://np05cp4a230073:nabinarai@cluster0.okl2q5y.mongodb.net/')
    console.log ("database connected successfully")
    } catch (error){
        console.log(error.message)
    }
}
export default connectDb;