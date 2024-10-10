import mongoose from "mongoose";

//Dice que se va a guardar y como
const userSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true,
        unique: true
    },
    email:{
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    }
}, {
    timestamps: true

});

//interactua con la base de datos
export default mongoose.model('User', userSchema);