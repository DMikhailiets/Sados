import mongoose from 'mongoose'

mongoose.connect('mongodb://localhost:27017/sados_backend', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
})  
