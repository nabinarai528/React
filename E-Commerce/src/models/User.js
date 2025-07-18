import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true
    },

    password: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true,
        unique: true
    },

    role: {
        type: String,
        enum: ["ADMIN", "CUSTOMER"],
        default: "CUSTOMER"
    },
    otpExpiryDate: {
        type: Date,
        default: null}
}, {
    timestamps: true
})

const User = mongoose.model("User", userSchema)
export default User;
