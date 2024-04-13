import mongoose from 'mongoose'; 
import dotenv from 'dotenv'
dotenv.config();

export async function mongoConnection (){
    const params = {
        useNewUrlParser: true,
        useUnifiedTopology:true,
    }
    try{
        /* await mongoose.connect('mongodb://127.0.0.1:27017/crm_db', params) */
        await mongoose.connect('mongodb+srv://jeevaayyavu2011:%40Jeeva1845@crm.5hiw22o.mongodb.net/crm', params)
        /* await mongoose.connect('mongodb+srv://jeevaayyavu2011:%40Jeeva1845@crm.5hiw22o.mongodb.net/?retryWrites=true&w=majority&appName=crm', params) */
        console.log("Mongo database Connected")
    } catch(error){
        console.log(error)
    }
}