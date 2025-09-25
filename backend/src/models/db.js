const mongoose=require('mongoose');

const mongo_url=process.env.MONGO_URL;

mongoose.connect(mongo_url)
    .then(()=> {
        console.log("Database Connected Successfully");
    }).catch((err)=> {
        console.log('Database connection error:',err);
    })