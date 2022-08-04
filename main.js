const express=require('express');
const connectDB =require('./configs/database')
const app=express();

app.use(express.json());
app.use('/',require('./controllers/invoice'));
const PORT=8080;

app.listen(PORT, async () => {
    try {
        await connectDB();
        console.log(`Server is running on ${PORT}`);
    } catch (error) {
        console.log(error.message);
    }
})