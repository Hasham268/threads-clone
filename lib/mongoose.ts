import mongoose from 'mongoose';
let isConnected = false;

export const connectToDb = async () => {
    mongoose.set('strictQuery', true);

    if(!process.env.MONGODB_URL) return console.log('MongoDB url not found');

    if (isConnected){
        console.log('mongodb already connected')
        return;
    }
    
    try{
        await mongoose.connect(process.env.MONGODB_URL);

        isConnected = true;
        console.log('Mongodb Connected')
    }catch(error){   
        console.log(error)
    }
}
