import mongoose from 'mongoose';

export const connectDB = async () => {
    try{
        await mongoose.connect('mongodb+srv://Santafe2005:Santafe2005@cluster0.jn84s.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
        console.log('DB is connected')
    } catch (error) {
        console.error('Error connecting to MongoDB: ', error);
    }
};

