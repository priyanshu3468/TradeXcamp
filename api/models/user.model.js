import mongoose from "mongoose";

 const userSchema = new mongoose.Schema ({
    username:{
        type:String,
        required:true,
        unique: true,
    },
    email:{
        type:String,
        required:true,
        unique: true,
    },
    password:{
        type:String,
        required:true,
    },
    avatar:{
        type: String,
        default: "https://tse3.mm.bing.net/th?id=OIP.WkuGv4-iR5uPKZFcs7UjvAHaHs&pid=Api&P=0&h=180"
    },
    },
{timestamps: true}
);

 const User =mongoose.model('User',userSchema);
 export default User;
 