const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan')
const bodyParser = require('body-parser');
const connectDB = require('./src/config/db');
const userRouter = require('./src/routes/user.routes');

dotenv.config();
const app = express();

app.use(express.json())
app.use(morgan('dev'))
app.use(bodyParser.json());
const PORT = process.env.PORT || 3000;

app.get('/', (req, res)=> {
    res.send('Welcome To My Home Page')
})

app.use('/api/users', userRouter);



app.listen(PORT, ()=> {
    connectDB()
    console.log(`Server is running on http://localhost:${PORT}`)
})