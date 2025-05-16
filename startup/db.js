const mongoose=require('mongoose');
module.exports=function(){
    mongoose.connect('mongodb://localhost:27017/delta')
    .then(()=>console.log('Connected to MongoDB...'))
}