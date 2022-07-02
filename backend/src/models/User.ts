import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    name: String,
    phone: String,
    address: String,
    username: String,
    password: String,
    wallets: [String]
})

export const User = mongoose.model("User", UserSchema);