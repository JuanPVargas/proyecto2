import mongoose from 'mongoose';

export const connectDB = async () => {
    try{
        await mongoose.connect('mongodb+srv://inmobiliaria:admin@cluster0.hym6w.mongodb.net/')
        console.log('DB is connected')
    } catch (error) {
        console.error('Error connecting to MongoDB: ', error);
    }
};
