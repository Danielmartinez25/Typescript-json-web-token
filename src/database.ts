import mongoose from 'mongoose';
mongoose.connect('mongodb+srv://danielMartinez:daniel1890@cluster0.npgghpc.mongodb.net/json-web-token',{
    
})
.then(db => console.log('Database is connected'))
.catch(error => console.log(error))
