const mongoose= require('mongoose');

const URI="mongodb+srv://Nayan:Nayan@cluster0.2pbvs.mongodb.net/Inventory?retryWrites=true&w=majority";

//mongoose.set('useUnifiedTopology', true);
const connectDB= async()=>{
    await mongoose.connect(URI, {
        useUnifiedTopology: true,
        useNewUrlParser:true
    });
};

module.exports = connectDB;